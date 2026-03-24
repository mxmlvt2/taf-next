import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trimsandfasteners.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      // Polish URL slugs → Next.js routes (permanent 301)
      { source: '/pl/zastosowanie-zamkow/:path*', destination: '/pl/use-of-zippers/:path*', permanent: true },
      { source: '/pl/rodzaje-zamkow/:path*',       destination: '/pl/type-of-zippers/:path*', permanent: true },
      { source: '/pl/tasmy-spiralne-zestawienie-rozmiarow', destination: '/pl/nylon-zipper-chain-size-chart', permanent: true },
      { source: '/pl/tasmy-spiralne-zestawienie-rozmiarow/', destination: '/pl/nylon-zipper-chain-size-chart/', permanent: true },
      { source: '/pl/o-nas',          destination: '/pl/about-us',          permanent: true },
      { source: '/pl/o-nas/',         destination: '/pl/about-us/',         permanent: true },
      { source: '/pl/kontakt',        destination: '/pl/contact',           permanent: true },
      { source: '/pl/kontakt/',       destination: '/pl/contact/',          permanent: true },
      { source: '/pl/personalizacja', destination: '/pl/personalization',   permanent: true },
      { source: '/pl/personalizacja/',destination: '/pl/personalization/',  permanent: true },
      { source: '/pl/polityka-prywatnosci',  destination: '/pl/privacy-policy',  permanent: true },
      { source: '/pl/polityka-prywatnosci/', destination: '/pl/privacy-policy/', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
