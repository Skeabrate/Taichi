import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutSection } from "@/components/sections/AboutSection";
import { AboutTaichiSection } from "@/components/sections/AboutTaichiSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/HeroSection";
import { fetchMainPageData } from "@/lib/hygraph/api";

export const revalidate = false;

export default async function Home() {
  const mainPageData = await fetchMainPageData();
  return (
    <main>
      <Hero {...mainPageData} />
      <AboutSection {...mainPageData} />
      <AboutTaichiSection {...mainPageData} />
      <ClassesSection {...mainPageData} />
      <ContactSection {...mainPageData} />
      <ScrollToTop />
    </main>
  );
}
