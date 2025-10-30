import React from "react";
import RuptLogo from "../assets/rupt-logo.svg";

export function AboutUsPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            EmailHawk is built by Sabil Inc., a product security company
            dedicated to providing reliable and efficient email verification
            solutions for businesses of all sizes.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Our mission is to help developers and businesses maintain clean email
            lists, reduce bounce rates, and improve email deliverability through
            powerful, easy-to-use APIs.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            With years of experience in email infrastructure and verification
            technologies, we understand the challenges of maintaining high-quality
            email databases. That's why we've built EmailHawk with speed,
            reliability, and developer experience at its core.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>by</span>
            <a
              href="https://rupt.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img src={RuptLogo} alt="Rupt" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

