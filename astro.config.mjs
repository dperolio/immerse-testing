import { defineConfig } from 'astro/config';
import firebase from 'astro-firebase';
import react from '@astrojs/react';

/**
 * @see {@link https://astro.build/config|Astro Config}
 */
export default defineConfig({
  site: 'https://immerse-test.web.app',
	integrations: [
    react()
  ],
  adapter: firebase()
});
