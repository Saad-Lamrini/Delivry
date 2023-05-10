/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    ,
    './screens/HomeScreen.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
