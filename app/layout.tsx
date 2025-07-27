import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vibe Template | 現代專業網站解決方案",
    template: "%s | Vibe Template"
  },
  description: "專業的多頁面網站模板，包含企業服務、科技產品商店和設計作品集，採用現代設計風格與信賴藍色調。",
  keywords: ['網站模板', '企業服務', '科技產品', '設計作品集', '專業網站'],
  authors: [{ name: 'Vibe Template Team' }],
  applicationName: 'Vibe Template',
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://yourdomain.com',
    siteName: 'Vibe Template',
    title: 'Vibe Template | 現代專業網站解決方案',
    description: '專業的多頁面網站模板，包含企業服務、科技產品商店和設計作品集',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vibe Template',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Template | 現代專業網站解決方案',
    description: '專業的多頁面網站模板，包含企業服務、科技產品商店和設計作品集',
    images: ['/twitter-card.jpg'],
  },
};

// Website structured data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vibe Template',
  url: 'https://yourdomain.com',
  description: '專業的多頁面網站模板，包含企業服務、科技產品商店和設計作品集',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://yourdomain.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
