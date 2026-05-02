# Ronald Grant Gateway

A premium split-screen personal gateway built with the latest Next.js App Router, TypeScript, and Tailwind CSS.

## Experience

- Full-screen desktop split: Portfolio and Me
- Mobile vertical stack with each section taking 50vh
- Entire sections are clickable and keyboard accessible
- Glassmorphism content panels, subtle gradients, grid texture, hover motion, and entrance animation
- Metadata, favicon, app icon, manifest, and generated social preview images

## Links

- Portfolio: https://portfolio.ronaldgrant.net
- Me: https://me.ronaldgrant.net

## File Structure

```text
.
├── app/
│   ├── globals.css
│   ├── apple-icon.png
│   ├── icon.svg
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   └── twitter-image.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. If that port is busy, Next.js will choose the next available port.

## Quality Checks

```bash
npm run lint
npm run build
```
