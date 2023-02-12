---
title: "Adding Interactivity"
description: "Static sites are cool and all, but what about interactive demos???"
slug: adding-interactivity
date: 2022-12-24
draft: false
taxonomies: { tags: ["mini", "svelte", "software"] }
---

## Looking For Problems To Solve

[Zola](https://www.getzola.org/) is wonderful. It builds quickly, it's so configurable, but it is (by design) not well suited for interactivity. I hadn't thought I wanted that until I saw some on [Amos's site](https://fasterthanli.me/). He ended up using `iframes` to manage that integration, which is a perfectly acceptable solution. But it did make me wonder: can we accomplish the same result without all of that nasty ugly `HTML`? Can we just write some clean JS and call it a day?

Let's find out.

## Creating the Bundle

I hear that [Svelte](https://svelte.dev/) is great at integrating into existing applications. You just give it some home in the `DOM` as an argument and away it goes:

```ts
import Counter from "./demos/Counter.svelte";

const app = new Counter({
	target: document.getElementById("counter"),
});

export default app;
```

Let's make the classic simple counter for our test:

```html
<script lang="ts">
	let count: number = 0;
	const increment = () => {
		count += 1;
	};
</script>

<main>
	<button on:click="{increment}">Clicked {count} times</button>
</main>
```

We're using [Vite](https://vitejs.dev/) to build, and we'd like a separate JS bundle for each demo. As of Vite 3.2 we can use multiple lib entry points, like so:

```ts
export default defineConfig(({ command }) => ({
	plugins: [svelte()],

	cacheDir: "temp",

	build: {
		// Build to a common location accessible to Zola
		outDir: "../static/demos",

		sourcemap: command === "serve",
		minify: "esbuild",
		lib: {
			entry: {
				counter: "./src/counter.ts",
			},
			formats: ["es"],
		},
	},
}));
```

While we're at it I'd like to have a test page to test out some of these demos, and that list of entries would be useful there, so let's extract that out:

```ts
export const demos = {
	counter: "./src/counter.ts",
};

export default defineConfig(({ command }) => ({
	// ...cut
	build: {
		// ...cut
		lib: {
			entry: {
				counter: "./src/counter.ts",
			},
		},
	},
}));
```

## Embedding the Bundle

On the Zola side of things we can use a [shortcode](https://www.getzola.org/documentation/content/shortcodes/) to do our dirty work. So if we say our shortcode lives in `demo.html` and looks like this:

```html
<div class="demo">
    {%- set js_path = "/demos/" ~ key ~ ".js" -%}
    {%- set js_path = get_url(path=js_path, trailing_slash=false, cachebust=true) -%}
    {%- set js_path = js_path | replace(from=config.base_url, to="") -%}

    <script src="{% js_path %} type="module" crossorigin="anonymous"></script>
    <div id="{{ key }}"></div>
</div>
```

Then to use in markdown we could do something like:

```md
Will this work? Let's see: {{/* demo(key="counter") */}}
```

Will this work? Let's see: {{ demo(key="counter") }}

Et voilà! 🥳

## Automation

It's a bit unfortunate that to make a new demo I need to manually:

1.  Modify an object
1.  Create a shell `.ts` file
1.  Create the actual demo

It'd be a bit cleaner to do away with the `.ts` file entirely, or else generate it during build time from a template, but it's a bit easier to just automate these steps with a script so let's just do that for now.

## Styles

The way Svelte handles styles is [quite interesting](https://svelte.dev/tutorial/styling) (sort of reminiscent of Angular [component styles](https://angular.io/guide/component-styles) but without any shadow DOM nonsense) but for our purposes are not ideal. We either need to export a separate `css` file per entrypoint and explicitly include it with our shortcode or else pretend it's [1994](https://levelup.gitconnected.com/a-brief-history-of-css-in-js-how-we-got-here-and-where-were-going-ea6261c19f04) and use [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS). OR we lean on the lovely [vite-plugin-css-injected-by-js](https://www.npmjs.com/package/vite-plugin-css-injected-by-js) package to do that for us. We simply need to add it to our vite config like so:

```ts
export default defineConfig(({ command }) => ({
	plugins: [svelte(), cssInjectedByJsPlugin()],
	// ...cut
});
```

And it'll muck around in our JS bundle and have it insert styles directly into the page's header. Generally not a practice I like, but for our single-file demos this is just about perfect. I say just about since by default in a multi-output project this plugin just sort of picks one. To remedy this we simply need to provide a `jsAssetsFilterFunction` and we'll just have it return true:

```ts
cssInjectedByJsPlugin({
	jsAssetsFilterFunction: () => {
		return true;
	},
}),
```

That's it for now, hope you enjoyed. Come back soon!
