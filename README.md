# Ecommerce Next.js App

## Setup & Development Steps

- Created a Next.js app with server-side rendering.
- Designed a neon cyberpunk-themed global CSS stylesheet.
- Built reusable UI components (`Card` , `Rating`).
- Developed a landing page showing:
  - A large neon-styled banner.
  - Preview of 4 products fetched from fakestore API or fallback mock data.
  - A "View All Products" button linking to the full product listing page.
- Created a product listing page (`/product`) showing all products.
- Built a product detail page (`/product/[id]`) displaying product info and ratings.
- Configured data fetching with SSR using fetch and `cache: 'no-store'`.
- Added Dockerfile to containerize the app.
- Created `.dockerignore` to optimize Docker builds.
- Wrote Docker Compose configuration to build and run the container.
- Tested container startup with `nerdctl compose up`.
- Adjusted styles for banner, buttons, and layout consistent with the neon theme.

---



