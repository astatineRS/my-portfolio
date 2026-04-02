import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://raunakshukla.com'),
  title: 'Raunak Shukla | Co-Founder at SYINQ · Product Designer',
  description: 'Co-Founder of SYINQ — live on the App Store & Play Store. B.Tech 2025, Bennett University. Product designer & startup builder crafting experiences that resonate.',
  openGraph: {
    title: 'Raunak Shukla | Co-Founder at SYINQ · Product Designer',
    description: 'Co-Founder of SYINQ — live on the App Store & Play Store. B.Tech 2025, Bennett University. Product designer & startup builder.',
    url: 'https://raunakshukla.com',
    siteName: 'Raunak Shukla',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raunak Shukla - Co-Founder at SYINQ · Product Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raunak Shukla | Co-Founder at SYINQ · Product Designer',
    description: 'Co-Founder of SYINQ — live on the App Store & Play Store. Product designer & startup builder.',
    images: ['/og-image.jpg'],
    creator: '@RaunakS10097663',
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
      <body>
        {children}
      </body>
    </html>
  );
}
