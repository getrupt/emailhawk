import React from "react";

export function BlogPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">
            Welcome to the EmailHawk blog! Here you'll find articles, tutorials,
            and insights about email verification, deliverability, and best
            practices.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Check back soon for the latest content.
          </p>
        </div>
      </div>
    </div>
  );
}

