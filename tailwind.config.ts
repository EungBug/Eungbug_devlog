import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    fontFamily: {
      Pretendard: ['Pretendard']
    },
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      gray: colors.gray,
      main: '#6941C6'
    }
  },
  plugins: []
};
export default config;
