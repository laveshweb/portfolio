import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const headerRef = useRef(null)
  const wrapRef   = useRef(null)
  const fillRef   = useRef(null)
  const rowRefs   = useRef([])

  useEffect(() => {
    // Header
    gsap.to(headerRef.current, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: headerRef.current, start: 'top 82%' },
    })

    // Timeline fill scrubs with scroll
    if (wrapRef.current && fillRef.current) {
      gsap.to(fillRef.current, {
        height: '100%', ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 72%',
          end: 'bottom 80%',
          scrub: 0.8,
        },
      })
    }

    // Animate ALL .exp-card elements inside each row (both desktop + mobile)
    // Using querySelectorAll so every matching card gets animated regardless of visibility
    rowRefs.current.forEach(el => {
      if (!el) return

      // Animate every .exp-card found (desktop hidden ones + mobile visible one)
      const cards = el.querySelectorAll('.exp-card')
      gsap.to(cards, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 83%',
          onEnter:     () => el.classList.add('exp-active'),
          onLeaveBack: () => el.classList.remove('exp-active'),
        },
      })
    })
  }, [])

  return (
    <section className="dot-bg" id="experience">
      <div className="max-w-[1100px] mx-auto px-[52px] py-[100px] max-md:px-5 max-md:py-16">

        {/* Header */}
        <div ref={headerRef}
             className="text-center mb-[72px] opacity-0 translate-y-6">
          <span className="inline-block text-[11px] font-semibold tracking-[2.5px] uppercase
                           text-[#6b7a8d] mb-[14px]">
            Experience
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-[#1a2332]
                         tracking-[-1px] mb-[14px] font-normal">
            Where I&apos;ve Worked
          </h2>
          <p className="text-[15.5px] text-[#6b7a8d] max-w-[460px] mx-auto leading-[1.65]">
            Four internships that shaped how I think about design and products.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div
          ref={wrapRef}
          className="relative
                     md:block
                     max-md:pl-8"
        >
          {/* Track — light background line */}
          <div className="absolute top-0 bottom-0 w-[2px] rounded-sm bg-[#e2e6eb]
                          md:left-1/2 md:-translate-x-1/2
                          max-md:left-[7px] max-md:translate-x-0" />

          {/* Fill — dark animated line (GSAP grows height) */}
          <div
            ref={fillRef}
            className="absolute top-0 w-[2px] h-0 rounded-sm bg-[#1a2332]
                       md:left-1/2 md:-translate-x-1/2
                       max-md:left-[7px] max-md:translate-x-0"
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                ref={el => rowRefs.current[i] = el}
                className="exp-row relative mb-[72px] last:mb-0
                           md:grid md:[grid-template-columns:1fr_56px_1fr]
                           max-md:flex max-md:flex-row max-md:items-start max-md:mb-11"
              >

                {/* ── DESKTOP: alternating left / right ── */}
                <div className="max-md:hidden">
                  {isLeft ? <ExpCard exp={exp} side="left" /> : <div />}
                </div>

                <div className="max-md:hidden flex justify-center items-start pt-2 z-10 relative">
                  <ExpDot />
                </div>

                <div className="max-md:hidden">
                  {!isLeft ? <ExpCard exp={exp} side="right" /> : <div />}
                </div>

                {/* ── MOBILE: dot pinned to left line, card fills width ── */}
                {/* Dot — absolutely positioned centered on the left line */}
                <div
                  className="md:hidden absolute z-10 flex items-center justify-center"
                  style={{ left: '-25px', top: '10px', width: '16px', height: '16px' }}
                >
                  <ExpDot />
                </div>

                {/* Card — full remaining width */}
                <div className="md:hidden flex-1 min-w-0">
                  <ExpCard exp={exp} side="left" />
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* Active dot style */}
      <style>{`
        .exp-active .exp-dot {
          background: #1a2332 !important;
          border-color: #1a2332 !important;
          box-shadow: 0 0 0 5px rgba(26,35,50,0.12);
        }
      `}</style>
    </section>
  )
}

/* ── Dot ── */
function ExpDot() {
  return (
    <div className="exp-dot w-4 h-4 rounded-full bg-[#f2f1ef]
                    border-[2.5px] border-[#dde1e7]
                    transition-all duration-300 shrink-0" />
  )
}

/* ── Card ── */
function ExpCard({ exp, side }) {
  const slideClass = side === 'left' ? '-translate-x-7' : 'translate-x-7'

  return (
    <div className={`exp-card
                     bg-white rounded-[18px] p-7
                     shadow-[0_2px_24px_rgba(0,0,0,0.06)]
                     border border-[#f0f0ee]
                     opacity-0
                     hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]
                     transition-shadow duration-300
                     ${slideClass}
                     max-md:translate-x-0 max-md:p-5`}>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase
                      text-[#9ba6b4] mb-[10px]">
        {exp.period}
      </div>

      <div className="font-serif text-[clamp(20px,2.2vw,30px)] text-[#1a2332]
                      tracking-[-0.5px] mb-[6px] leading-[1.2] font-normal">
        {exp.role}
      </div>

      <div className="flex items-center gap-[7px] mb-[14px] flex-wrap">
        <span className="text-[13.5px] font-semibold" style={{ color: exp.accent }}>
          {exp.company}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#c5c2bb] shrink-0" />
        <span className="text-[13px] text-[#9ba6b4] font-normal">{exp.location}</span>
      </div>

      <p className="text-[14px] text-[#556373] leading-[1.78] mb-4">
        {exp.desc}
      </p>

      <div className="flex flex-wrap gap-[6px]">
        {exp.tags.map(t => (
          <span key={t}
                className="text-[11px] font-medium px-[11px] py-1 rounded-full
                           bg-[#f5f5f3] text-[#556373] border border-[#e8eaed]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
