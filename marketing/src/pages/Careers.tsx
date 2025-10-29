import React from "react";

export function CareersPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Careers</h1>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-300 text-lg mb-6">
            Join the EmailHawk team and help build the future of email
            verification!
          </p>
          <p className="text-gray-300 mb-6">
            Currently, we don't have any open positions, but we're always
            interested in hearing from talented individuals. If you're passionate
            about email infrastructure, API development, or building great
            developer tools, we'd love to hear from you.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <p className="text-gray-300">
            Send your resume and cover letter to:{" "}
            <a href="mailto:careers@emailhawk.com" className="text-blue-400 hover:text-blue-300">
              careers@emailhawk.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

