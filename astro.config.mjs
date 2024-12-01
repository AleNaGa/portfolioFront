// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: 'server', // Salida para aplicaciones con contenido dinámico
  adapter: node({
    mode: 'standalone', // Configuración ideal para Azure
  }),
  integrations: [tailwind(), react()],
  
});