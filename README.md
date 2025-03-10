# K-Pop Merchandise Store

An interactive e-commerce platform for K-pop merchandise, featuring visually stunning design, smooth animations, and a user experience tailored specifically for K-pop fans.

## Features

- Interactive product browsing with animations
- Band-specific collections with custom theming
- Mobile-first responsive design
- User accounts and wishlists
- Secure checkout with Stripe integration
- Performance-optimized for fast loading

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context + Zustand
- **Deployment**: Vercel
- **Payment**: Stripe Integration

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/talalfahim/kpop-merch-store.git
   cd kpop-merch-store
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
kpop-merch-store/
├── app/                  # Next.js App Router structure
│   ├── (shop)/           # Shop-related routes
│   ├── (account)/        # User account routes
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── shop/             # Shop-specific components
│   └── animations/       # Animation components
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## License

[MIT](LICENSE)