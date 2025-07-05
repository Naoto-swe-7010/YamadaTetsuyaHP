import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = {
  title: {
    default: '山田哲也 | ラクロス選手公式サイト',
    template: '%s | 山田哲也 | ラクロス選手公式サイト'
  },
  description: 'カナダでLAオリンピック日本代表を目指して挑戦している山田哲也選手の公式サイト。夢を持ち、実現に向け一歩踏み出す勇気を発信しています。',
  keywords: ['山田哲也', 'ラクロス', 'オリンピック', 'カナダ', 'LA2028', '日本代表', 'スポーツ', '挑戦'],
  authors: [{ name: '山田哲也' }],
  creator: '山田哲也',
  publisher: '山田哲也',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://tetsuya-yamada.com',
    title: '山田哲也 | ラクロス選手公式サイト',
    description: 'カナダでLAオリンピック日本代表を目指して挑戦している山田哲也選手の公式サイト',
    siteName: '山田哲也公式サイト',
    images: [
      {
        url: '/Image1.jpeg',
        width: 1200,
        height: 630,
        alt: '山田哲也選手',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '山田哲也 | ラクロス選手公式サイト',
    description: 'カナダでLAオリンピック日本代表を目指して挑戦している山田哲也選手の公式サイト',
    images: ['/Image6.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}