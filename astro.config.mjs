import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

/**
 * @see {@link https://astro.build/config|Astro Config}
 */
export default defineConfig({
	integrations: [
    react()
  ]
});
