import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularServices from "./components/PopularServices";
import HowItWorks from "./components/HowItWorks";
import ProviderSection from "./components/ProviderSection";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";
import FinalCTA from "./components/FinalCTA";


function App(){
  return(
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularServices />
        <HowItWorks />
        <ProviderSection />
        <Testimonials />
        <TrustSection />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;