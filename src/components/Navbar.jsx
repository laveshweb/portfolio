import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setDrawerOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const close = () => setDrawerOpen(false)

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between
                     px-[18px] sm:px-[30px] md:px-[40px] xl:px-[75px] py-4 bg-[rgba(242,241,239,0.88)] backdrop-blur-md
                      border-b border-black/[0.07]">
        <a href="#top" className="font-serif text-[26px] sm:text-[28px] lg:text-[30px] text-ink tracking-[0.5px] no-underline ">
          Lavesh ✦
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none lg:ml-20">
          {navLinks.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative md:text-[15px] lg:text-[16px] xl:text-[16.5px] font-medium text-slate hover:text-ink transition-colors no-underline
                          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                         after:bg-ink after:scale-x-0 after:origin-left
                          after:transition-transform  after:duration-500
                           hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" onClick={close}
          className="hidden md:flex items-center justify-center gap-2  px-5 py-[13px] 
                      rounded-[14px] bg-ink text-mist md:text-[12px] lg:text-[14px] font-semibold
                      no-underline hover:bg-[#2d3f56] hover:-translate-y-px transition-all ">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M10 2v3h3M5 7h6M5 9.5h6M5 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          View Resume
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] p-[6px] w-9 h-9
                     rounded-lg bg-transparent border-none cursor-pointer hover:bg-black/5 transition-colors"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-ink rounded-sm" />
        </button>
      </nav>

      {/* ── Overlay ── */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[300] bg-black/35 backdrop-blur-sm transition-opacity duration-300
                    ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* ── Drawer ── */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-[400] w-[min(320px,85vw)]
                    bg-[rgba(248,247,245,0.96)] backdrop-blur-xl
                    border-l border-black/[0.07] flex flex-col px-7 pt-7 pb-10
                    transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between mb-12">
          <a href="#top" onClick={close}
            className="font-serif text-[20px] text-ink tracking-[-0.5px] no-underline">
            Aromal ✦
          </a>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-9 h-9 rounded-[10px] border border-border bg-transparent
                       flex items-center justify-center cursor-pointer text-slate
                       hover:bg-[#f0eeec] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="list-none flex-1 ">
          {navLinks.map(l => (
            <li key={l.href} className="border-b border-black/[0.06]">
              <a href={l.href} onClick={close}
                className="flex items-center justify-between py-[18px] px-1
                            text-[17px] font-medium text-ink no-underline hover:text-blue transition-colors">
                {l.label}
                <span className="text-[18px] text-fog">→</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a href="#" onClick={close}
          className="flex items-center justify-center gap-2 mt-8 px-6 py-[15px]
                      rounded-[14px] bg-ink text-mist text-[14px] font-semibold
                      no-underline hover:bg-[#2d3f56] hover:-translate-y-px transition-all">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M10 2v3h3M5 7h6M5 9.5h6M5 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          View Resume
        </a>
      </div>
    </>
  )
}
