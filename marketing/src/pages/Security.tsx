import React from "react";

export function SecurityPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Security</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            At EmailHawk, security is our top priority. We implement industry-standard
            security measures to protect your data and ensure the reliability of
            our service.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Data Encryption
          </h2>
          <p className="text-gray-300 mb-6">
            All API communications are encrypted using TLS 1.2 or higher. Your
            data is encrypted both in transit and at rest.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Authentication
          </h2>
          <p className="text-gray-300 mb-6">
            We use secure API keys for authentication. API keys should be kept
            confidential and never shared publicly.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Infrastructure
          </h2>
          <p className="text-gray-300 mb-6">
            Our infrastructure is hosted on secure cloud providers with regular
            security audits and monitoring. We follow best practices for network
            security and access control.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Data Retention
          </h2>
          <p className="text-gray-300 mb-6">
            Verification results are retained only as necessary to provide our
            services. You can request deletion of your data at any time.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Reporting Security Issues
          </h2>
          <p className="text-gray-300 mb-6">
            If you discover a security vulnerability, please email us at
            security@emailhawk.com. We take all reports seriously and will respond
            promptly.
          </p>
        </div>
      </div>
    </div>
  );
}

