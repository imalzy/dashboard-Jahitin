import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Jahitin Dashboard',
  description:
    'A comprehensive dashboard for dressmaking businesses to manage customers, orders, and inventory.',
  url: 'https://jahitin-dashboard.vercel.app',
  ogImage: 'https://jahitin-dashboard.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/jahitin',
    github: 'https://github.com/imalzy/jahitin-dashboard'
  },
  creator: 'imalzy'
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'dressmaking',
    'tailoring',
    'fashion',
    'dashboard',
    'business management',
    'customer management',
    'order tracking',
    'inventory management'
  ],
  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.links.github
    }
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@' + siteConfig.creator
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
};

export default metadata;
