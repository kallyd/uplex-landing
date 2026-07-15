import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Timeline3D } from "@/components/sections/Timeline3D";
import { ShowcaseImages } from "@/components/sections/ShowcaseImages";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { UseCases } from "@/components/sections/UseCases";
import { ManifestoSection } from "@/components/sections/Manifesto";
import { TerminalSection } from "@/components/sections/Terminal";
import { PricingSection } from "@/components/sections/Pricing";
import { FAQSection } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Stats />
      <Timeline3D />
      <ShowcaseImages />
      <UseCases />
      <Features />
      <ManifestoSection />
      <TerminalSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
