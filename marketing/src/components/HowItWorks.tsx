import React from "react";

export function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-[#16213e] to-[#1a1a2e] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to verify any email address
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

          {/* Step 1 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Send Request
              </h3>
              <p className="text-gray-300 mb-6">
                Make a simple API call with the email address you want to verify
              </p>
              <div className="w-full bg-[#1a1a1a] rounded-lg p-4 border border-white/10 text-left">
                <code className="text-sm text-blue-300">
                  <div className="text-gray-500">POST /api/verify</div>
                  <div className="mt-2">{"{"}</div>
                  <div className="ml-4">
                    "email": "user@example.com"
                  </div>
                  <div>{"}"}</div>
                </code>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                We Verify
              </h3>
              <p className="text-gray-300 mb-6">
                Our system performs comprehensive checks in milliseconds
              </p>
              <div className="space-y-3 w-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
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
                  <span className="text-gray-300 text-sm">Syntax Check</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
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
                  <span className="text-gray-300 text-sm">Domain Validation</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
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
                  <span className="text-gray-300 text-sm">Risk Assessment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Get Results
              </h3>
              <p className="text-gray-300 mb-6">
                Receive detailed verification results instantly
              </p>
              <div className="w-full bg-[#1a1a1a] rounded-lg p-4 border border-white/10 text-left">
                <code className="text-sm text-green-300">
                  <div>{"{"}</div>
                  <div className="ml-4">"valid": true,</div>
                  <div className="ml-4">"score": 95,</div>
                  <div className="ml-4">"disposable": false,</div>
                  <div className="ml-4">"domain": "example.com"</div>
                  <div>{"}"}</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

