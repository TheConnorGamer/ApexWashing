import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Results from "@/components/Results";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Results />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <Booking />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
