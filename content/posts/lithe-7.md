---
title: "Lithe 7 - Apples to Apples"
date: 2022-01-15T12:46:47-07:00
draft: false
tags: ["lithe", "performance", "svelte"]
---

### Confession time

My performance testing methodology so far has been extremely flawed. It serves mostly as an indicator for how rigorous performance testing might go when I eventually get around to it. Which I think is reasonable, but it doesn't have to be quite so unfair to Svelte. Svelte is doing quite a lot more than Lithe, so I really shouldn't be comparing them side by side. It'd be good to re-run some earlier tests, but with the JavaScript equivalent of what Lithe is doing. Which, let's be honest, is mostly just parsing the HTML into an AST.

### Disambiguation

It's good to have names for things, so let's call this super-basic JavaScript version [LitheJS](https://en.wikipedia.org/wiki/Tongue-in-cheek).

### The specifics

Lithe has been using the [html_parser crate](https://crates.io/crates/html_parser). For LitheJS I'll use the very popular [Fast HTML Parser](https://www.npmjs.com/package/node-html-parser). It's got 2.3M downloads a week, and it's even got Fast in the name. If anything's going to give Lithe a run for its money it's going to be that.

### The methodology

We'll do the same as before: super simple HTML files, just N `<span>Hello world!</span>` elements. No nesting, no scripting, and I'm not even going to ask LitheJS to produce any output or perform any transformations. I just want to know: how long does it take to parse the HTML into an AST, and how does that compare with Lithe?

My thought is if Lithe can still beat out LitheJS, even after giving it all these advantages, then we're on the right track.

Notably, though, I'm not going to bother improving any of the rest of my methodology just yet. I'm not averaging multiple runs, I'm not going to nest HTML elements, I'm measuring performance directly in Node, all results are in ms, etc.

### The results

| Number of `span`s | Svelte                                                          | Lithe - native | Lithe - WASM | LitheJS |
| ----------------- | --------------------------------------------------------------- | -------------- | ------------ | ------- |
| 1                 | 7ms                                                             | 3ms            | 1ms          | 1ms     |
| 10                | 10ms                                                            | 1ms            | 1ms          | 1ms     |
| 100               | 108ms                                                           | 4ms            | 3ms          | 1ms     |
| 1000              | 348ms                                                           | 6ms            | 9ms          | 3ms     |
| 10,000            | N/A ([SO](https://en.wikipedia.org/wiki/Stack_buffer_overflow)) | 53ms           | 81ms         | 125ms   |

Wow, that Fast HTML Parser really is fast! At least until you get into really big files. But let's dig into that a bit more. Right now I'm just parsing these file contents and throwing away the result:

```ts
function simple_html_parser(contents: String) {
	const root = parse(contents);
}
```

I haven't read the source, but I suppose it's possible that Fast HTML Parser is being super [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) and not fully parsing the HTML string it was given until it has to. Let's make it work a little harder:

```ts
function simple_html_parser(contents: String) {
	const root = parse(contents);
	const result = contents.toString();
	return result;
}
```

Let's re-run those last couple of tests. I included a range here since the results were highly variable:

| Number of `span`s | LitheJS    |
| ----------------- | ---------- |
| 1000              | 8ms-18ms   |
| 10,000            | 58ms-140ms |

Alright, so it's a little bit slower, but not by that much. I'm guessing there's no lazy evaluation going on here: Fast HTML Parser is just fast. For fun I added timing inside the native version of Lithe just around the HTML parsing bit. And if we get rid of the `toString()` call in our `simple_html_parser` we can compare just the DOM parsing.

| Number of `span`s | LitheJS (just HTML parsing) | Lithe - native (just HTML parsing) |
| ----------------- | --------------------------- | ---------------------------------- |
| 100               | 1ms                         | 0ms                                |
| 1000              | 4ms-13ms                    | 1ms                                |
| 10,000            | 41ms-142ms                  | 18ms-27ms                          |

And with that we're finally comparing like with like. And the results look how I'd expect. If we take out the FFI overhead and only parse the HTML then the Rust version is looking to be a bit faster, especially for larger files.
