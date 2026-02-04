import { Footer } from "@/components/sections/FooterSection";
import { StickyNav } from "@/components/StickyNav";
import { fetchMainPageData } from "@/lib/hygraph/api";
import { GOOGLE_SITE_VERIFICATION, NEXT_PUBLIC_SITE_URL } from "@/lib/envs";
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif_SC, Eagle_Lake, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-sc",
});

const eagleLake = Eagle_Lake({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-eagle-lake",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tai Chi Chuan - Instruktor Jarosław Świeczkowski",
    template: "%s | Tai Chi Chuan",
  },
  description:
    "Odkryj starożytną sztukę Tai Chi Chuan z instruktorem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi, zajęcia stacjonarne i online. Harmonia ciała i umysłu.",
  keywords: [
    "tai chi",
    "tai chi chuan",
    "tai chi",
    "chen tai chi",
    "tai chi chuan",
    "instruktor tai chi",
    "zajęcia tai chi",
    "tai chi warszawa",
    "tai chi polska",
    "chi kung",
    "qigong",
    "sztuki walki",
    "ćwiczenia medytacyjne",
    "harmonia ciała i umysłu",
    "Jarosław Świeczkowski",
  ],
  authors: [{ name: "Jarosław Świeczkowski" }],
  creator: "Jarosław Świeczkowski",
  publisher: "Jarosław Świeczkowski",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    title: "Tai Chi Chuan - Instruktor Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Tai Chi Chuan z instruktorem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi, zajęcia stacjonarne i online.",
    siteName: "Tai Chi Chuan",
    images: [
      {
        url: "/jaroslaw-swieczkowski.webp",
        width: 1200,
        height: 630,
        alt: "Tai Chi Chuan - Instruktor Jarosław Świeczkowski",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Chi Chuan - Instruktor Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Tai Chi Chuan z instruktorem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi.",
    images: ["/jaroslaw-swieczkowski.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  category: "martial arts",
};

export const viewport: Viewport = {
  themeColor: "#c41e3a",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainPageData = await fetchMainPageData();

  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${notoSerifSC.variable} ${eagleLake.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <StickyNav />
        {children}
        <Footer {...mainPageData} />
      </body>
    </html>
  );
}
