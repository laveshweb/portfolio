/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ink:    '#1a2332',
        mist:   '#f2f1ef',
        slate:  '#556373',
        steel:  '#6b7a8d',
        fog:    '#9ba6b4',
        border: '#dde1e7',
        blue:   '#3d5a80',
      },
    },
  },
  plugins: [],
}
