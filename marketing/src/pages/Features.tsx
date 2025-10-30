import React from "react";
import { Features as FeaturesSection } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";

export function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <FeaturesSection />
      <HowItWorks />
    </div>
  );
}

