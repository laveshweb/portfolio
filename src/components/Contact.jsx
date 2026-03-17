import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { socials } from '../data'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'Twitter / X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const innerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      innerRef.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: innerRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section id="contact">
      <div className="max-w-[1200px] mx-auto px-[52px] py-[100px] max-md:px-5 max-md:py-16">

        <div ref={innerRef}
             className="bg-ink rounded-[28px] p-[72px_64px] grid grid-cols-2 gap-16
                        items-center
                        max-md:grid-cols-1 max-md:gap-10 max-md:p-10 max-md:rounded-[20px]">

          {/* ── Left: heading ── */}
          <div>
            <span className="block text-[11px] font-semibold tracking-[2.5px] uppercase
                             text-white/40 mb-5">
              Get in touch
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,52px)] text-white font-normal
                           tracking-[-1px] leading-[1.15] mb-5">
              Let&apos;s build something{' '}
              <em className="not-italic italic text-[#7eb8f7]">great together.</em>
            </h2>
            <p className="text-[15px] text-white/50 leading-[1.7] max-w-[380px]">
              Open to freelance projects, full-time roles, and interesting collabs.
              Drop me a message — I usually reply within a day.
            </p>
          </div>

          {/* ── Right: email + socials ── */}
          <div className="flex flex-col gap-4">

            {/* Email button */}
            <a href={`mailto:${socials.email}`}
               className="flex items-center gap-3 px-6 py-4 rounded-[14px]
                          bg-white/[0.08] border border-white/10 text-white no-underline
                          text-[15px] font-medium
                          hover:bg-white/[0.14] hover:-translate-y-0.5 transition-all">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 opacity-70 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              {socials.email}
            </a>

            {/* Social grid */}
            <div className="grid grid-cols-2 gap-[10px]">
              {socialLinks.map(s => (
                <a key={s.key}
                   href={socials[s.key]}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-[10px] px-[18px] py-[14px]
                              rounded-[14px] bg-white/[0.06] border border-white/[0.08]
                              text-white/75 no-underline text-[13.5px] font-medium
                              hover:bg-white/[0.12] hover:text-white hover:-translate-y-0.5
                              transition-all">
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-7 text-[12.5px] text-fog
                         border-t border-black/[0.07]">
        © 2025 Aromal · Crafted with ♥ using React, Tailwind &amp; GSAP
      </footer>
    </section>
  )
}
