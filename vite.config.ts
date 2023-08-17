import { sveltekit } from '@sveltejs/kit/vite';
import { dbUpdater } from './updateDbPluginVite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), dbUpdater]
});
