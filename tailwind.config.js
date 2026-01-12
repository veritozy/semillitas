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
        sans: ['Inter', 'sans-serif'], // ← esto reemplaza la fuente predeterminada
      },
    },
  },
  plugins: [flowbite],
};
