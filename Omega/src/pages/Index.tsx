import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Pricing from "../components/sections/Pricing";
import Blog from "../components/sections/Blog";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <SEOHead />
      <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Pricing />
          <Blog />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
