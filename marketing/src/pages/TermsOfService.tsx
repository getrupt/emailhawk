import React from "react";

export function TermsOfServicePage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Last Updated:</strong> January 2025
          </p>
          <p className="text-gray-300 mb-6">
            Please read these Terms of Service ("Terms") carefully before using
            the EmailHawk service operated by Sabil Inc.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-300 mb-6">
            By accessing or using EmailHawk, you agree to be bound by these
            Terms. If you disagree with any part of these terms, you may not
            access the service.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use License</h2>
          <p className="text-gray-300 mb-6">
            Permission is granted to temporarily download and use EmailHawk for
            personal, commercial use. This license does not include resale or
            commercial use of the service without our explicit permission.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">API Usage</h2>
          <p className="text-gray-300 mb-6">
            Users must adhere to their plan limits and usage restrictions.
            Excessive use beyond plan limits may result in service interruption
            or additional charges.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-300 mb-6">
            The materials on EmailHawk are provided on an 'as is' basis. Sabil
            Inc. makes no warranties, expressed or implied, and hereby disclaims
            and negates all other warranties.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitations</h2>
          <p className="text-gray-300 mb-6">
            In no event shall Sabil Inc. or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit) arising out of the use or inability to use the EmailHawk
            service.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms, please contact us at
            legal@emailhawk.com
          </p>
        </div>
      </div>
    </div>
  );
}

