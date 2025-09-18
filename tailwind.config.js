/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#47b2e4', // accent-color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        
        // Custom project colors
        'brand': {
          'default': '#444444',      // default-color
          'heading': '#37517e',      // heading-color  
          'accent': '#47b2e4',       // accent-color
          'surface': '#ffffff',      // surface-color
          'contrast': '#ffffff',     // contrast-color
          'background': '#ffffff',   // background-color
        },
        
        // Navigation colors
        'nav': {
          'default': '#ffffff',      // nav-color
          'hover': '#47b2e4',        // nav-hover-color
          'mobile-bg': '#ffffff',    // nav-mobile-background-color
          'dropdown-bg': '#dee1f0ff',  // nav-dropdown-background-color
          'dropdown': '#444444',     // nav-dropdown-color
          'dropdown-hover': '#47b2e4', // nav-dropdown-hover-color
        },
        
        // Background variants
        'bg-light': '#f5f6f8',
        'bg-dark': '#182f57ff',
        'surface-dark': '#4668a2',
        
      },
      
      fontFamily: {
        'default': ['"Open Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', '"Liberation Sans"', 'sans-serif'],
        'heading': ['"Jost"', 'sans-serif'],
        'nav': ['"Poppins"', 'sans-serif'],
      },
      
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};
