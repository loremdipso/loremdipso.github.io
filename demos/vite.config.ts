import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import demos from "./demos.json";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [
		svelte(),
		cssInjectedByJsPlugin({
			jsAssetsFilterFunction: () => {
				return true;
			},
		}),
	],

	cacheDir: "temp",

	build: {
		outDir: "../static/demos",
		sourcemap: command === "serve",
		minify: "esbuild",
		emptyOutDir: false, // just in case
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
