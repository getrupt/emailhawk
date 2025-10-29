import React from "react";

export function PrivacyPolicyPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Last Updated:</strong> January 2025
          </p>
          <p className="text-gray-300 mb-6">
            EmailHawk ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our email verification API.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-300 mb-6">
            We collect information that you provide directly to us, including
            account information, API usage data, and any email addresses submitted
            for verification purposes.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, and communicate with you about
            our services.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
          <p className="text-gray-300 mb-6">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@emailhawk.com
          </p>
        </div>
      </div>
    </div>
  );
}

