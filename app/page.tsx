import { AboutSection } from "@/components/sections/AboutSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/FooterSection";
import { Hero } from "@/components/sections/HeroSection";
import { StickyNav } from "@/components/StickyNav";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <AboutSection />
      <ClassesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
