import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkCarousel } from "@/components/WorkCarousel";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to work
      </a>
      <Header variant="sticky" />
      <main className="flex-1">
        <Hero />
        <WorkCarousel />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
