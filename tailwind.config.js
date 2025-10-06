/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'deep-blue': '#0A2A4D',
        'sky-blue': '#87CEEB',
        'warm-orange': '#FF7F50',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate[700]'),
            '--tw-prose-headings': theme('colors.deep-blue'),
            '--tw-prose-lead': theme('colors.slate[600]'),
            '--tw-prose-links': theme('colors.warm-orange'),
            '--tw-prose-bold': theme('colors.slate[800]'),
            '--tw-prose-counters': theme('colors.deep-blue'),
            '--tw-prose-bullets': theme('colors.warm-orange'),
            '--tw-prose-hr': theme('colors.slate[200]'),
            '--tw-prose-quotes': theme('colors.slate[600]'),
            '--tw-prose-quote-borders': theme('colors.sky-blue'),
            '--tw-prose-captions': theme('colors.slate[500]'),
            '--tw-prose-code': theme('colors.indigo[600]'),
            '--tw-prose-pre-code': theme('colors.indigo[200]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[300]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700',
            },
            h1: {
               marginBottom: theme('spacing.4'),
            },
            h2: {
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.4'),
              paddingBottom: theme('spacing.2'),
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.slate.200'),
            },
            h3: {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.2'),
            },
            'ul, ol': {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
              paddingLeft: '1.5rem',
            },
            'ul': {
              listStyleType: 'none',
            },
            'ol': {
              listStyleType: 'none',
              counterReset: 'list-counter',
            },
            'ul > li, ol > li': {
              paddingLeft: '1rem',
              position: 'relative',
              marginBottom: '0.5rem',
            },
            'ul > li::before': {
              content: '"\\2713"',
              position: 'absolute',
              left: '-1.5rem',
              color: 'var(--tw-prose-bullets)',
              fontWeight: 'bold',
              width: '1.5rem',
              textAlign: 'center',
            },
            'ol > li': {
              counterIncrement: 'list-counter',
            },
            'ol > li::before': {
              content: 'counter(list-counter) "."',
              position: 'absolute',
              left: '-1.5rem',
              color: 'var(--tw-prose-counters)',
              fontWeight: 'bold',
              fontFamily: theme('fontFamily.heading').join(', '),
              width: '1.5rem',
              textAlign: 'center',
            },
            p: {
                marginBottom: theme('spacing.6'),
            },
            strong: {
                color: theme('colors.deep-blue')
            }
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}