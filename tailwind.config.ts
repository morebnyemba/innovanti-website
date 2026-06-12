import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark:    '#0a1324',
          DEFAULT: '#15213f',
          deep:    '#0e1830',
          mid:     '#1f2c4a',
          muted:   '#25304f',
        },
        brand: {
          DEFAULT: '#C8102E',
          hover:   '#a50d26',
          vivid:   '#e01435',
          light:   '#ff7f8d',
          pink:    '#ff6b7a',
        },
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        sans:    ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1180px' },
      backgroundImage: {
        'dot-navy': 'radial-gradient(circle at 1px 1px, rgba(21,33,63,0.05) 1px, transparent 0)',
        'diag-navy': 'repeating-linear-gradient(135deg, rgba(21,33,63,0.025) 0 1px, transparent 1px 16px)',
      },
      backgroundSize: {
        'dot-sm': '28px 28px',
        'dot-md': '62px 62px',
      },
    },
  },
  plugins: [],
}

export default config
