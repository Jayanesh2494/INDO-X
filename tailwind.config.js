/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1', // Indigo
          dark: '#4F46E5',
          light: '#818CF8',
        },
        coral: {
          DEFAULT: '#F43F5E', // Rose
          dark: '#E11D48',
          light: '#FB7185',
        },
        navy: {
          DEFAULT: '#1E293B', // Slate
          dark: '#0F172A',
          light: '#334155',
        },
        mint: {
          DEFAULT: '#10B981', // Emerald
          dark: '#059669',
          light: '#34D399',
        },
        background: {
          dark: '#0A0F1E',
          DEFAULT: '#0F1729',
          light: '#1E293B',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};