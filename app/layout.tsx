import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/FooterSection";
import { fetchMainPageData } from "@/lib/contentful";

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
    default: "Taichi Quan - Mistrz Jarosław Świeczkowski",
    template: "%s | Taichi Quan",
  },
  description:
    "Odkryj starożytną sztukę Taichi Quan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Taichi, zajęcia stacjonarne i online. Harmonia ciała i umysłu.",
  keywords: [
    "taichi",
    "taichi quan",
    "tai chi",
    "chen taichi",
    "tai chi quan",
    "mistrz taichi",
    "zajęcia taichi",
    "taichi warszawa",
    "taichi polska",
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://taichi.example.com",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    title: "Taichi Quan - Mistrz Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Taichi Quan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Taichi, zajęcia stacjonarne i online.",
    siteName: "Taichi Quan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taichi Quan - Mistrz Jarosław Świeczkowski",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taichi Quan - Mistrz Jarosław Świeczkowski",
    description:
      "Odkryj starożytną sztukę Taichi Quan z mistrzem Jarosławem Świeczkowskim. Tradycyjny styl Chen Taichi.",
    images: ["/og-image.jpg"],
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
