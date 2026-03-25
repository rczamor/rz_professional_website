import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import SideProjects from "@/components/SideProjects";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <SideProjects />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
