import React, { useState, type FormEvent } from "react";
import axios from "axios";

export function APITester() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const testEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const response = await axios.post(`${process.env.API_URL}/verify`, {
        email,
      }, {
        headers: {
          "Authorization": `Bearer ${process.env.API_KEY}`,
        },
      });

      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResponse(`Error: ${String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="demo" className="mx-auto w-full max-w-4xl text-left flex flex-col gap-6">
      <form onSubmit={testEmail} className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address to verify..."
            className="flex-1 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Verifying...
              </span>
            ) : (
              "Verify Email"
            )}
          </button>
        </div>
      </form>

      {response && (
        <div className="bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-gray-300 text-sm font-semibold">Response</span>
            <button
              onClick={() => navigator.clipboard.writeText(response)}
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </button>
          </div>
          <pre className="p-4 text-sm text-green-300 overflow-x-auto">
            {response}
          </pre>
        </div>
      )}

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Try These Examples
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "user@gmail.com",
            "test@fake-email.com",
            "test@mailinator.com",
            "test@example.com",
          ].map((example) => (
            <button
              key={example}
              onClick={() => setEmail(example)}
              className="text-left text-sm text-gray-300 bg-white/5 hover:bg-white/10 px-3 py-2 rounded border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
