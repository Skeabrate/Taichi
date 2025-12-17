import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutSection } from "@/components/sections/AboutSection";
import { AboutTaichiSection } from "@/components/sections/AboutTaichiSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/HeroSection";
import { fetchMainPageData } from "@/lib/contentful";

export const revalidate = false;
// TODO: 1. stworzyć schema dla strony glownej 2. install hygraph i libki np. rich text editor.. 3. stworzyć fetcher  hygraph sdk  4. codegen 5. stworzyc nowy branch git checkout nazwa hygraph 6. gqltada

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
