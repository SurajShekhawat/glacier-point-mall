import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { StoresSection } from "./components/StoresSection";
import { FoodCourtSection } from "./components/FoodCourtSection";
import { EntertainmentSection } from "./components/EntertainmentSection";
import { OffersSection } from "./components/OffersSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
export default function Home() {
  return (
    <>
    <Hero />
    <AboutSection />
    <StoresSection />
    <FoodCourtSection />
    <EntertainmentSection />
    <OffersSection />
    <TestimonialsSection />
    <FAQSection />
    </>
  );
}
