import React from "react";

export function DocumentationPage() {
  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">API Documentation</h1>
        
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The EmailHawk API provides real-time email verification to help you maintain
              clean email lists and improve deliverability.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Base URL:</strong>{" "}
              <code className="bg-black/30 px-2 py-1 rounded text-blue-400">
                https://api.emailhawk.com
              </code>
            </p>
          </div>

          {/* Authentication */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
            <p className="text-gray-300 mb-4">
              All API requests require authentication using a Bearer token in the
              Authorization header.
            </p>
            <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              You can obtain your API key from the dashboard after signing up.
            </p>
          </div>

          {/* Verify Endpoint */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">POST /verify</h2>
            <p className="text-gray-300 mb-6">
              Verify a single email address and get detailed information about its validity.
            </p>

            {/* Request */}
            <h3 className="text-xl font-semibold text-white mb-3">Request</h3>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Headers:</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300">
                  <code>{`Content-Type: application/json
Authorization: Bearer YOUR_API_KEY`}</code>
                </pre>
              </div>

              <p className="text-gray-300 mb-2">
                <strong className="text-white">Body Parameters:</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b border-white/10">
                      <th className="pb-2 pr-4 text-blue-400">Parameter</th>
                      <th className="pb-2 pr-4 text-blue-400">Type</th>
                      <th className="pb-2 pr-4 text-blue-400">Required</th>
                      <th className="pb-2 text-blue-400">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">email</code>
                      </td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3">The email address to verify</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-300 mt-4 mb-2">
                <strong className="text-white">Example Request:</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`curl -X POST https://api.emailhawk.com/verify \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "email": "user@example.com"
  }'`}</code>
                </pre>
              </div>
            </div>

            {/* Response */}
            <h3 className="text-xl font-semibold text-white mb-3">Response</h3>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Response Fields:</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b border-white/10">
                      <th className="pb-2 pr-4 text-blue-400">Field</th>
                      <th className="pb-2 pr-4 text-blue-400">Type</th>
                      <th className="pb-2 text-blue-400">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">email</code>
                      </td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3">The email address that was verified</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">valid</code>
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3">Whether the email is valid</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">disposable</code>
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3">Whether this is a disposable email address</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">domain</code>
                      </td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3">The domain of the email address</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">mx_records</code>
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3">Whether valid MX records exist for the domain</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">syntax_valid</code>
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3">Whether the email syntax is valid per RFC standards</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4">
                        <code className="text-green-400">verification_time</code>
                      </td>
                      <td className="py-3 pr-4">number</td>
                      <td className="py-3">Time taken to verify in milliseconds</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-300 mt-4 mb-2">
                <strong className="text-white">Success Response (200 OK):</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`{
  "email": "user@example.com",
  "valid": true,
  "disposable": false,
  "domain": "example.com",
  "mx_records": true,
  "syntax_valid": true,
  "verification_time": 45
}`}</code>
                </pre>
              </div>

              <p className="text-gray-300 mt-4 mb-2">
                <strong className="text-white">Error Response (400 Bad Request):</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`{
  "error": "Invalid request",
  "message": "Email parameter is required"
}`}</code>
                </pre>
              </div>

              <p className="text-gray-300 mt-4 mb-2">
                <strong className="text-white">Error Response (401 Unauthorized):</strong>
              </p>
              <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Rate Limits</h2>
            <p className="text-gray-300 mb-4">
              API requests are subject to rate limiting to ensure fair usage:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>100 requests per minute per API key</li>
              <li>10,000 requests per day per API key</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              If you exceed these limits, you'll receive a 429 Too Many Requests response.
            </p>
          </div>

          {/* Support */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-4">
              If you have questions or need assistance, please contact our support team:
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@emailhawk.com" className="text-blue-400 hover:text-blue-300">
                support@emailhawk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

