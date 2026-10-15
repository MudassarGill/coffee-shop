# Coffee Shop Multipage Project

This project is a modern coffee shop website built with React and Vite. It includes multiple pages such as Home, About, Menu, Gallery, and Contact, with a clean storefront-style design and responsive layout.

## Overview

The app presents a coffee brand experience with:

- a welcoming hero section
- featured menu items and product cards
- about and value sections
- gallery view
- contact information and call-to-action areas
- navigation between pages using React Router

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Lucide React
- ESLint

## Project Structure

```text
coffee-shop-multipage/
├── coffee-shop/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── package.json
├── LICENSE
└── PROJECT-README.md
```

## Getting Started

From the project root, install the app dependencies in the Vite project folder:

```bash
cd coffee-shop
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Production Build

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This workspace contains a top-level package file and a nested Vite project. The main app code and development commands are under the `coffee-shop` directory.
