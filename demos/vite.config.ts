import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { demos } from "./demos";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [svelte()],

	cacheDir: "temp",

	build: {
		outDir: "../static/demos",
		sourcemap: command === "serve",
		minify: "esbuild",
		emptyOutDir: true,
		copyPublicDir: false,
		lib: {
			entry: demos,
			formats: ["es"],
		},
		ssr: false,
		ssrManifest: false,
		reportCompressedSize: true,
	},
}));
