import React from "react";

export function CompliancePage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Compliance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            EmailHawk is committed to compliance with applicable data protection
            and privacy regulations.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">GDPR</h2>
          <p className="text-gray-300 mb-6">
            We comply with the General Data Protection Regulation (GDPR) for users
            in the European Union. This includes data subject rights such as access,
            rectification, erasure, and data portability.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">CCPA</h2>
          <p className="text-gray-300 mb-6">
            We comply with the California Consumer Privacy Act (CCPA), providing
            California residents with rights regarding their personal information.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">SOC 2</h2>
          <p className="text-gray-300 mb-6">
            We are in the process of obtaining SOC 2 Type II certification to
            demonstrate our commitment to security, availability, and confidentiality.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">
            For compliance-related inquiries, please contact us at
            compliance@emailhawk.dev
          </p>
        </div>
      </div>
    </div>
  );
}

