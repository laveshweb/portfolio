import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories } from '../data'
import { SkillIcons } from './SkillIcons'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const headerRef = useRef(null)
  const catRefs   = useRef([])

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: headerRef.current, start: 'top 82%' },
    })

    gsap.to(catRefs.current.filter(Boolean), {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: catRefs.current[0], start: 'top 85%' },
    })
  }, [])

  return (
    <section className="dot-bg" id="skills">
      <div className="max-w-[1200px] mx-auto px-[52px] py-[100px] max-md:px-6 max-md:py-16">

        {/* Header */}
        <div ref={headerRef}
             className="text-center mb-16 opacity-0 translate-y-6">
          <span className="inline-block text-[11px] font-semibold tracking-[2.5px] uppercase
                           text-steel mb-[14px]">
            Toolkit
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-ink
                         tracking-[-1px] mb-[14px] font-normal">
            Skills &amp; Tools
          </h2>
          <p className="text-[15.5px] text-steel max-w-[460px] mx-auto leading-[1.65]">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* 4-col grid */}
        <div className="grid gap-5
                        grid-cols-4
                        lg:grid-cols-4
                        md:grid-cols-2
                        max-sm:grid-cols-2
                        max-[400px]:grid-cols-1">
          {skillCategories.map((cat, i) => (
            <div key={cat.label}
                 ref={el => catRefs.current[i] = el}
                 className="bg-white rounded-[20px] p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)]
                            border border-[#f0f0ee] opacity-0 translate-y-7
                            hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow
                            max-md:p-5">

              <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-fog mb-[6px]">
                {cat.label}
              </div>
              <div className="font-serif text-[20px] text-ink font-normal tracking-[-0.3px]
                              mb-5 pb-4 border-b border-[#f0f0ee]">
                {cat.title}
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skillName => {
                  const Icon = SkillIcons[skillName]
                  return Icon ? (
                    <div key={skillName}
                         title={skillName}
                         className="w-12 h-12 rounded-[14px] flex items-center justify-center
                                    bg-[#f8f7f5] border border-[#eeecea] cursor-default
                                    hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                                    transition-all group relative">
                      <Icon />
                      {/* Tooltip */}
                      <span className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2
                                       bg-ink text-white text-[11px] font-medium px-[10px] py-[5px]
                                       rounded-[8px] whitespace-nowrap pointer-events-none
                                       opacity-0 group-hover:opacity-100 transition-opacity
                                       after:content-[''] after:absolute after:top-full
                                       after:left-1/2 after:-translate-x-1/2
                                       after:border-[5px] after:border-transparent
                                       after:border-t-ink">
                        {skillName}
                      </span>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
