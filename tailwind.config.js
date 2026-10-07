/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
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
        heading: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-display)', 'Georgia', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'deep-blue': '#0A2A4D',
        'sky-blue': '#87CEEB',
        'warm-orange': '#FF7F50',
        ink: {
          DEFAULT: '#0A2A4D',
          950: '#061A30',
          900: '#0A2A4D',
          700: '#2B4462',
          500: '#5B6B7E',
          400: '#8592A1',
        },
        paper: {
          DEFAULT: '#F7F4EE',
          50: '#FCFBF8',
          100: '#F7F4EE',
          200: '#EFEAE0',
          300: '#E4DDD0',
          400: '#D3CAB9',
        },
        ember: {
          DEFAULT: '#D2601A',
          50: '#FDF3EC',
          100: '#FAE3D2',
          500: '#D2601A',
          600: '#B44F12',
        },
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
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-dot": {
          "0%": { transform: "scale(1)", opacity: 0.6 },
          "100%": { transform: "scale(2.6)", opacity: 0 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 40s linear infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.700'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-lead': theme('colors.ink.500'),
            '--tw-prose-links': theme('colors.ink.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.ember.DEFAULT'),
            '--tw-prose-bullets': theme('colors.ember.DEFAULT'),
            '--tw-prose-hr': 'rgb(10 42 77 / 0.1)',
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.ember.DEFAULT'),
            '--tw-prose-captions': theme('colors.ink.500'),
            '--tw-prose-code': theme('colors.ink.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.paper.200'),
            '--tw-prose-pre-bg': theme('colors.ink.950'),
            '--tw-prose-th-borders': 'rgb(10 42 77 / 0.15)',
            '--tw-prose-td-borders': 'rgb(10 42 77 / 0.08)',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '400',
              letterSpacing: '-0.02em',
              fontOpticalSizing: 'auto',
            },
            'h5, h6': {
              fontWeight: '600',
            },
            h1: {
               marginBottom: theme('spacing.4'),
            },
            h2: {
              marginTop: '1.9em',
              marginBottom: '0.6em',
              lineHeight: '1.15',
            },
            h3: {
              marginTop: '1.6em',
              marginBottom: '0.5em',
              lineHeight: '1.25',
            },
            'h2 strong, h3 strong, h4 strong': {
              fontWeight: 'inherit',
            },
            a: {
              fontWeight: '500',
              textDecorationLine: 'underline',
              textDecorationColor: 'rgb(210 96 26 / 0.45)',
              textDecorationThickness: '1px',
              textUnderlineOffset: '4px',
              transition: 'color .15s, text-decoration-color .15s',
            },
            'a:hover': {
              color: theme('colors.ember.600'),
              textDecorationColor: theme('colors.ember.DEFAULT'),
            },
            blockquote: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontStyle: 'italic',
              fontWeight: '400',
              borderLeftWidth: '2px',
            },
            'blockquote p:first-of-type::before, blockquote p:last-of-type::after': {
              content: 'none',
            },
            code: {
              backgroundColor: theme('colors.paper.200'),
              borderRadius: theme('borderRadius.md'),
              padding: '0.15em 0.4em',
              fontWeight: '500',
            },
            'code::before, code::after': {
              content: 'none',
            },
            table: {
              fontVariantNumeric: 'tabular-nums',
            },
            'thead th': {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.75em',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: theme('colors.ink.500'),
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
              content: '""',
              position: 'absolute',
              left: '-0.85rem',
              top: '0.8em',
              width: '0.7rem',
              height: '1px',
              backgroundColor: 'var(--tw-prose-bullets)',
            },
            'ol > li': {
              counterIncrement: 'list-counter',
            },
            'ol > li::before': {
              content: 'counter(list-counter, decimal-leading-zero)',
              position: 'absolute',
              left: '-1.6rem',
              color: 'var(--tw-prose-counters)',
              fontFamily: theme('fontFamily.display').join(', '),
              fontStyle: 'italic',
              fontWeight: '400',
              width: '1.9rem',
              textAlign: 'left',
            },
            p: {
                marginBottom: theme('spacing.6'),
            },
            strong: {
                color: 'var(--tw-prose-bold)',
                fontWeight: '600',
            }
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}