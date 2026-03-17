import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────
// HOW THE LAYOUT WORKS
//
// Every project card has this FIXED structure:
//
//   ┌──────────────┬───────────┬──────────────┐
//   │  Left image  │           │  Right image │  ← aspect 16/9
//   │   (16/9)     │  Phone    │   (16/9)     │
//   ├──────────────┤  (9/16)   ├──────────────┤
//   │  Left image  │           │  Right image │  ← aspect 16/9
//   │   (16/9)     │           │   (16/9)     │
//   └──────────────┴───────────┴──────────────┘
//
// Every slot accepts EITHER an image (jpg/png/webp) OR a video (mp4/webm).
// Just pass the file path — the slot auto-detects which one to render.
// ─────────────────────────────────────────────────────────────


// ── Helper: check if a src is a video file ────────────────────
function isVideo(src) {
  if (!src) return false
  const s = src.toLowerCase()
  return s.endsWith('.mp4') || s.endsWith('.webm') || s.endsWith('.ogg')
}


// ── Single media slot ─────────────────────────────────────────
// Accepts image OR video — auto-detects from file extension.
// Clicking always opens the project live URL in a new tab.
//
// To use an image: src="/projects/neopop-hero.png"
// To use a video: src="/projects/neopop-animation.mp4"
function ImageSlot({ src, alt, liveUrl, ratio, className = '' }) {
  return (
    // Outer box: fixed aspect ratio controls the height
    <div
      className={`overflow-hidden rounded-[4px] sm:rounded-[10px] lg:rounded-[12px] mock-shot
                  opacity-0 translate-y-8 bg-[#f6f6f6]
                  flex items-center justify-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={alt}
        className="block w-full h-full group"
      >
        {isVideo(src) ? (
          // ── VIDEO: autoplay, loop, muted (required for autoplay) ──
          <video
            src={src}
            autoPlay      // starts automatically when in view
            loop          // plays on repeat
            muted         // browsers require muted for autoplay
            playsInline   // prevents fullscreen on iOS
            className="w-full h-full object-contain
                       transition-transform duration-500
                       group-hover:scale-[1.05]"
          />
        ) : (
          // ── IMAGE: standard lazy-loaded img ──
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-contain
                       transition-transform duration-500
                       group-hover:scale-[1.05]"
          />
        )}
      </a>
    </div>
  )
}


// ── Single project card ───────────────────────────────────────
// Shows 5 media slots in the fixed layout + title + description
function ProjectCard({ project, cardRef }) {
  const { title, desc, liveUrl, screenshots } = project

  return (
    <div ref={cardRef} className="mb-20 last:mb-0 opacity-0 translate-y-10">

      {/* ── Screenshot / video area ── */}
      <div className="mb-7 p-2 py-1.5 sm:py-0  sm:p-3 lg:p-4 rounded-[8px] sm:rounded-[18px] lg:rounded-[22px] bg-white
                      border border-[#ebebea]
                      shadow-[0_2px_20px_rgba(0,0,0,0.07)]
                      hover:shadow-[0_10px_48px_rgba(0,0,0,0.12)]
                      transition-shadow duration-300">

        {/* Three-column flex row
            Left col  → flex:1
            Phone col → fixed 24% width
            Right col → flex:1                              */}
        <div className="flex gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 flex-1 max-sm:gap-2">
            <ImageSlot
              src={screenshots.leftTop}
              alt={`${title} — screen 1`}
              liveUrl={liveUrl}
              ratio="16/9"
            />
            <ImageSlot
              src={screenshots.leftBottom}
              alt={`${title} — screen 2`}
              liveUrl={liveUrl}
              ratio="16/9"
            />
          </div>

          {/* ── CENTER COLUMN: phone ── */}
          <div className="flex-shrink-0" style={{ width: '24%' }}>
            <ImageSlot
              src={screenshots.phone}
              alt={`${title} — mobile`}
              liveUrl={liveUrl}
              ratio="9/16"
              className="h-full"
            />
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 flex-1 max-sm:gap-2">
            <ImageSlot
              src={screenshots.rightTop}
              alt={`${title} — screen 3`}
              liveUrl={liveUrl}
              ratio="16/9"
            />
            <ImageSlot
              src={screenshots.rightBottom}
              alt={`${title} — screen 4`}
              liveUrl={liveUrl}
              ratio="16/9"
            />
          </div>

        </div>
      </div>

      {/* ── Text area ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
        <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className=" flex"
          >
          <h3 className="font-serif text-[clamp(24px,2.8vw,36px)]
                         text-[#1a2332] font-normal tracking-[-0.6px] cursor-pointer mr-2.5">
            {title}
          </h3>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" className='mt-3.5'>
              <path d="M3 13L13 3M13 3H6M13 3v7"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round"  />
            </svg>
          </a>
        </div>
        <p className="text-[15px] text-[#4a5568] leading-[1.78]
                      max-w-[680px] max-sm:text-[13.5px]">
          {desc}
        </p>
      </div>

    </div>
  )
}


// ── Projects section ──────────────────────────────────────────
export default function Projects() {
  const headerRef = useRef(null)
  const cardRefs  = useRef([])

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: headerRef.current, start: 'top 82%' },
    })

    cardRefs.current.forEach(el => {
      if (!el) return

      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })

      const slots = el.querySelectorAll('.mock-shot')
      gsap.to(slots, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.09,
        scrollTrigger: { trigger: el, start: 'top 84%' },
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="dot-bg" id="work">
      <div className="max-w-[1100px] mx-auto px-[8px] min-[400px]:px-[16px] sm:px-[40px] lg:px-[52px] py-[100px]
                      max-md:py-16">

        <div ref={headerRef} className="text-center mb-16 opacity-0 translate-y-7">
          <span className="inline-block text-[11px] font-semibold
                           tracking-[2.5px] uppercase text-[#6b7a8d] mb-[14px]">
            Project
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)]
                         text-[#1a2332] tracking-[-1px] mb-[14px] font-normal">
            Work Showcase
          </h2>
          <p className="text-[15.5px] text-[#6b7a8d] max-w-[460px] mx-auto leading-[1.65]">
            My craft, condensed into the products I am proud of!
          </p>
        </div>

        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            cardRef={el => (cardRefs.current[i] = el)}
          />
        ))}

      </div>
    </section>
  )
}