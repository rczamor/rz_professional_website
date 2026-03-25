import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StrategicImpact from "@/components/StrategicImpact";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import SideProjects from "@/components/SideProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StrategicImpact />
        <Philosophy />
        <Portfolio />
        <SideProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
