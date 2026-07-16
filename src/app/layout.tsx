import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://raunakshukla.netlify.app'),
  title: 'Raunak Shukla | Founder · Product, Trust Systems & AI',
  description: 'Co-Founder and CEO of SYINQ. I turn messy real-world behaviour into clear systems, trusted workflows and products that ship.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Raunak Shukla | Founder · Product, Trust Systems & AI',
    description: 'Co-Founder and CEO of SYINQ, building trusted campus coordination systems with product judgment and AI-enabled execution.',
    url: 'https://raunakshukla.netlify.app',
    siteName: 'Raunak Shukla',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Raunak Shukla — Founder, Product, Trust Systems and AI-enabled execution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raunak Shukla | Founder · Product, Trust Systems & AI',
    description: 'Co-Founder and CEO of SYINQ. Product strategy, trust systems and AI-enabled execution.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
