import { AboutSection } from "@/components/sections/AboutSection";
import { AboutTaichiSection } from "@/components/sections/AboutTaichiSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/FooterSection";
import { Hero } from "@/components/sections/HeroSection";
import { StickyNav } from "@/components/StickyNav";
import { fetchMainPageData } from "@/lib/contentful";

export const revalidate = false;

export default async function Home() {
  const mainPageData = await fetchMainPageData();
  return (
    <main>
      <StickyNav />
      <Hero {...mainPageData} />
      <AboutSection {...mainPageData} />
      <AboutTaichiSection {...mainPageData} />
      <ClassesSection {...mainPageData} />
      <ContactSection {...mainPageData} />
      <Footer {...mainPageData} />
    </main>
  );
}
