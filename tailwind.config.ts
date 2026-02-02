import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontSize: {
        'display-xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
        'display': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'heading': ['1.5rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.65' }],
        'body': ['1.0625rem', { lineHeight: '1.65' }],
        'small': ['0.9375rem', { lineHeight: '1.55' }],
      },
      letterSpacing: {
        'display': '-0.03em',
        'tight': '-0.02em',
        'wide': '0.02em',
        'wider': '0.05em',
        'widest': '0.2em',
      },
      maxWidth: {
        'prose': '65ch',
        'content': '1280px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'medium': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'large': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'xl': '0 20px 50px -12px rgb(0 0 0 / 0.15)',
        // Elevated shadow for cards/CTAs on hover - use for interactive lift effects
        'elevated': '0 12px 28px -8px rgb(0 0 0 / 0.12), 0 8px 16px -8px rgb(0 0 0 / 0.08)',
        // Glow shadow for primary CTAs - subtle luminous effect
        'glow': '0 0 20px -5px rgb(0 0 0 / 0.1), 0 8px 24px -8px rgb(0 0 0 / 0.15)',
      },
      borderRadius: {
        // Standardized radius tokens
        'card': '1rem',      // rounded-2xl equivalent for cards
        'button': '9999px',  // rounded-full for buttons
        'input': '0.75rem',  // rounded-xl for inputs
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}
export default config
