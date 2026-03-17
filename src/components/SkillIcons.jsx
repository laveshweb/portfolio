// All skill icons as SVG components
export const SkillIcons = {
  JavaScript: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M9 25.5l2.3-1.4c.45.8.85 1.47 1.83 1.47.93 0 1.52-.36 1.52-1.78V14.5h2.83v9.38c0 2.93-1.72 4.27-4.23 4.27-2.27 0-3.58-1.17-4.25-2.65zm10.2-.3l2.3-1.4c.6 1 1.38 1.73 2.75 1.73 1.15 0 1.9-.58 1.9-1.38 0-.96-.76-1.3-2.03-1.85l-.7-.3c-2.02-.86-3.36-1.94-3.36-4.22 0-2.1 1.6-3.7 4.1-3.7 1.78 0 3.06.62 3.97 2.24l-2.18 1.4c-.48-.86-1-1.2-1.8-1.2-.82 0-1.34.52-1.34 1.2 0 .84.52 1.18 1.72 1.7l.7.3c2.37 1.02 3.72 2.06 3.72 4.4 0 2.52-1.98 3.9-4.64 3.9-2.6 0-4.28-1.24-5.1-2.82z" fill="#000"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M15.88 2C9.4 2 9.8 4.75 9.8 4.75l.007 2.85h6.18v.856H7.437S3 7.952 3 14.502c0 6.55 3.626 6.32 3.626 6.32h2.164v-3.04s-.116-3.626 3.568-3.626h6.148s3.45.056 3.45-3.334V5.89S22.5 2 15.88 2zm-3.42 1.98c.62 0 1.12.5 1.12 1.118 0 .617-.5 1.117-1.12 1.117-.62 0-1.12-.5-1.12-1.117 0-.618.5-1.118 1.12-1.118z" fill="url(#pyg)"/>
      <path d="M16.12 30c6.48 0 6.08-2.75 6.08-2.75l-.007-2.85h-6.18v-.856h8.55S29 23.048 29 16.498c0-6.55-3.626-6.32-3.626-6.32H23.21v3.04s.116 3.626-3.568 3.626h-6.148S10.044 16.788 10.044 20.178V26.11S9.5 30 16.12 30zm3.42-1.98c-.62 0-1.12-.5-1.12-1.118 0-.617.5-1.117 1.12-1.117.62 0 1.12.5 1.12 1.117 0 .618-.5 1.118-1.12 1.118z" fill="url(#pyb)"/>
      <defs>
        <linearGradient id="pyg" x1="3" y1="2" x2="22.5" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient>
        <linearGradient id="pyb" x1="9.5" y1="10" x2="29" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient>
      </defs>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  'Next.js': () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#000"/>
      <path d="M9 22V10h9.5l-6.5 8H19v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  GSAP: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="6" fill="#0AE448"/>
      <text x="4" y="22" fontSize="13" fontWeight="800" fill="#000" fontFamily="monospace">GSAP</text>
    </svg>
  ),
  'Three.js': () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="6" fill="#000"/>
      <path d="M16 4L28 27H4L16 4z" fill="none" stroke="white" strokeWidth="1.5"/>
      <path d="M10 15.5L22 15.5" stroke="white" strokeWidth="1.2" opacity=".6"/>
      <path d="M7.5 21L24.5 21" stroke="white" strokeWidth="1.2" opacity=".4"/>
      <path d="M13 10L19 10" stroke="white" strokeWidth="1.2" opacity=".8"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#24292F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 4.65 3.01 8.59 7.19 9.98.53.1.72-.23.72-.51v-1.8c-2.93.64-3.55-1.4-3.55-1.4-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.07.88.09-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07A10.03 10.03 0 0116 11.4c.89 0 1.79.12 2.63.35 2-.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.67.73 1.08 1.67 1.08 2.82 0 4.04-2.47 4.93-4.82 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.51C23.49 24.58 26.5 20.64 26.5 16c0-5.8-4.7-10.5-10.5-10.5z" fill="white"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M5.5 24.5L10 11l4.5 5L18 8l8.5 16.5-21 0z" fill="#FFA000"/>
      <path d="M5.5 24.5L10 11l4.5 10.5L5.5 24.5z" fill="#F57C00"/>
      <path d="M18 8l-3.5 13 12 3.5L18 8z" fill="#FFCA28"/>
      <path d="M14.5 21.5l4 3L10 11l4.5 10.5z" fill="#F57C00" opacity=".6"/>
    </svg>
  ),
  Appwrite: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="8" fill="#FD366E"/>
      <path d="M8 16a8 8 0 1116 0 8 8 0 01-16 0z" fill="white" opacity=".15"/>
      <path d="M12 16a4 4 0 118 0 4 4 0 01-8 0z" fill="white"/>
      <path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Blackbox: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <rect width="32" height="32" rx="6" fill="#000"/>
      <rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="2.5" fill="white"/>
      <path d="M11 16h10M16 11v10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
    </svg>
  ),
  ChatGPT: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#10A37F"/>
      <path d="M23.5 13.5c.5-3.5-2-6.5-5.5-7-1 0-2 .5-2.5.5C14 5.5 11.5 5 9.5 6.5c-1.5 1-2 2.5-2 4 0 .5 0 1 .5 1.5C7 13 6.5 14.5 7 16c.5 1.5 1.5 2.5 3 3 0 .5-.5 1-.5 1.5 0 2 1.5 3.5 3.5 4 1.5 0 3-.5 4-1.5 1 0 2 0 2.5-.5 2-1 2.5-3 2-5 1-1 1.5-2.5 1.5-4z" fill="white" opacity=".25"/>
      <path d="M10.5 19.5V13l5.5-3.2 5.5 3.2v6.5L16 22.7l-5.5-3.2z" stroke="white" strokeWidth="1.3" fill="none"/>
      <path d="M10.5 13l5.5 3 5.5-3M16 16v6.7" stroke="white" strokeWidth="1.3"/>
    </svg>
  ),
  Claude: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#CC785C"/>
      <path d="M10 22l2.5-8h1.2L11 22H10zm4.5 0l2.5-8h1.2L15.7 22h-1.2zm4.5 0l2.5-8h1.2L20.2 22h-1.2z" fill="white"/>
      <path d="M11 18h10" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Grok: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#000"/>
      <path d="M9 23L13.5 9.5l3 8 3-5 3.5 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Gemini: () => (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="white" stroke="#e0e0e0" strokeWidth="1"/>
      <path d="M16 5c0 6.08-4.92 11-11 11 6.08 0 11 4.92 11 11 0-6.08 4.92-11 11-11-6.08 0-11-4.92-11-11z" fill="url(#gemg)"/>
      <defs>
        <linearGradient id="gemg" x1="5" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4"/>
          <stop offset=".5" stopColor="#9B72CB"/>
          <stop offset="1" stopColor="#D96570"/>
        </linearGradient>
      </defs>
    </svg>
  ),
}
