import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://neemias.org',
	integrations: [mdx(), sitemap()],
});
// https://docs.astro.build/en/guides/internationalization/
import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});