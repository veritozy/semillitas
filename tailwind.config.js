import flowbite from 'flowbite/plugin.js';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [flowbite],
};
