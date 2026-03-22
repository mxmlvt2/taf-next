import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, extractYoastMeta } from '@/lib/wordpress';
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
  return {
    title: seo.title || post.title.rendered,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: { title: seo.ogTitle, description: seo.ogDescription, images: seo.ogImage ? [seo.ogImage] : [] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale as Locale);
  if (!post) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const backHref = locale === 'en' ? '/blog/' : '/pl/blog/';

  return (
    <article>
      {featuredImage && (
        <div className="relative w-full aspect-[21/9] max-h-[500px] overflow-hidden">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={backHref}
          className="text-xs text-gray-400 hover:text-black font-[Jost] mb-6 inline-block transition-colors"
        >
          ← {locale === 'en' ? 'Back to blog' : 'Powrót do bloga'}
        </Link>

        <time className="text-xs text-gray-400 font-[Jost] block mb-3">
          {formatDate(post.date, locale as Locale)}
        </time>

        <h1
          className="font-[Jost] text-3xl sm:text-4xl font-normal leading-snug mb-8"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="prose prose-gray max-w-none font-[Jost] prose-headings:font-[Jost] prose-headings:font-normal"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
}
