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
      main: '#75C2F6',
      til: '#A2C579',
      tag: '#FF8080', // 태그 기본 색상
      category: '#FDC725',
      web: '#F99417',
      fe: '#3D30A2'
    }
  },
  safelist: ['bg-main', 'bg-til', 'bg-tag', 'bg-category', 'bg-web', 'bg-fe'],
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
