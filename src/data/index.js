// ─── PROJECTS ────────────────────────────────────────────────────────────────
// To update with your real screenshots:
//   1. Put your images in /public/projects/
//   2. Replace src URLs below with e.g. '/projects/ochi-hero.png'
//   3. Replace liveUrl with your actual deployed URL
export const projects = [
  {
    title:   'Ochi — Agency Website Clone',
    desc:    'A pixel-perfect clone of Ochi, a strategic presentation design agency. Built with React, GSAP, and Framer Motion — featuring smooth scroll-driven animations, magnetic cursor interactions, and a bold typographic layout that mirrors the feel of the original award-winning site.',
    tags:    ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Animation'],
    liveUrl: 'https://laveshochi.vercel.app/',
    screenshots: {
      // Replace these with real screenshots of laveshochi.vercel.app
      // Tip: open the site, take a screenshot, save to /public/projects/
      leftTop:     '/public/photos/projectochi1.png',
      leftBottom:  '/public/photos/projectochi2.png',
      phone:       '/public/photos/projectochi5.png',
      rightTop:    '/public/photos/projectochi3.png',
      rightBottom: '/public/photos/projectochi4.png',
    },
  },
  {
    title:   'Design System — Kibo',
    desc:    'Built a comprehensive design system for a fast-growing fintech startup. Includes 200+ components, detailed documentation, and accessibility guidelines that reduced designer-to-engineer handoff time by 60%.',
    tags:    ['Design System', 'Figma', 'Component Library', 'Fintech'],
    liveUrl: '#',
    screenshots: {
      leftTop:     '/public/photos/neopop1.mp4',
      leftBottom:  '/public/photos/neopop2.png',
      phone:       '/public/photos/neopop5.mp4',
      rightTop:    '/public/photos/neopop3.png',
      rightBottom: '/public/photos/neopop4.mp4',
    },
  },
  {
    title:   'Calligraphy Studio',
    desc:    'A personal digital studio for showcasing and selling original hand-lettered artworks. Features an elegant gallery, a custom commission flow, and a minimal checkout experience.',
    tags:    ['E-commerce', 'Branding', 'Typography', 'Visual Design'],
    liveUrl: '#',
    screenshots: {
      leftTop:     '/public/photos/gaming1.mp4',
      leftBottom:  '/public/photos/gaming2.png',
      phone:       '/public/photos/gaming5.mp4',
      rightTop:    '/public/photos/gaming4.png',
      rightBottom: '/public/photos/gaming3.mp4',
    },
  },
  {
    title:   'Juspay Checkout',
    desc:    'Redesigned the merchant-facing checkout SDK and analytics dashboard. The new flow reduced payment drop-off by 22% through smarter UPI fallback UX and payment method ordering.',
    tags:    ['Fintech', 'SDK Design', 'Checkout UX', 'Developer Tools'],
    liveUrl: '#',
    screenshots: {
      leftTop:     '/public/photos/furinture1.mp4',
      leftBottom:  '/public/photos/furniture2.png',
      phone:       '/public/photos/furniture3.mp4',
      rightTop:    '/public/photos/furinture4.png',
      rightBottom: '/public/photos/furniture5.mp4',
    },
  },
  {
    title:   'Breeze Onboarding',
    desc:    'Designed the end-to-end onboarding flow for Breeze from sign-up through store connection to first insight. A 4-step personalised flow that reduced time-to-value from days to under 10 minutes.',
    tags:    ['Onboarding', 'Product Design', 'Growth', 'Mobile-first'],
    liveUrl: '#',
    screenshots: {
      leftTop:     '/public/photos/rental1.png',
      leftBottom:  '/public/photos/rental2.png',
      phone:       '/public/photos/rental3.mp4',
      rightTop:    '/public/photos/rental4.png',
      rightBottom: '/public/photos/rental5.png',
    },
  },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    period:  'Jun 2024 – Aug 2024',
    role:    'Product Design Intern',
    company: 'Juspay Technologies',
    location:'Bengaluru, India',
    desc:    'Redesigned the merchant checkout SDK and built an analytics dashboard used by 40+ D2C brands. Worked with PMs and engineers to reduce checkout drop-off by 22% through smarter UPI fallback UX.',
    tags:    ['Figma', 'Checkout UX', 'Analytics', 'Design System', 'Fintech'],
    accent:  '#2563eb',
  },
  {
    period:  'Jan 2024 – Apr 2024',
    role:    'UX Design Intern',
    company: 'Breeze Commerce',
    location:'Remote',
    desc:    'Designed the AI Assistant and onboarding experience for the Breeze D2C platform. Built prototypes for the real-time analytics dashboard and led user testing with 12 D2C founders.',
    tags:    ['AI Design', 'Prototyping', 'User Testing', 'Dashboard', 'E-commerce'],
    accent:  '#0ea5e9',
  },
  {
    period:  'Jun 2023 – Aug 2023',
    role:    'Visual Design Intern',
    company: 'Kibo Design Studio',
    location:'Kochi, India',
    desc:    'Contributed to a design system covering 200+ components for a fintech client. Created Figma tokens and ran accessibility audits improving WCAG compliance across three product surfaces.',
    tags:    ['Design System', 'Figma', 'Accessibility', 'WCAG', 'Component Library'],
    accent:  '#22c55e',
  },
  {
    period:  'Dec 2022 – Feb 2023',
    role:    'Graphic Design Intern',
    company: 'Studio Ink',
    location:'Thrissur, India',
    desc:    'Created brand identities and social assets for 8+ clients. Developed a visual language for a calligraphy product line that achieved 400+ Etsy sales in its first month.',
    tags:    ['Branding', 'Illustration', 'Print Design', 'Social Media', 'Typography'],
    accent:  '#c084fc',
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: 'Language',
    title: 'Languages',
    skills: ['JavaScript', 'Python'],
  },
  {
    label: 'Framework',
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'GSAP', 'Three.js'],
  },
  {
    label: 'Tools',
    title: 'Tools',
    skills: ['GitHub', 'Firebase', 'Appwrite', 'Blackbox'],
  },
  {
    label: 'AI Tools',
    title: 'AI Tools',
    skills: ['ChatGPT', 'Claude', 'Grok', 'Gemini'],
  },
]

// ─── ABOUT PHOTOS ─────────────────────────────────────────────────────────────
// Replace src values with your actual image paths (put images in /public/photos/)
export const aboutPhotos = [
  { src: '/photos/photo1.jpg', alt: 'Nature', ratio: '4/5' },
  { src: '/photos/photo2.jpg', alt: 'Hobby',  ratio: '4/3' },
  { src: '/photos/photo3.jpg', alt: 'Bike',   ratio: '1/1' },
  { src: '/photos/photo4.jpg', alt: 'Art',    ratio: '4/3' },
  { src: '/photos/photo5.jpg', alt: 'Design', ratio: '4/5' },
  { src: '/photos/photo6.jpg', alt: 'Food',   ratio: '4/3' },
]

// ─── SOCIALS ──────────────────────────────────────────────────────────────────
export const socials = {
  linkedin:  'https://linkedin.com/in/aromal',
  twitter:   'https://twitter.com/aromal',
  github:    'https://github.com/aromal',
  instagram: 'https://instagram.com/aromal',
  email:     'hello@aromal.design',
}