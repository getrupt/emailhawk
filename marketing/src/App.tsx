import "./index.css";
import { APITester } from "./APITester";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Try it Now
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Test our email verification API right here. No signup required.
          </p>
          <APITester />
        </div>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
