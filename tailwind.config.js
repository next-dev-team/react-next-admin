/** @type {import('tailwindcss/types').Config} */

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**.tsx',
    './src/pages/**.tsx',
    './src/layouts/**.tsx',
    './src/app.tsx',
    './src/global.tsx',
  ],
  theme: {
    extend: {
      // if modify this please update in folder/constants/theme.ts too
      colors: {
        title: {
          50: '#d1d5db',
          100: '#9ca3af',
          200: '#6b7280',
          300: '#707a8a',
          400: '#4b5563',
          500: '#374151',
          600: '#181a20',
          700: '#1e2329',
          800: '#111827',
          900: '#000',
        },
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#ffd12f',
          400: '#facc15',
          500: '#eab308',
          600: '#1890ff',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
};
