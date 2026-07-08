import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const headingFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hossamsabry-bim.vercel.app'),
  title: 'Hossam Sabry | BIM Structural Engineer',
  description: 'Portfolio of Hossam Sabry, a BIM Structural Engineer specializing in Revit modeling, shop drawings, coordination, and Revit API / Dynamo automation.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Hossam Sabry | BIM Structural Engineer',
    description: 'Portfolio of Hossam Sabry, a BIM Structural Engineer specializing in Revit modeling, shop drawings, coordination, and Revit API / Dynamo automation.',
    url: 'https://hossamsabry-bim.vercel.app',
    siteName: 'Hossam Sabry Portfolio',
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Hossam Sabry - BIM Structural Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hossamsabry-bim.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hossam Sabry | BIM Structural Engineer',
    description: 'Portfolio of Hossam Sabry, a BIM Structural Engineer specializing in Revit modeling, shop drawings, coordination, and Revit API / Dynamo automation.',
    images: ['/images/social-preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(bodyFont.variable, headingFont.variable)} data-scroll-behavior="smooth">
      <body className={bodyFont.className}>
        <div className="bg-noise"></div>
        {children}
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-9MGFL59LPQ" />
      </body>
    </html>
  );
}
