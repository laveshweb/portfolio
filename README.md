# Aromal Portfolio — React + Tailwind + GSAP

## Project Structure

```
src/
├── App.jsx                  ← Root — composes all sections
├── main.jsx                 ← ReactDOM entry
├── index.css                ← Tailwind base + dot-bg utility
├── data/
│   └── index.js             ← All content: projects, experience, skills, socials
└── components/
    ├── Navbar.jsx            ← Desktop nav + mobile slide-in drawer
    ├── Hero.jsx              ← GSAP entrance animation
    ├── Projects.jsx          ← 3-col mockup grid, ScrollTrigger stagger
    ├── Experience.jsx        ← Center timeline (desktop), left timeline (mobile)
    ├── Skills.jsx            ← 4-col icon grid with tooltips
    ├── About.jsx             ← Sticky text + 2-col photo masonry
    ├── Contact.jsx           ← Dark card, email + social links
    └── SkillIcons.jsx        ← All SVG skill/tool icons
```

## Quick Start

```bash
npm install
npm run dev
```

## Personalise

### 1. Update your info — `src/data/index.js`
- Edit `projects[]` — titles, descriptions, tags, bg colors
- Edit `experiences[]` — roles, companies, periods, descriptions
- Edit `socials` — your real LinkedIn, Twitter, GitHub, Instagram URLs and email

### 2. Add your photos — `public/photos/`
Put 6 images named `photo1.jpg` through `photo6.jpg` in `/public/photos/`.
They'll appear in the About section masonry. If missing, emoji placeholders show instead.

### 3. Add your project screenshots
In `Projects.jsx`, replace the `DashScreen`, `PhoneScreen`, `AnalyticsScreen`
placeholder components with real screenshots using `<img>` tags, or swap in
your own React components.

### 4. Typography
The project uses:
- **Instrument Serif** — headings and display text
- **DM Sans** — body text and UI

Both are loaded via Google Fonts in `index.html`.

## Stack
- **React 18** with Vite
- **Tailwind CSS v3** for styling
- **GSAP 3** + ScrollTrigger for animations
- Zero other dependencies
