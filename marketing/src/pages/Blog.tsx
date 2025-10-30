import React, { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: "rupt-identity-verification",
    title: "How Rupt Uses Email Verification for Smart Identity Detection and 2FA",
    excerpt: "Learn how Rupt combines email verification with device fingerprinting to intelligently determine when two-factor authentication is needed.",
    date: "January 30, 2025",
    readTime: "6 min read",
  },
  {
    id: "reduce-fake-signups",
    title: "How Email Verification Reduces Fake Signups and Repeat Trial Accounts",
    excerpt: "Discover how implementing email verification can protect your platform from fraudulent users and trial abuse.",
    date: "January 30, 2025",
    readTime: "5 min read",
  },
];

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const renderBlogPost = (postId: string) => {
    if (postId === "rupt-identity-verification") {
      return (
        <article className="prose prose-invert max-w-none">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-blue-400 hover:text-blue-300 mb-6 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>

          <h1 className="text-4xl font-bold text-white mb-4">
            How Rupt Uses Email Verification for Smart Identity Detection and 2FA
          </h1>
          <p className="text-gray-400 mb-8">January 30, 2025 · 6 min read</p>

          <p className="text-gray-300 text-lg mb-6">
            In the world of product security, striking the right balance between user experience 
            and security is crucial. At <a href="https://rupt.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Rupt</a>, 
            we've developed an intelligent approach that combines email verification with device 
            fingerprinting to determine user identity and decide when to challenge users with 
            two-factor authentication.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Challenge: Security Without Friction</h2>
          <p className="text-gray-300 mb-6">
            Traditional security approaches often fall into two extremes: either they're too lax, 
            allowing unauthorized access, or they're overly strict, frustrating legitimate users 
            with constant authentication challenges. The key is knowing when to trust a user and 
            when to ask for additional verification.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How Rupt's Identity System Works</h2>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Email as an Identity Anchor</h3>
          <p className="text-gray-300 mb-4">
            Email addresses serve as a stable identifier in Rupt's identity system. When a user 
            signs up or logs in, we verify their email address using EmailHawk to ensure:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>The email is syntactically valid and deliverable</li>
            <li>It's not a disposable or temporary address</li>
            <li>The domain has proper MX records and can receive mail</li>
            <li>The email hasn't been flagged for suspicious activity</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Device Fingerprinting</h3>
          <p className="text-gray-300 mb-6">
            Rupt creates a unique fingerprint for each device based on browser characteristics, 
            screen resolution, installed fonts, and dozens of other signals. This fingerprint is 
            stable across sessions but changes when accessing from a different device or browser.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Intelligent Risk Scoring</h3>
          <p className="text-gray-300 mb-4">
            When a user attempts to log in, Rupt evaluates several factors:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">Known Device:</strong> Has this device fingerprint been seen before with this email?</li>
            <li><strong className="text-white">Email Quality:</strong> Is this a verified, non-disposable email address?</li>
            <li><strong className="text-white">Geographic Location:</strong> Is the login attempt from a new location?</li>
            <li><strong className="text-white">Behavioral Patterns:</strong> Does the login timing match historical patterns?</li>
            <li><strong className="text-white">Email Change History:</strong> Has the user recently changed their email address?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">When 2FA is Triggered</h2>
          <p className="text-gray-300 mb-4">
            Rupt automatically requests two-factor authentication when:
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">High-Risk Scenarios</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong className="text-white">New Device:</strong> The device fingerprint hasn't been associated with this email before</li>
              <li><strong className="text-white">Suspicious Email:</strong> The email shows characteristics of a compromised account (disposable domain, recently changed, etc.)</li>
              <li><strong className="text-white">Location Anomaly:</strong> Login from a country different from previous sessions</li>
              <li><strong className="text-white">Failed Attempts:</strong> Multiple failed login attempts from this device</li>
              <li><strong className="text-white">Sensitive Actions:</strong> User is trying to change security settings or payment information</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Role of Email Verification</h2>
          <p className="text-gray-300 mb-6">
            Email verification plays a crucial role in this system by providing a trust signal. 
            When Rupt detects a verified, established email address, it can be more confident 
            in allowing access from known devices. Conversely, when an email address shows red 
            flags—such as being newly created, disposable, or from a suspicious domain—Rupt 
            increases the security requirements.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Real-Time Verification</h3>
          <p className="text-gray-300 mb-6">
            During account creation or email changes, Rupt uses EmailHawk's API to verify 
            addresses in real-time. This immediate feedback allows the system to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Reject obviously fake or disposable addresses before account creation</li>
            <li>Set appropriate security levels for new accounts based on email quality</li>
            <li>Flag accounts that change to suspicious email addresses</li>
            <li>Prevent account takeovers by validating email changes</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Benefits for Users and Platforms</h2>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">For End Users</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">Seamless Experience:</strong> Known devices and verified emails mean fewer authentication challenges</li>
            <li><strong className="text-white">Better Security:</strong> Suspicious activity triggers additional verification automatically</li>
            <li><strong className="text-white">Transparent Protection:</strong> Users understand why they're being asked for 2FA</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">For Platform Operators</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">Reduced Account Takeovers:</strong> Suspicious logins are challenged with 2FA</li>
            <li><strong className="text-white">Lower Support Burden:</strong> Fewer false positives mean fewer frustrated users contacting support</li>
            <li><strong className="text-white">Better Analytics:</strong> Clean, verified emails improve user tracking and communication</li>
            <li><strong className="text-white">Compliance:</strong> Strong identity verification helps meet regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Example</h2>
          <p className="text-gray-300 mb-4">
            Here's a simplified flow of how Rupt uses email verification:
          </p>
          <div className="bg-black/50 rounded-lg p-6 overflow-x-auto mb-6">
            <pre className="text-sm text-gray-300">
              <code>{`1. User attempts login with email + password
2. Verify credentials are correct
3. Generate device fingerprint
4. Check if device fingerprint + email combination exists
   
IF new device:
  - Verify email quality via EmailHawk API
  - Calculate risk score
  - IF high risk: Require 2FA
  - ELSE: Send email notification + allow access
  
IF known device:
  - Check last login time and location
  - IF anomaly detected: Require 2FA
  - ELSE: Allow access seamlessly`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Looking Forward</h2>
          <p className="text-gray-300 mb-6">
            As Rupt continues to evolve, email verification remains a cornerstone of our 
            identity and security system. By combining it with device fingerprinting and 
            behavioral analysis, we create a security layer that's both robust and user-friendly.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-8">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Want to implement similar security in your platform?</strong>
            </p>
            <p className="text-gray-300 mb-4">
              Start with EmailHawk for real-time email verification, and check out{" "}
              <a href="https://rupt.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Rupt's device fingerprinting solution
              </a>{" "}
              for comprehensive identity protection.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "";
              }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started with EmailHawk
            </a>
          </div>
        </article>
      );
    }

    if (postId === "reduce-fake-signups") {
      return (
        <article className="prose prose-invert max-w-none">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-blue-400 hover:text-blue-300 mb-6 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>

          <h1 className="text-4xl font-bold text-white mb-4">
            How Email Verification Reduces Fake Signups and Repeat Trial Accounts
          </h1>
          <p className="text-gray-400 mb-8">January 30, 2025 · 5 min read</p>

          <p className="text-gray-300 text-lg mb-6">
            In today's digital landscape, businesses offering free trials or freemium models
            face a persistent challenge: fake signups and users exploiting multiple trial
            accounts. Email verification is one of the most effective tools to combat this
            abuse while maintaining a smooth user experience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Problem: Trial Abuse and Fake Accounts</h2>
          <p className="text-gray-300 mb-4">
            Many SaaS platforms, e-learning services, and digital products offer free trials
            to attract new customers. However, this generosity is often exploited by users who:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Create multiple accounts using disposable email addresses</li>
            <li>Sign up repeatedly to extend trial periods indefinitely</li>
            <li>Use fake or invalid email addresses to avoid accountability</li>
            <li>Consume resources without any intention of becoming paying customers</li>
          </ul>

          <p className="text-gray-300 mb-6">
            This behavior not only costs businesses money in infrastructure and support costs,
            but also skews analytics, making it harder to understand genuine user behavior and
            calculate accurate conversion metrics.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How Email Verification Helps</h2>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Detecting Disposable Email Addresses</h3>
          <p className="text-gray-300 mb-6">
            Services like EmailHawk can identify disposable or temporary email addresses in
            real-time. By blocking signups from providers like Mailinator, TempMail, or
            Guerrilla Mail, you immediately prevent the most common form of trial abuse.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Validating Email Syntax and Domain</h3>
          <p className="text-gray-300 mb-6">
            Email verification checks that addresses follow proper RFC standards and that the
            domain has valid MX records. This prevents users from signing up with obviously
            fake addresses like "test@test.test" or typos that would bounce.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Reducing Bounce Rates</h3>
          <p className="text-gray-300 mb-6">
            Invalid email addresses lead to bounced emails, which can damage your sender
            reputation and affect deliverability for legitimate users. By verifying emails
            at signup, you ensure that your welcome emails, notifications, and marketing
            campaigns reach real inboxes.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Creating Friction for Bad Actors</h3>
          <p className="text-gray-300 mb-6">
            When users know they need to use a valid, non-disposable email address, they're
            less likely to abuse your trial system. The small amount of friction this creates
            for legitimate users is minimal compared to the protection it provides.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Best Practices</h2>
          <p className="text-gray-300 mb-4">
            To maximize the effectiveness of email verification:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">Verify at signup:</strong> Check emails in real-time during account creation</li>
            <li><strong className="text-white">Provide clear feedback:</strong> Let users know why their email was rejected</li>
            <li><strong className="text-white">Combine with other signals:</strong> Use device fingerprinting or IP analysis for comprehensive protection</li>
            <li><strong className="text-white">Monitor patterns:</strong> Track blocked signups to refine your verification rules</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Business Impact</h2>
          <p className="text-gray-300 mb-6">
            Companies implementing email verification typically see:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>30-50% reduction in fake signups</li>
            <li>Improved conversion metrics and analytics accuracy</li>
            <li>Lower infrastructure costs from reduced trial abuse</li>
            <li>Better email deliverability rates</li>
            <li>More accurate customer acquisition cost (CAC) calculations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-6">
            Implementing email verification is straightforward with modern APIs like EmailHawk.
            With just a few lines of code, you can verify emails in real-time during your
            signup flow and protect your platform from abuse.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-8">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Ready to protect your platform?</strong>
            </p>
            <p className="text-gray-300 mb-4">
              Start using EmailHawk today with 100 free verifications per month. No credit card required.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "";
              }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started Free
            </a>
          </div>
        </article>
      );
    }
    return null;
  };

  if (selectedPost) {
    return (
      <div className="bg-[#16213e] min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderBlogPost(selectedPost)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#16213e] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <p className="text-gray-300 text-lg mb-12">
          Articles, tutorials, and insights about email verification, deliverability, and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-blue-400 font-semibold">
                Read more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

