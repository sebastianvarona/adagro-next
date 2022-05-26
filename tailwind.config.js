module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
