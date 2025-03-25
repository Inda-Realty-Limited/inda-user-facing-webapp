# Inda - Real Estate Investment Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8092](http://localhost:8092) with your browser to see the result.

You can start editing the page by modifying `src/views/home/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

The project is organized as follows:

```
.
├── public
│   ├── assets
│   │   └── icons
│   │       ├── double_arrow_down.svg
│   │       └── index.ts
│   └── images
│       ├── hero-lines.png
│       └── logo.png
├── src
│   ├── components
│   │   ├── base
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Text.tsx
│   │   │   ├── XStack.tsx
│   │   │   └── YStack.tsx
│   │   └── inc
│   │       ├── Container.tsx
│   │       ├── Icon.tsx
│   │       └── Navbar.tsx
│   └── views
│       └── home
│           └── index.tsx
├── README.md
└── next.config.js
```

### Components

- **Base Components**: These are reusable UI components.
  - `Button.tsx`: A customizable button component.
  - `Input.tsx`: A customizable input component.
  - `Text.tsx`: A customizable text component.
  - `XStack.tsx`: A horizontal stack layout component.
  - `YStack.tsx`: A vertical stack layout component.

- **Inc Components**: These are more complex components that include base components.
  - `Container.tsx`: A container component for layout purposes.
  - `Icon.tsx`: A component to render SVG icons using `react-svg`.
  - `Navbar.tsx`: A navigation bar component.

### Views

- **Home View**: The main landing page of the application.
  - `index.tsx`: Contains the layout and components for the home page.

## Features

- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.
- **SVG Icons**: Uses `react-svg` to render SVG icons dynamically.
- **Reusable Components**: The project includes a set of reusable components for building the UI.
- **Next.js Optimizations**: Utilizes Next.js features for optimized performance and development experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.