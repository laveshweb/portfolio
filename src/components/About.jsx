import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { aboutPhotos } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const photosRef = useRef(null)
  const textRef   = useRef(null)

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: textRef.current, start: 'top 82%' },
    })

    if (photosRef.current) {
      // Stagger each photo column in
      const cols = photosRef.current.querySelectorAll('.photo-col')
      gsap.to(cols, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: photosRef.current, start: 'top 82%' },
      })
    }
  }, [])

  // Split photos into two columns
  const col1 = aboutPhotos.slice(0, 3)
  const col2 = aboutPhotos.slice(3, 6)

  return (
    <section className="dot-bg" id="about">
      <div className="max-w-[1200px] mx-auto px-[52px] py-[100px] max-md:px-6 max-md:py-16">

        <div className="grid grid-cols-2 gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">

          {/* ── Left: sticky text ── */}
          <div ref={textRef}
               className="md:sticky md:top-[100px] opacity-0 translate-y-6">

            <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-ink
                           tracking-[-1.5px] leading-[1.05] mb-9 font-normal">
              About <em className="not-italic italic text-blue">me</em>
            </h2>

            <p className="text-[15.5px] text-[#4a5568] leading-[1.85] mb-[22px]">
              I&apos;m a product designer who enjoys untangling messy ideas and
              turning them into things that feel simple and clear.
            </p>
            <p className="text-[15.5px] text-[#4a5568] leading-[1.85] mb-[22px]">
              I&apos;m naturally curious and love digging into fuzzy problems,
              asking <em className="not-italic italic font-medium text-ink">why</em>,
              and slowly shaping clarity out of chaos. I care about the little
              details that make products feel intuitive, calm, and human.
            </p>
            <p className="text-[15.5px] text-[#4a5568] leading-[1.85] mb-[22px]">
              When I&apos;m not designing, I&apos;m usually gaming, riding my
              motorcycle, hosting events, or picking up a new hobby just for fun.
            </p>
            <p className="text-[15.5px] text-[#4a5568] leading-[1.85]">
              I believe good design is all about balance — between users, business
              goals, and real-world constraints. That&apos;s where I do my best work.
            </p>
          </div>

          {/* ── Right: photo masonry ── */}
          <div ref={photosRef}
               className="grid grid-cols-2 gap-3 max-md:gap-2">

            {/* Column 1 */}
            <div className="photo-col flex flex-col gap-3 opacity-0 translate-y-8
                            max-md:gap-2">
              {col1.map((photo, i) => (
                <PhotoCard key={i} photo={photo} />
              ))}
            </div>

            {/* Column 2 — offset down for masonry feel */}
            <div className="photo-col flex flex-col gap-3 mt-8 opacity-0 translate-y-8
                            max-md:gap-2 max-md:mt-6">
              {col2.map((photo, i) => (
                <PhotoCard key={i} photo={photo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Soft fallback colors when image hasn't loaded yet
const fallbacks = [
  { bg: 'linear-gradient(135deg,#c8d8a8,#8aad6b)', emoji: '🌸' },
  { bg: 'linear-gradient(135deg,#f7d6b0,#e8a87c)', emoji: '🎮' },
  { bg: 'linear-gradient(135deg,#b8c4e8,#7889cc)', emoji: '🏍' },
  { bg: 'linear-gradient(135deg,#e8c4d4,#cc8aaa)', emoji: '🎨' },
  { bg: 'linear-gradient(135deg,#a8d4c8,#6aad9e)', emoji: '✍️' },
  { bg: 'linear-gradient(135deg,#f0e0a8,#d4bc6a)', emoji: '🍣' },
]

function PhotoCard({ photo }) {
  const fallback = fallbacks[aboutPhotos.indexOf(photo)] || fallbacks[0]

  return (
    <div
      className="rounded-[18px] overflow-hidden bg-[#e8e4df]
                 hover:scale-[1.02] transition-transform duration-300"
      style={{ aspectRatio: photo.ratio }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover block"
        onError={e => {
          // Show emoji fallback if image not found
          const parent = e.target.parentNode
          e.target.style.display = 'none'
          parent.style.background = fallback.bg
          parent.style.display = 'flex'
          parent.style.alignItems = 'center'
          parent.style.justifyContent = 'center'
          parent.style.fontSize = '48px'
          parent.innerHTML = fallback.emoji
        }}
      />
    </div>
  )
}
