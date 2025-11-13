import { Footer } from "@/components/sections/FooterSection";
import { fetchMainPageData } from "@/lib/contentful";
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
    default: "Tai Chi Chuan - Mistrz Jarosław Świeczkowski",
    template: "%s | Tai Chi Chuan",
  },
  description:
    "Odkryj starożytną sztukę Tai Chi Chuan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi, zajęcia stacjonarne i online. Harmonia ciała i umysłu.",
  keywords: [
    "tai chi",
    "tai chi chuan",
    "tai chi",
    "chen tai chi",
    "tai chi chuan",
    "mistrz tai chi",
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    title: "Tai Chi Chuan - Mistrz Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Tai Chi Chuan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi, zajęcia stacjonarne i online.",
    siteName: "Tai Chi Chuan",
    images: [
      {
        url: "/jaroslaw-swieczkowski-tai-chi.webp",
        width: 1200,
        height: 630,
        alt: "Tai Chi Chuan - Mistrz Jarosław Świeczkowski",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Chi Chuan - Mistrz Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Tai Chi Chuan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Tai Chi.",
    images: ["/jaroslaw-swieczkowski-tai-chi.webp"],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "martial arts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainPageData = await fetchMainPageData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer {...mainPageData} />
      </body>
    </html>
  );
}
