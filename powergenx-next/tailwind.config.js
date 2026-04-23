/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // POWERGENX Brand Colors
        'power-black': '#050505',
        'power-dark': '#101010',
        'power-silver': '#C8CDD2',
        'power-white': '#FFFFFF',
        'power-electric-blue': '#007BFF',
        'power-royal-blue': '#0B3D91',
        'power-cyan-glow': '#00D8FF',
        'power-orange-cta': '#FF6A00',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 216, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 216, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}