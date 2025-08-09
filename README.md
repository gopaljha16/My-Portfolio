# Portfolio — React + Vite + Tailwind

Modern, minimal portfolio with dark/light theme, smooth animations, and responsive design. Built with React, Tailwind, and Framer Motion (Motion One). Ready for Vercel/Netlify.

## Features

- Dark/Light mode toggle (persist via Redux state — adapt as needed)
- Animated hero, sections, and interactions (Motion One)
- Reusable components and glassmorphism accents
- Responsive layout, SEO tags, lazy images

## Getting Started

1. Install deps:

```
npm install
```

2. Start dev server:

```
npm run dev
```

3. Build for production:

```
npm run build && npm run preview
```

## Configure

- Update links in `src/components/Contact.jsx` and `src/components/Projects.jsx`.
- Replace placeholder images with local assets in `src/assets/` if preferred.
- Change site title/description in `index.html`.

## Deploy

- Vercel: import repo and deploy (Vite static output).
- Netlify: set build command `npm run build` and publish directory `dist`.

## Structure

- Components in `src/components/`
- Global styles in `src/index.css`
- Theme state in `src/slice/setTheme.js`
