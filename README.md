# B2GSoft Project

A modern clothing e-commerce storefront built with Next.js. Features a home page with promotional banners, curated collections, and dynamic product detail pages with image carousels, ratings, and reviews.

## ✨ Features

- 🏠 **Home Page** — hero banner, new arrivals section, big deal promo, collection slider, and summer big deal showcase
- 🛍️ **Product Detail Pages** — dynamic routes (`/products/[id]`) with image carousel, quantity selector, ratings, related products, and customer reviews
- 🎨 **Responsive, Styled UI** — built with Tailwind CSS, DaisyUI, and Flowbite React components
- 🖼️ **Image Carousels & Sliders** — swipeable product galleries and collection sliders (react-swipeable, flowbite Carousel)
- 📜 **Smooth Scrolling** — react-scroll for in-page navigation
- ⚡ **Static Product Data** — product catalog driven by local JSON data files

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS, DaisyUI, Flowbite / Flowbite React
- **Interactions:** react-scroll, react-swipeable
- **Fonts:** Local Geist Sans & Geist Mono fonts

## 📁 Project Structure

````
src/
├── app/
│   ├── layout.js            # Root layout (NavBar + Footer wrapper)
│   ├── page.js               # Home page
│   ├── globals.css           # Global styles
│   └── products/[id]/        # Dynamic product detail page
├── components/
│   ├── NavBar.js             # Site navigation
│   ├── Footer.js              # Site footer
│   ├── Banner.js              # Hero banner
│   ├── NewArraival.js         # New arrivals section
│   ├── BigDeal.js              # Promotional deal section
│   ├── CollectionSlider.js     # Collection carousel
│   ├── SummerBigDeal.js         # Seasonal promo section
│   ├── ImageCarousel.js         # Product image gallery
│   ├── QuantityInput.js          # Quantity stepper
│   ├── RelatedPost.js             # Related products
│   ├── Reviews.js                  # Customer reviews
│   ├── ShopNowButton.js             # CTA button
│   └── SeeMoreButton.js              # CTA button
└── data/
    ├── NewArrivals.json             # New arrival product data
    └── SummerBigDeal.json            # Summer deal product data
````

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
```bash
   git clone <your-repo-url>
   cd b2gsoft-project
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

| Command         | Description                          |
|------------------|---------------------------------------|
| `npm run dev`    | Start the development server          |
| `npm run build`  | Build the app for production          |
| `npm start`       | Start the production server           |
| `npm run lint`     | Run ESLint on the codebase            |
