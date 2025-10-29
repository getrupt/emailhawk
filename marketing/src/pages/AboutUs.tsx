import React from "react";

export function AboutUsPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            EmailHawk is built by Sabil Inc., a company dedicated to providing
            reliable and efficient email verification solutions for businesses
            of all sizes.
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
      </div>
    </div>
  );
}

