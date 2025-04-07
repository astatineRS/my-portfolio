import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://raunakshukla.com'),
  title: 'Raunak Shukla | Product Designer & UI/UX Specialist',
  description: 'I don\'t speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality.',
  openGraph: {
    title: 'Raunak Shukla | Product Designer & UI/UX Specialist',
    description: 'I don\'t speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality.',
    url: 'https://raunakshukla.com',
    siteName: 'Raunak Shukla Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raunak Shukla - Product Designer & UI/UX Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raunak Shukla | Product Designer & UI/UX Specialist',
    description: 'I don\'t speak code—I craft experiences, sculpting ideas into products that resonate with beauty and functionality.',
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
