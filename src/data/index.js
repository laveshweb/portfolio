// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    title:   'Ochi Clone',
    desc:    'Pixel-perfect rebuild of Ochi — one of the most awarded agency websites on the internet. Reverse-engineered 25+ micro-interactions using React, GSAP, and Framer Motion — including the elastic magnetic cursor, scroll-driven kinetic typography, and staggered reveals. Zero third-party UI libraries. 100% custom code.',
    tags:    ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Animation'],
    liveUrl: 'https://laveshochi.vercel.app/',
    screenshots: {
      leftTop:     ' /photos/projectochi1.png',
      leftBottom:  ' /photos/projectochi2.png',
      phone:       ' /photos/projectochi5.png',
      rightTop:    ' /photos/projectochi3.png',
      rightBottom:  '/photos/projectochi4.png',
    },
  },
  {
    title:   'NeoPop Soda',
    desc:    'Animation-first website for a flavoured soda brand built with React and GSAP. Scroll-triggered reveals and high-energy transitions doubled customer retention (2x) and directly drove an increase in product sales. Every animation locked at 60fps. Fully responsive.',
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
    desc:    'Immersive gaming platform with a live interactive 3D character — users swap skins, change gear, and trigger animations at 60fps in the browser using Three.js. Backed by 30+ GSAP scroll sequences and a 3D scene that loads in under 2 seconds. Fully responsive across all screen sizes.',
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
  },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    period:  'Jun 2021 – Feb 2022',
    role:    'Frontend Developer Intern',
    company: 'Smartify Technologies',
    location:'Thane, Mumbai',
    desc:    "This is where I stopped being a beginner. I joined Smartify knowing HTML and CSS — I left having built 9 JavaScript projects from scratch, including an Apple Music clone. But the work that actually mattered? I took their old, lifeless static website and rebuilt it as a fully animated 3D experience. I also eliminated their manual data entry process entirely by integrating a live API — data now fetched itself from the server automatically. That one change alone saved hours of repetitive work every week. The frontend I shipped was polished, performant, and animated — because ordinary websites don't leave impressions.",
    tags:    ['JavaScript', 'HTML', 'CSS', 'API Integration', '3D Animation'],
    accent:  '#f59e0b',
  },
  {
    period:  'Nov 2022 – Jan 2023',
    role:    'Frontend Developer',
    company: 'Kumar Technologies',
    location:'Remote',
    desc:    "This one started with chaos and ended with ownership. The developer before me scammed the founder and left the project in pieces. I was brought in as a designer — then the founder, watching how I worked, handed me the entire responsibility of building the website from the ground up. I delivered. It was my first paid internship, and I remember exactly what I bought with that first paycheck: my own phone and my first pair of AirDopes. That feeling of building something real and getting paid for it is what made frontend development non-negotiable for me. The site I shipped was clean, fully functional, and far better than what the founder expected.",
    tags:    ['Frontend Development', 'UI Design', 'Web Development', 'Responsive'],
    accent:  '#10b981',
  },
  {
    period:  'Jun 2023 – Sep 2023',
    role:    'Frontend Developer Intern',
    company: 'Smartify Technologies',
    location:'Thane, Mumbai',
    desc:    "They called me back — and this time the brief was bigger. I worked on a React JS web app using GSAP and Tailwind CSS, transforming static interfaces into fully interactive animated experiences that actually felt alive. I also touched the backend for the first time — implementing login and signup authentication flows end-to-end. On top of that, I owned the full responsiveness of the application, making sure every breakpoint from mobile to desktop felt intentional, not like an afterthought. By the time I left, the app was faster, more interactive, and working properly on every device.",
    tags:    ['React', 'GSAP', 'Tailwind CSS', 'Authentication', 'Responsive'],
    accent:  '#6366f1',
  },
  {
    period:  '2024',
    role:    'Full Stack Developer Intern',
    company: 'Tree-Tech Startup',
    location:'Andheri, Mumbai',
    desc:    "The most technically demanding internship yet — and I built the whole thing myself. This was a tree and plant identification startup where users upload an image of any plant and the app returns detailed botanical information instantly. I designed and built the entire frontend, created the API from scratch, and wired up the data-fetching pipeline end-to-end. No existing codebase to reference. No senior to handhold. Just a founder with a vision and me figuring it out. The result was a working, polished, fully animated frontend backed by a functional API that actually delivered real plant data. Solo-built, soup to nuts.",
    tags:    ['React', 'API Development', 'API Integration', 'Full Stack', 'Animation'],
    accent:  '#22c55e',
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