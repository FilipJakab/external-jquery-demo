import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {viteStaticCopy} from "vite-plugin-static-copy"

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{src: "./node_modules/jquery/dist/jquery.min.js", dest: "./js/vendor"},
				{src: "./node_modules/jquery-ui-dist/jquery-ui.min.js", dest: "./js/vendor"},
				{src: "./node_modules/jquery-ui-dist/jquery-ui.min.css", dest: "./css/vendor"},
			]
		})
	],
	build: {
		rollupOptions: {
			external: ["jquery"],
			output: {
				globals: {
					jquery: "$",
					// jQuery: "$"
				}
			}
		}
	}
});
