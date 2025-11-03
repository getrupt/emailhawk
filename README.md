# EmailHawk 🦅

> A production-ready email validation service built with Node.js and Bun that helps you verify email addresses in real-time.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Quick Start

### API Endpoint

```bash
POST https://api.emailhawk.dev/verify
```

### Example Request

```bash
curl -X POST https://api.emailhawk.dev/verify \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "ahmed@rupt.dev"}'
```

### Example Response

```json
{
  "status": "valid",
  "regexp": true,
  "gibberish": false,
  "disposable": false,
  "webmail": false,
  "mx_records": true,
  "smtp_server": true,
  "smtp_check": true,
  "accept_all": false,
  "block": false,
  "domain": "rupt.dev"
}
```

## ✨ Features

EmailHawk performs comprehensive email validation through multiple checks:

- ✅ **SMTP Verification** - Validates email addresses by connecting to the mail server
- 📮 **MX Record Checks** - Verifies that the domain has valid mail exchange records
- 🎲 **Gibberish Detection** - Identifies random or nonsensical email addresses
- 🚫 **Disposable Email Detection** - Checks against multiple lists of temporary email providers
- 📧 **Webmail Detection** - Identifies popular webmail providers (Gmail, Yahoo, Outlook, etc.)
- 🎯 **Catch-All Detection** - Coming soon! Identifies domains that accept all email addresses

## 📖 About

EmailHawk is a comprehensive, self-hosted email validation solution built from the ground up to be developer-friendly, fast, and easy to deploy.

### Why EmailHawk?

We created EmailHawk to address two major pain points in the email validation landscape:

1. **Fragmented Solutions** - Most email validation services are locked behind paywalls and buried within bloated SaaS platforms offering dozens of unrelated features. Finding, understanding, and integrating these services is unnecessarily complex.

2. **Need for Simplicity** - We needed a single, dedicated product that is:
   - ✅ Easy to host
   - ✅ Quick to build
   - ✅ Fast to get started
   - ✅ Fully functional out of the box
   - ✅ Built with modern Node.js tooling

EmailHawk is our answer: a focused, production-ready email validation service that you can run anywhere.

## 🏗️ Architecture

EmailHawk is a monorepo consisting of three main components:

```
emailhawk/
├── api/         # Backend API (Express + MongoDB)
├── app/         # Dashboard UI (React)
└── marketing/   # Landing page (React)
```

### Components

| Component     | Description                                                                    | Tech Stack                         |
| ------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| **API**       | RESTful backend service handling email validation, authentication, and billing | Express, MongoDB, Passport, Stripe |
| **App**       | User dashboard for managing projects, API keys, and viewing usage analytics    | React, TypeScript, Vite            |
| **Marketing** | Public-facing landing page with product information and pricing                | React, TypeScript, Vite            |

## 🎯 Additional Features

- 🔐 **Authentication & Authorization** - Secure user management with Bearer tokens and API keys
- 📊 **Usage Analytics** - Track validation requests with detailed metrics and activity logs
- 💳 **Billing Integration** - Built-in Stripe integration for subscription management
- 🎯 **Project Management** - Organize API keys and usage by project
- 📈 **Dashboard UI** - Beautiful, responsive interface for monitoring and management
- 🐳 **Docker Ready** - Production-ready Docker configurations included
- ✅ **Test Coverage** - Comprehensive test suites for core functionality

## 📋 Prerequisites

- [Bun](https://bun.sh) 1.0 or higher
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Node.js](https://nodejs.org/) 18+ (for compatibility)

## 🛠️ Installation

### Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/emailhawk.git
cd emailhawk
```

2. **Install dependencies for all components**

```bash
# Install API dependencies
cd api
bun install

# Install app dependencies
cd ../app
bun install

# Install marketing dependencies
cd ../marketing
bun install
```

3. **Set up environment variables**

Create `.env` files in each directory:

**api/.env**

```env
PORT=8006
MONGODB_URI=mongodb://localhost:27017/emailhawk
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

**app/.env**

```env
API_URL=http://localhost:8006
```

**marketing/.env**

```env
API_URL=http://localhost:8006
```

## 🏃 Running the Project

### Development Mode

Run each component in separate terminal windows:

**Terminal 1 - API:**

```bash
cd api
bun run dev
# API runs on http://localhost:8006
```

**Terminal 2 - Dashboard App:**

```bash
cd app
bun run dev
# App runs on http://localhost:5173
```

**Terminal 3 - Marketing Site:**

```bash
cd marketing
bun run dev
# Marketing site runs on http://localhost:5174
```

### Production Build

Build all components for production:

```bash
# Build API (if needed - TypeScript compilation)
cd api
bun run index.ts

# Build app
cd ../app
bun run build

# Build marketing
cd ../marketing
bun run build
```

## 🐳 Docker Deployment

### API Docker Deployment

```bash
cd api

# Build the Docker image
docker build -t emailhawk-api .

# Run the container
docker run -p 8006:8006 \
  -e MONGODB_URI=your_mongo_connection_string \
  -e PORT=8006 \
  emailhawk-api
```

Or use with environment file:

```bash
docker run -p 8006:8006 --env-file .env emailhawk-api
```

### Docker Compose (Coming Soon)

A complete `docker-compose.yml` configuration for running all services together will be added soon.

## 🧪 Testing

Each component includes test suites:

```bash
# Run API tests
cd api
bun test

# Run app tests (if available)
cd app
bun test

# Run marketing tests (if available)
cd marketing
bun test
```

## 📚 API Documentation

### Authentication

EmailHawk supports two authentication methods:

1. **Bearer Token** - For user authentication
2. **API Key** - For programmatic access

For complete API documentation and more examples, see [API Documentation](./api/README.md).

## 📁 Project Structure

```
emailhawk/
├── api/                    # Backend API
│   ├── controllers/        # Request handlers
│   ├── db/                 # Database configuration
│   │   └── mongo/          # MongoDB schemas
│   ├── middlewares/        # Express middlewares
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   ├── tests/              # Test suites
│   ├── types/              # TypeScript definitions
│   ├── Dockerfile          # Docker configuration
│   └── index.ts            # Entry point
│
├── app/                    # Dashboard application
│   └── src/
│       ├── components/     # React components
│       ├── pages/          # Page components
│       ├── models/         # Frontend models
│       └── utils/          # Utility functions
│
├── marketing/              # Marketing website
│   └── src/
│       ├── components/     # React components
│       └── utils/          # Utility functions
│
└── README.md               # This file
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Write tests for new features
- Follow existing code style and conventions
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Bun version, etc.)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with:

- [Bun](https://bun.sh) - Fast JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [React](https://react.dev/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Stripe](https://stripe.com/) - Payment processing

## 📬 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/getrupt/emailhawk/issues)
- **Discussions**: [GitHub Discussions](https://github.com/getrupt/emailhawk/discussions)

---

<p align="center">Maintained with ❤️ by <a href="https://www.rupt.dev?ref=emailhawk">Rupt</a></p>
<p align="center">⭐ Star us on GitHub if you find this project helpful!</p>
