// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    title:   'Ochi Clone',
    desc:    'Pixel-perfect rebuild of Ochi — one of the most awarded agency websites on the internet. Reverse-engineered 25+ micro-interactions using React, GSAP, and Framer Motion — including the elastic magnetic cursor, scroll-driven kinetic typography, and staggered reveals. Zero third-party UI libraries. 100% custom code.',
    tags:    ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Animation'],
    liveUrl: 'https://laveshochi.vercel.app/',
    screenshots: {
      leftTop:     '/photos/projectochi1.png',
      leftBottom:  '/photos/projectochi2.png',
      phone:       '/photos/projectochi5.png',
      rightTop:    '/photos/projectochi3.png',
      rightBottom: '/photos/projectochi4.png',
    },
  },
  {
    title:   'NeoPop Soda',
    desc:    "Animation-first website for a flavoured soda brand built with React and GSAP. Scroll-triggered reveals and high-energy transitions doubled customer retention (2x) and directly drove an increase in product sales. Every animation locked at 60fps. Fully responsive.",
    tags:    ['React', 'GSAP', 'Framer Motion', 'E-commerce', 'Responsive'],
    liveUrl: 'https://laveshneopop.vercel.app/',
    screenshots: {
      leftTop:     '/photos/neopop1.mp4',
      leftBottom:  '/photos/neopop2.png',
      phone:       '/photos/neopop5.mp4',
      rightTop:    '/photos/neopop3.png',
      rightBottom: '/photos/neopop4.mp4',
    },
  },
  {
    title:   'GameZone 3D',
    desc:    'Immersive gaming platform with a live interactive 3D character users can customise in real time — swap skins, change gear, trigger animations — all rendered at 60fps in the browser using Three.js. Layered with 30+ GSAP scroll sequences and a 3D scene that loads in under 2 seconds. Fully responsive across all screen sizes.',
    tags:    ['React', 'Three.js', 'GSAP', '3D Web', 'Responsive'],
    liveUrl: 'https://laveshgaming.vercel.app/',
    screenshots: {
      leftTop:     '/photos/gaming1.mp4',
      leftBottom:  '/photos/gaming2.png',
      phone:       '/photos/gaming5.mp4',
      rightTop:    '/photos/gaming4.png',
      rightBottom: '/photos/gaming3.mp4',
    },
  },
  {
    title:   'Luxe Furniture',
    desc:    'Premium furniture store powered by Locomotive Scroll — cinematic, momentum-driven transitions make browsing feel as considered as the products themselves. Parallax effects, magnetic hovers, and scroll storytelling guide users naturally through the full catalogue. Fully responsive across 5 breakpoints.',
    tags:    ['React', 'Locomotive Scroll', 'GSAP', 'E-commerce', 'Responsive'],
    liveUrl: 'https://laveshfurniture.vercel.app/',
    screenshots: {
      leftTop:     '/photos/furinture1.mp4',
      leftBottom:  '/photos/furniture2.png',
      phone:       '/photos/furniture3.mp4',
      rightTop:    '/photos/furinture4.png',
      rightBottom: '/photos/furniture5.mp4',
    },
  },
  {
    title:   'DriveElite Cars',
    desc:    'Premium car rental platform with a Three.js 3D showcase — users orbit 360° around every vehicle before booking. GSAP transitions run at sub-200ms, and the booking flow takes under 90 seconds from landing to confirmed reservation. Three.js auto-optimises on mobile for consistent performance everywhere.',
    tags:    ['React', 'Three.js', 'GSAP', 'Booking UX', 'Responsive'],
    liveUrl: 'https://laveshrentalcar.vercel.app/',
    screenshots: {
      leftTop:     '/photos/rental1.png',
      leftBottom:  '/photos/rental2.png',
      phone:       '/photos/rental3.mp4',
      rightTop:    '/photos/rental4.png',
      rightBottom: '/photos/rental5.png',
  
  },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    period:  '2024',
    role:    'Full Stack Developer Intern',
    company: 'Tree-Tech Startup',
    location:'Andheri, Mumbai',
    desc:    "Built the entire product solo — a plant identification app where users upload any image and get instant botanical data. Designed and developed the full frontend with smooth animations, built the API from scratch, and wired the data pipeline end-to-end. No existing codebase, no handholding — just a vision and a working, polished, animated app on the other side. Proved that given full ownership, I deliver.",
    tags:    ['React', 'JavaScript', 'ES6', 'API Development', 'Tailwind CSS', 'GSAP'],
    accent:  '#22c55e',
  },
  {
    period:  'Jun 2023 – Sep 2023',
    role:    'Frontend Developer Intern',
    company: 'Smartify Technologies',
    location:'Thane, Mumbai',
    desc:    "Called back for a bigger brief — which is the best review an intern can get. Built a fully interactive React web app using GSAP and Tailwind CSS, transforming static screens into animated, immersive experiences. Implemented login and signup authentication, owned full responsiveness across every breakpoint, and left the app faster, more interactive, and pixel-perfect on all devices. If the first stint taught me foundations, this one taught me craft.",
    tags:    ['React', 'GSAP', 'Tailwind CSS', 'JavaScript', 'ES6', 'Responsive'],
    accent:  '#6366f1',
  },
  {
    period:  'Nov 2022 – Jan 2023',
    role:    'Frontend Developer',
    company: 'Kumar Technologies',
    location:'Remote',
    desc:    "Brought in as a designer after the previous developer scammed the founder and left the project in pieces. Earned full trust and ownership, then built the entire website from the ground up — alone. My first paid internship, and the one that taught me that doing great frontend work fast gets you noticed, trusted, and paid. Bought my first phone and first AirDopes with that paycheck.",
    tags:    ['JavaScript', 'ES6', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive'],
    accent:  '#10b981',
  },
  {
    period:  'Jun 2021 – Feb 2022',
    role:    'Frontend Developer Intern',
    company: 'Smartify Technologies',
    location:'Thane, Mumbai',
    desc:    "Where it all started — and where I fell in love with making things move on screen. Built 9 JavaScript projects from scratch including an Apple Music clone, transformed their boring static website into a fully animated 3D experience, and replaced their manual data entry with a live API that fetched everything automatically. 0 to developer in 8 months, and the fundamentals I built here are still the foundation of everything I ship today.",
    tags:    ['JavaScript', 'ES6', 'HTML', 'CSS', '3D Animation', 'API Integration'],
    accent:  '#f59e0b',
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: 'Language',
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'ES6'],
  },
  {
    label: 'Framework',
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'GSAP', 'Three.js', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    title: 'Tools',
    skills: ['GitHub', 'Firebase', 'Appwrite', 'Blackbox', 'Cursor', 'VS Code'],
  },
  {
    label: 'AI Tools',
    title: 'AI Tools',
    skills: ['ChatGPT', 'Claude', 'Grok', 'Gemini', 'HeyGen', 'Leonado'],
  },
]

// ─── ABOUT ME TEXT ────────────────────────────────────────────────────────────
export const aboutMe = {
  heading: 'About me',
  paragraphs: [
    "Most startups treat their website like a business card. I hate that. A website is a brand experience — and the difference between one that converts and one that gets ignored is almost always the frontend.",
    "I'm a Frontend Developer working remotely. Across 4 internships, my work helped push average user time from 22 seconds to 1 min 23 sec. I build with React, GSAP, Three.js, and Tailwind CSS — interfaces that move, breathe, and make people stay.",
    "20+ personal projects built — not for the resume, but because I genuinely can't stop. Gym in the morning, laptop open by 9, always learning something new at midnight.",
    "If you want a website that just exists — I'm not your person. If you want one people remember — let's talk.",
  ],
}

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