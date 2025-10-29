import React from "react";

export function ContactPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-300 text-lg mb-6">
            Have a question or need help? We're here to assist you.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Email:</strong> support@emailhawk.com
          </p>
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Support:</strong> Available Monday-Friday,
            9am-5pm EST
          </p>
          <p className="text-gray-300">
            For enterprise inquiries or custom solutions, please contact us
            directly at enterprise@emailhawk.com
          </p>
        </div>
      </div>
    </div>
  );
}

