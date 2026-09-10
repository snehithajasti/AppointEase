import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularServices from "./components/PopularServices";
import HowItWorks from "./components/HowItWorks";

function App(){
  return(
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularServices />
        <HowItWorks />
      </main>
    </div>
  );
}

export default App;