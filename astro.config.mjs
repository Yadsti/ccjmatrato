import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Debe estar aquí

export default defineConfig({
  integrations: [tailwind()], // <-- Y aquí
});