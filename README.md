# Ember Coffee

A responsive, multi-page coffee shop website built with React and Vite. Browse the Ember Coffee story, explore the drinks menu, view coffee photography, and add menu items to a cart.

## Features

- Home page with a hero, featured offerings, and an introduction to the shop
- About page with the shop story, values, and team
- Menu with eight coffee drinks and individual detail pages
- Cart actions with quantity controls and cart data persisted in `localStorage`
- Gallery with category filters for hot, special, and cold coffee
- Contact page with opening hours and a message form
- Responsive layout and shared navigation and footer

The contact form currently displays a confirmation in the browser; it is not connected to a backend. The address, phone number, and email shown on the Contact page are placeholders.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Lucide React
- ESLint

## Getting Started

The Vite application is in the `coffee-shop` directory. From the repository root, install dependencies and start the development server:

```bash
cd coffee-shop
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

Run these commands from `coffee-shop`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Ember Coffee |
| `/menu` | Coffee menu |
| `/menu/:id` | Menu item details |
| `/gallery` | Filterable coffee gallery |
| `/contact` | Contact information and message form |

## Project Structure

```text
coffee-shop/
├── public/images/       # Public menu and gallery images
├── src/
│   ├── components/      # Shared layout and UI components
│   ├── context/         # Cart state and persistence
│   ├── data/            # Menu item data
│   └── pages/           # Route-level pages
├── index.html
└── package.json
```