import React from "react";
import { config } from "../config";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for testing and small projects",
      features: [
        "100 verifications/month",
        "Basic syntax validation",
        "Domain checking",
        "API access",
        "Community support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "For growing businesses",
      features: [
        "10,000 verifications/month",
        "All Free features",
        "Disposable email detection",
        "Priority support",
        "Advanced analytics",
        "Bulk verification",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited verifications",
        "All Pro features",
        "Dedicated support",
        "Custom SLA",
        "On-premise deployment",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div id="pricing" className="bg-[#16213e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-500/20 to-purple-600/20 border-2 border-blue-500 transform scale-105"
                  : "bg-white/5 border border-white/10"
              } backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-2`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-white">
                  {plan.price === "Custom" ? "" : "$"}
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-300">/month</span>
                )}
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.name === "Enterprise" ? "#contact" : config.getRegisterUrl()}
                className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}

