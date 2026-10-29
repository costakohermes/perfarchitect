import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PerfArchitect - Architect high-performance systems with confidence',
  description: 'Architect high-performance systems with confidence. Continuous performance architecture that catches regressions before merge',
  keywords: ['performance', 'developer tools', 'software engineering', 'SaaS'],
  authors: [{ name: 'PerfArchitect' }],
  creator: 'PerfArchitect',
  publisher: 'PerfArchitect',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://perfarchitect.com',
    siteName: 'PerfArchitect',
    title: 'PerfArchitect - Architect high-performance systems with confidence',
    description: 'Architect high-performance systems with confidence',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PerfArchitect - Architect high-performance systems with confidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerfArchitect - Architect high-performance systems with confidence',
    description: 'Architect high-performance systems with confidence',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}