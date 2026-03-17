import { useRef, useEffect } from 'react'
import ProfilePicture from '../../public/photos/ProfilePicture.jpeg'
import { gsap } from 'gsap'

export default function Hero() {
  const imgRef = useRef(null)
  const greetRef = useRef(null)
  const headRef = useRef(null)
  const badgesRef = useRef(null)
  const socialsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
    tl.to(imgRef.current, { x: 0, opacity: 1, rotate: -5, delay: 0.2 }, 0)
      .to(greetRef.current, { y: 0, opacity: 1 }, 0.35)
      .to(headRef.current, { y: 0, opacity: 1 }, 0.5)
      .to(badgesRef.current, { y: 0, opacity: 1 }, 0.65)
      .to(socialsRef.current, { y: 0, opacity: 1 }, 0.78)
  }, [])

  return (
    <div className="dot-bg">
      <section id="top"
        className="max-w-[1200px] mx-auto px-[52px] mt-2  md:mt-0 pt-[100px] md:pt-[80px] pb-20
                   flex items-center gap-[72px] min-h-screen
                   max-md:flex-col max-md:px-6 max-md:pt-[100px] max-md:pb-16
                   max-md:gap-10 max-md:min-h-0 max-md:items-start">

        {/* Photo */}
        <div
          ref={imgRef}
          className="shrink-0  self-center max-md:self-center w-[290px] h-[350px] rounded-[22px]
             shadow-[0_24px_64px_rgba(0,0,0,0.16)]
             overflow-hidden relative 
             max-md:w-[210px] max-md:h-[255px] "
          style={{ opacity: 0, transform: 'translateX(-40px) rotate(0deg)' }}
        >
          {/* ← Your photo here. Save it as /public/me.jpg */}
          <img
            src={ProfilePicture}
            alt="Aromal"
            className="w-full h-full object-cover object-top  "
          />

          {/* Dark gradient overlay at the bottom — gives depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p ref={greetRef}
            className="text-[22px] md:text-[22px]  lg:text-[24px] xl:text-[26px] text-steel mb-1 md:mb-2 lg:mb-2 font-normal flex items-center gap-2 mt3 md:mt-0"
            style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Hi 👋
          </p>

          <h1 ref={headRef}
            className="font-serif text-[clamp(34px,4.5vw,58px)] leading-[1.1]
                         text-ink tracking-[-1.5px] mb-8 font-normal"
            style={{ opacity: 0, transform: 'translateY(28px)' }}>
            I am  <em className="not-italic italic text-blue">Lavesh Bhagwani</em>, and I love to make 3D animated web experience that People Want to take {' '}
            <em className="not-italic italic text-blue">Screenshot of it...</em>{' '}
            
          </h1>
          <div ref={badgesRef}
               className="flex flex-wrap gap-[10px] mb-6"
               style={{ opacity: 0, transform: 'translateY(20px)' }}>
 
            {/* Badge 1 — Frontend Developer (green) */}
            <span className="inline-flex items-center gap-[5px] px-[18px] py-[9px]
                 rounded-full text-[13px] font-medium border
                 bg-[#f0fdf4] border-[#bbf7d0] text-[#16a34a]
                 transition-all duration-300
                 hover:-translate-y-[5px] hover:shadow-lg">
              {/* React atom icon */}
              <svg width="20" height="18" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="2.8" fill="#16a34a"/>
                <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#16a34a" strokeWidth="1.5" fill="none"/>
                <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#16a34a" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
                <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#16a34a" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
              </svg>
              Frontend Developer
            </span>
 
            {/* Badge 2 — Web Developer (blue) */}
            <span className="inline-flex items-center gap-[8px] px-[18px] py-[9px]
                             rounded-full text-[13px] font-medium border
                             bg-[#eef4ff] border-[#c3d8ff] text-[#2563eb] hover:-translate-y-[5px] hover:shadow-lg">
              {/* Globe / web icon */}
              <svg width="20" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.8"/>
                <path d="M2 12h20M12 2c-2.5 3-4 6.3-4 10s1.5 7 4 10M12 2c2.5 3 4 6.3 4 10s-1.5 7-4 10"
                      stroke="#2563eb" strokeWidth="1.8" fill="none"/>
              </svg>
              Web Developer
            </span>
 
            {/* Badge 3 — Vibe Coder (pink/purple) */}
            <span className="inline-flex items-center gap-[8px] px-[18px] py-[9px]
                             rounded-full text-[13px] font-medium border
                             bg-[#fdf2f8] border-[#f5c6e8] text-[#db2777] hover:-translate-y-[5px] hover:shadow-lg">
              {/* Code icon */}
              <svg width="20" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                      stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vibe Coder
            </span>
 
          </div>
 
          {/* ── Social links with SVG icons + hover animations ── */}
          <div ref={socialsRef}
               className="flex gap-3 flex-wrap"
               style={{ opacity: 0, transform: 'translateY(20px)' }}>
 
            {/* LinkedIn */}
            <a href="#"
               target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-[10px] px-5 py-[10px]
                          rounded-full text-[13px] font-medium no-underline
                          border border-[1.5px] border-[#dde1e7]
                          bg-white text-[#1a2332]
                          transition-all duration-200
                          hover:-translate-y-1
                          hover:bg-[#0077b5] hover:text-white
                          hover:border-[#0077b5]
                          hover:shadow-[0_8px_24px_rgba(0,119,181,0.3)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                   className="transition-transform duration-200 group-hover:scale-110">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
 
            {/* GitHub */}
            <a href="#"
               target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-[10px] px-5 py-[10px]
                          rounded-full text-[13px] font-medium no-underline
                          border border-[1.5px] border-[#dde1e7]
                          bg-white text-[#1a2332]
                          transition-all duration-200
                          hover:-translate-y-1
                          hover:bg-[#24292f] hover:text-white
                          hover:border-[#24292f]
                          hover:shadow-[0_8px_24px_rgba(36,41,47,0.3)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                   className="transition-transform duration-200 group-hover:scale-110">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
 
            {/* Instagram */}
            <a href="#"
               target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-[10px] px-5 py-[10px]
                          rounded-full text-[13px] font-medium no-underline
                          border border-[1.5px] border-[#dde1e7]
                          bg-white text-[#1a2332]
                          transition-all duration-200
                          hover:-translate-y-1
                          hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]
                          hover:text-white hover:border-transparent
                          hover:shadow-[0_8px_24px_rgba(188,24,136,0.3)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                   className="transition-transform duration-200 group-hover:scale-110">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
 
            {/* Twitter / X */}
            <a href="#"
               target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-[10px] px-5 py-[10px]
                          rounded-full text-[13px] font-medium no-underline
                          border border-[1.5px] border-[#dde1e7]
                          bg-white text-[#1a2332]
                          transition-all duration-200
                          hover:-translate-y-1
                          hover:bg-[#000] hover:text-white
                          hover:border-[#000]
                          hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                   className="transition-transform duration-200 group-hover:scale-110">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
 
          </div>
        </div>
      </section>
    </div>
  )
}
