import type { Config } from "tailwindcss";

export default {
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2EBB77",
        secondary: "#B479D9",
      },
    },
  },
} satisfies Partial<Config>;
