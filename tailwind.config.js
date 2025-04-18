/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        // Primary brand colors
        'primary': '#087bbf', // Deep Blue
        'accent': '#FFFFFF', // Bright White
        'secondary': '#b9a15e', // Gold/Yellow
        'gray': {
          100: '#F9F9F9',
          200: '#F1F1F1',
          300: '#E1E1E1',
          400: '#CFCFCF',
          500: '#B1B1B1',
          600: '#8E8E8E',
          700: '#6E6E6E',
          800: '#4B4B4B',
          900: '#2C2C2C',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'Open Sans', 'Arial', 'sans-serif'],
        'body': ['Open Sans', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
