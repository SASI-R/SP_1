# Pure Earth Soaps

Organic handmade soap storefront — Next.js 14 (App Router) + TypeScript + Tailwind CSS.

**Note:** this build was intentionally trimmed to a strict token budget. Dark/light mode,
wishlist, an Instagram gallery section, an embedded Google Map, and real backend email
sending were cut to keep the codebase small; the contact/newsletter forms are mock-only
(client-side validated, no data leaves the browser). See "Adding these back" below.

## Update your products (the only file you need to touch)

Edit `src/data/products.json`. Each entry:

```json
{
  "id": "unique-slug",
  "name": "Product Name",
  "image": "/images/products/your-photo.jpg",
  "price": 9.99,
  "quantityAvailable": 25,
  "description": "...",
  "ingredients": ["..."],
  "category": "Facial | Body | Gift Sets | Specialty",
  "featured": true,
  "badges": ["New", "Bestseller", "Organic"]
}
```

Leave `"image": ""` to show an automatic placeholder until you have real photos — just
drop the file in `public/images/products/` and set the path, no code changes needed.

## Install & run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Set environment variables from `.env.example` in the Vercel dashboard (leave blank for the mock-only build).
4. Deploy — Vercel auto-detects Next.js.

## Folder structure

```
src/
  app/            pages (App Router) + layout, sitemap, robots
  components/     ui/ layout/ home/ shop/ — grouped by concern
  context/        CartContext, ToastContext
  data/           products.json  <- edit this
  types/          product.ts
  utils/          format.ts, filter.ts
public/images/products/   drop real product photos here
```

## Adding back the trimmed features

- **Dark mode**: add a `ThemeContext` toggling a `dark` class on `<html>`, and Tailwind `darkMode: "class"`.
- **Wishlist**: mirror `CartContext` with a `WishlistContext` + a `/wishlist` page.
- **Instagram gallery**: a static image grid section on the homepage, or the Instagram Basic Display API for live posts.
- **Real Google Map**: swap the "Get directions" link in `/contact` for an `<iframe>` embed (requires a Maps API key + CSP `frame-src` update).
- **Real form sending**: add `app/api/contact/route.ts` and `app/api/newsletter/route.ts` that validate input server-side and call an email provider (e.g. Resend) using a key from `.env` — never hardcode it.
