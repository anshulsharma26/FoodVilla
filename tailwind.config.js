/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './index.html'],
    theme: {
      extend: {
        gridTemplateColumns: {
          'fluid': 'repeat(auto-fit, minmax(15rem, 1fr))',
        }
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  };
  