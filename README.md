# 🎖 Founders Fest Awards — Landing Experience

A cinematic, scroll-driven experience built for **Founders Fest Awards 2025** — celebrating founders, teams, and ecosystem builders who are shaping India’s startup landscape.

This page includes:

- A **3D parallax hero** with Founders Fest moments
- A detailed **About** section for the awards
- Curated **Award Categories** grouped into themes
- A **Nomination Timeline** with smooth animations
- A **“Who Can Nominate?”** explainer section
- A clean **CTA section** leading to the nomination form
- A minimal **footer** with collab logos and socials

---

## 🚀 Tech Stack

- **Next.js** (App Router)
- **React** (Client Components)
- **motion/react** (Framer Motion v7+ equivalent)
- **Tailwind CSS**
- **TypeScript** (optional but recommended)
- Local images from `/public/assets`

---

## 📁 Key Components

### 1. `HeroParallax`

A scroll-reactive hero section showing a **parallax gallery of images**.

**Features:**

- Uses `useScroll`, `useTransform`, and `useSpring` from `motion/react`
- 3 horizontal rows of images scrolling in opposite directions
- 3D transforms using `rotateX`, `rotateZ`, and `translateY`
- Responsive height controlled via a custom `.parallax-height` class

**Props:**

```ts
type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: Product[];
};
