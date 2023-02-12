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

## Future work

It's a bit unfortunate that to make a new demo I need to:

1.  Modify an object
1.  Create a shell `.ts` file
1.  Create the actual demo

It'd be a bit cleaner to do away with the `.ts` file entirely, or generate it during build time from a template. But I'll save that work for another day.
