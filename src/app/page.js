import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div>

        <Navbar />

        <div className="parallax">
          <Hero />
        </div>

        <div className="parallax">
          <Marquee />
        </div>

        <div className="parallax">
          <About />
        </div>

        <div className="parallax">
          <Services />
        </div>

        <div className="parallax">
          <Process />
        </div>

        <div className="parallax">
          <Work />
        </div>

        <div className="parallax">
          <Quote />
        </div>

        <div className="parallax">
          <CTA />
        </div>

        <Footer />

      </div>
    </>
  );
}