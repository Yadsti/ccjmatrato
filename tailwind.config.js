/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores de la Institución
        'primary': '#ffffff',                       // Blanco (Funciona bien)
        'secondary': 'rgb(6, 138, 79)',             // Verde Oscuro
        'tertiary': 'rgb(255, 242, 18)',            // Amarillo
        'quaternary': 'rgb(210, 226, 139)',         // Verde Claro
        'quinary': 'rgb(55, 52, 53)',               // Gris Oscuro (Seriedad)
        'senary': 'rgb(188, 230, 250)',             // Azul Claro
        'septenary': 'rgb(0, 175, 239)',            // Azul Oscuro (Ríos, Usado para active/hover)
      }
    },
  },
  plugins: [],
};