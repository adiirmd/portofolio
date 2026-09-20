import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LanguageProvider from "@/components/LanguageProvider";
import { defaultCopy, profile, site } from "@/lib/data";
import { personSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultCopy.meta.title,
    template: `%s | ${profile.name}`,
  },
  description: defaultCopy.meta.description,
  keywords: defaultCopy.meta.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: defaultCopy.ogLocale,
    url: site.url,
    siteName: profile.name,
    title: defaultCopy.meta.title,
    description: defaultCopy.meta.description,
    images: [
      {
        url: profile.photos.home.src,
        width: profile.photos.home.width,
        height: profile.photos.home.height,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultCopy.meta.title,
    description: defaultCopy.meta.description,
    images: [profile.photos.home.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
};

// Restores the theme, then restores the language only when the visitor has
// clicked the language button before. No locale, region, or browser language
// is ever read, so English stays the default for everyone else.
const bootScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}try{var l=localStorage.getItem('lang-user-choice');if(l==='id'||l==='en'){document.documentElement.lang=l;}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultCopy.htmlLang} className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-sans antialiased">
        <div className="site-backdrop" aria-hidden />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={personSchema()} />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
