import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, extractYoastMeta, getRecentPosts } from '@/lib/wordpress';
import type { Locale } from '@/lib/types';
import { formatDate } from '@/lib/utils';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const [enSlugs, plSlugs] = await Promise.all([
    getAllPostSlugs('en'),
    getAllPostSlugs('pl'),
  ]);
  return [
    ...enSlugs.map(slug => ({ locale: 'en', slug })),
    ...plSlugs.map(slug => ({ locale: 'pl', slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale as Locale);
  if (!post) return {};
  const seo = extractYoastMeta(post);

  const canonical = locale === 'en'
    ? `https://trimsandfasteners.com/blog/${slug}/`
    : `https://trimsandfasteners.com/pl/blog/${slug}/`;

  return {
    title: seo.title || post.title.rendered,
    description: seo.description,
    alternates: { canonical: seo.canonical || canonical },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPostBySlug(slug, locale as Locale),
    getRecentPosts(locale as Locale, 5),
  ]);
  if (!post) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const backHref = locale === 'en' ? '/blog/' : '/pl/blog/';
  const contactHref = locale === 'en' ? '/contact/' : '/pl/kontakt/';

  // Other posts: recent posts excluding current
  const otherPosts = recentPosts.filter(p => p.slug !== slug).slice(0, 4);

  // JSON-LD Article schema
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered.replace(/<[^>]*>/g, ''),
    datePublished: post.date,
    dateModified: post.modified,
    image: featuredImage?.source_url,
    author: { '@type': 'Organization', name: 'TAF - Trims and Fasteners' },
    publisher: {
      '@type': 'Organization',
      name: 'TAF - Trims and Fasteners',
      logo: { '@type': 'ImageObject', url: 'https://trimsandfasteners.com/wp-content/uploads/2025/08/Projekt-bez-nazwy-75.png' },
    },
    description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim().slice(0, 160),
  };

  // FAQ schema from Yoast if available
  const faqSchema = post.yoast_head_json?.schema;

  return (
    <article>
      {/* Dark hero with post title */}
      <div className="bg-[#111111] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="text-xs text-white/50 hover:text-white font-[Jost] mb-6 inline-block transition-colors"
          >
            ← {locale === 'en' ? 'Back to blog' : 'Powrót do bloga'}
          </Link>
          <time className="text-xs text-white/40 font-[Jost] block mb-3">
            {formatDate(post.date, locale as Locale)}
          </time>
          <h1
            className="font-[Jost] text-3xl sm:text-5xl font-light leading-snug max-w-4xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </div>

      {/* Featured image (full-width below hero) */}
      {featuredImage && (
        <div className="relative w-full h-64 sm:h-96 overflow-hidden bg-gray-200">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* 2-column layout: article content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: main article content */}
          <div className="flex-1 min-w-0">
            <div
              className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* CTA box */}
            <div className="mt-12 bg-[#111111] text-white p-8 text-center">
              <h3 className="font-[Jost] text-2xl font-light mb-3">
                {locale === 'en'
                  ? 'Need the perfect zipper?'
                  : 'Potrzebujesz idealnego zamka?'}
              </h3>
              <p className="font-[Jost] text-white/70 mb-6 text-sm">
                {locale === 'en'
                  ? 'Contact our team for expert advice and custom solutions.'
                  : 'Skontaktuj się z naszym zespołem po fachową poradę i rozwiązania na zamówienie.'}
              </p>
              <Link
                href={contactHref}
                className="inline-block bg-white text-black font-[Jost] font-medium text-sm px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {locale === 'en' ? 'Contact us' : 'Skontaktuj się'}
              </Link>
            </div>
          </div>

          {/* Right: "Other posts" sidebar */}
          {otherPosts.length > 0 && (
            <aside className="lg:w-72 flex-shrink-0">
              <h2 className="font-[Jost] text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                {locale === 'en' ? 'Other posts' : 'Inne artykuły'}
              </h2>
              <div className="space-y-6">
                {otherPosts.map(other => {
                  const otherImg = other._embedded?.['wp:featuredmedia']?.[0];
                  const otherHref = locale === 'en'
                    ? `/blog/${other.slug}/`
                    : `/pl/blog/${other.slug}/`;
                  return (
                    <Link
                      key={other.id}
                      href={otherHref}
                      className="group flex gap-3 items-start"
                    >
                      {otherImg && (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={otherImg.source_url}
                            alt={otherImg.alt_text || ''}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-[Jost] text-sm text-gray-800 group-hover:text-black line-clamp-2 leading-snug transition-colors"
                          dangerouslySetInnerHTML={{ __html: other.title.rendered }}
                        />
                        <time className="text-xs text-gray-400 font-[Jost] mt-1 block">
                          {formatDate(other.date, locale as Locale)}
                        </time>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Link
                href={backHref}
                className="mt-8 inline-block text-sm text-gray-500 hover:text-black font-[Jost] transition-colors"
              >
                {locale === 'en' ? 'View all posts →' : 'Wszystkie artykuły →'}
              </Link>
            </aside>
          )}
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </article>
  );
}
