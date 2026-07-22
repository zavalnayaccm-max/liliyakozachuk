// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Боевой домен (GitHub Pages со своим доменом). base не нужен - сайт в корне домена.
  site: 'https://liliyakozachuk.ru',
  vite: {
    plugins: [tailwindcss()],
  },
});
