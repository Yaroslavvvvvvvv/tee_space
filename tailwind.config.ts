import type { Config } from 'tailwindcss'

export default {
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          dark: '#26a266',
          DEFAULT: '#2EBB77',
          light: '#35d085',
        },
        secondary: {
          dark: '#a268c7',
          DEFAULT: '#B479D9',
          light: '#c487ea',
        },
      },
    },
  },
} satisfies Partial<Config>
