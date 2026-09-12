import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularServices from "../components/PopularServices";
import HowItWorks from "../components/HowItWorks";
import ProviderSection from "../components/ProviderSection";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/TrustSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

function Home() {
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
            </main>
            <Footer />
        </div>
    );
}

export default Home;