// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Фаза А1: сайт живёт на GitHub Pages как проектный репозиторий, поэтому он
// отдаётся из подпапки /liliyakozachuk/ - это задаётся через base. Боевой домен
// liliyakozachuk.ru подключаем в А5: тогда base убираем (сайт встанет в корень
// домена), а site меняем на 'https://liliyakozachuk.ru'.
export default defineConfig({
  site: 'https://zavalnayaccm-max.github.io',
  base: '/liliyakozachuk',
  vite: {
    plugins: [tailwindcss()],
  },
});
