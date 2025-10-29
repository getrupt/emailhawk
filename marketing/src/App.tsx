import "./index.css";
import React, { createContext, useContext, useState, useEffect } from "react";
import { APITester } from "./APITester";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { FeaturesPage } from "./pages/Features";
import { PricingPage } from "./pages/Pricing";
import { AboutUsPage } from "./pages/AboutUs";
import { BlogPage } from "./pages/Blog";
import { ContactPage } from "./pages/Contact";
import { CareersPage } from "./pages/Careers";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { TermsOfServicePage } from "./pages/TermsOfService";
import { SecurityPage } from "./pages/Security";
import { CompliancePage } from "./pages/Compliance";

// Router Context
const RouterContext = createContext<{
  currentPage: string;
  navigate: (page: string) => void;
}>({ currentPage: "", navigate: () => {} });

export const useRouter = () => useContext(RouterContext);

// Home page content
function HomeContent() {
  return (
    <>
      <Hero />
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
      <Features />
      <HowItWorks />
      <Pricing />
    </>
  );
}

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Update page based on hash
  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || "home");
    };

    updatePage();
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "features":
        return <FeaturesPage />;
      case "pricing":
        return <PricingPage />;
      case "about":
        return <AboutUsPage />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "careers":
        return <CareersPage />;
      case "privacy":
        return <PrivacyPolicyPage />;
      case "terms":
        return <TermsOfServicePage />;
      case "security":
        return <SecurityPage />;
      case "compliance":
        return <CompliancePage />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      <div className="min-h-screen">
        <Header />
        <div className="pt-16">{renderPage()}</div>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}

export default App;
