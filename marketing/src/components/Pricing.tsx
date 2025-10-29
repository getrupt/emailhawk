import React from "react";
import { config } from "../config";

export function Pricing() {
  const features = [
    "Syntax validation",
    "Domain checking",
    "Disposable email detection",
    "Real-time API",
    "Advanced analytics",
    "Priority support",
    "Bulk verification",
    "99.9% uptime",
  ];

  return (
    <div id="pricing" className="bg-[#16213e] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Pay-as-You-Go Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No plans, no commitments. Pay only for what you use.
          </p>
        </div>

        <div className="bg-gradient-to-b from-blue-500/20 to-purple-600/20 border-2 border-blue-500 rounded-2xl p-12 backdrop-blur-sm">
          <div className="text-center mb-12">
            <div className="text-6xl font-bold text-white mb-4">
              First 100 free
            </div>
            <div className="text-4xl font-bold text-gray-300">
              $0.01 per additional verification
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-400 flex-shrink-0"
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={config.getRegisterUrl()}
              className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              Get Started Free
            </a>
            <p className="text-gray-300 mt-4 text-sm">
              No credit card required to start
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All features included. Scale as you grow.
          </p>
        </div>
      </div>
    </div>
  );
}

