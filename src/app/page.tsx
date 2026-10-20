import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { WorkCarousel } from "@/components/WorkCarousel";
import { Reviews } from "@/components/Reviews";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to about
      </a>
      <Header variant="sticky" />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <WorkCarousel />
        <Reviews />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
