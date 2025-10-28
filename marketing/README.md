# EmailHawk Marketing Site

A modern, responsive marketing website for EmailHawk - the email verification API service.

## Features

- **Hero Section** - Eye-catching introduction with key stats
- **Features Section** - Showcase of core capabilities
- **How It Works** - Step-by-step explanation of the verification process
- **Interactive API Tester** - Live demo for testing email verification
- **Pricing** - Clear pricing tiers for different needs
- **Responsive Design** - Mobile-first design that works on all devices

## Tech Stack

- **React 19** - Latest React for building the UI
- **Bun** - Fast JavaScript runtime and package manager
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## Development

The site will be available at `http://localhost:3000` (or the port specified in your configuration).

Hot Module Replacement (HMR) is enabled, so changes will be reflected immediately.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Features.tsx      # Features grid
│   ├── HowItWorks.tsx    # 3-step process explanation
│   ├── Pricing.tsx       # Pricing tiers
│   └── Footer.tsx        # Site footer
├── APITester.tsx         # Interactive email verification demo
├── App.tsx               # Main application component
├── index.tsx             # Entry point
└── index.css             # Global styles
```

## Customization

### Colors

The site uses a dark theme with blue and purple accents. You can customize the color scheme in the component files by modifying the Tailwind classes.

### Content

- Update hero stats in `components/Hero.tsx`
- Modify feature list in `components/Features.tsx`
- Adjust pricing tiers in `components/Pricing.tsx`
- Change footer links in `components/Footer.tsx`

### API Integration

The `APITester` component currently uses mock data. To connect to a real API:

1. Update the `testEmail` function in `APITester.tsx`
2. Replace the mock response with an actual API call
3. Configure your API endpoint

```typescript
// Replace this in APITester.tsx
const res = await fetch('https://api.emailhawk.com/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
const mockResponse = await res.json();
```

## Deployment

Build the production version:

```bash
bun run build
```

Deploy the `dist` folder to your hosting provider of choice (Vercel, Netlify, Cloudflare Pages, etc.).

## License

Copyright © 2025 EmailHawk. All rights reserved.
