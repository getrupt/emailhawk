import React, { useState } from "react";
import { EmailHawkLogo } from "./logo/emailhawk-logo";
import { useRouter } from "../App";

export function Header() {
  const { navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1e]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "")}
            className="flex items-center"
          >
            <EmailHawkLogo className="h-8" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => handleLinkClick(e, "features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, "pricing")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#docs"
              onClick={(e) => handleLinkClick(e, "docs")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="https://app.emailhawk.com/register"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => handleLinkClick(e, "features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "pricing")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#docs"
                onClick={(e) => handleLinkClick(e, "docs")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="https://app.emailhawk.com/register"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

