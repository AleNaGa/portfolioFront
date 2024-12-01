// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: 'static', // Genera archivos estáticos en lugar de salida dinámica
  adapter: node({
    mode: 'standalone', // Si aún usas Node.js en Azure
  }),
  integrations: [tailwind(), react()],
});