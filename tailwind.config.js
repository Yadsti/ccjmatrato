/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            'concejo-verde-principal': 'rgb(6, 138, 79)',
            'concejo-verde-claro': 'rgb(210, 226, 139)',
            'concejo-azul-principal': 'rgb(0, 175, 239)',
            'concejo-amarillo': 'rgb(255, 242, 18)',
            'concejo-negro': 'rgb(55, 52, 53)',
            'concejo-verde-suave': 'rgb(220, 240, 210)', // Nuevo color más suave
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        },
    },
    plugins: [
        require('@midudev/tailwind-animations')
    ],
};