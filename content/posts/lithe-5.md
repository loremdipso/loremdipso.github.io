---
title: "Lithe 5: Optimize for the minifier"
slug: "lithe-5"
date: 2022-01-08T10:49:55-07:00
draft: false
tags: ["lithe", "devlog"]
---

[halfnelson](https://github.com/halfnelson) did a lovely [investigation of how large Svelte projects scale](https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md). I'm not looking to rehash that per se, but I am interested in how well the current Svelte compiler's output gets minified.

For this investigation I'll be pulling as many `.svelte` files as I can. Let's use the [Autopilot](https://copilot.github.com/) strategy and pull from GitHub repos with permissive enough licenses.

Even doing this was a bit of a project. I figured this might come up again, so I made the code clean enough that I wasn't embarrassed to release it. You can see what I came up with at the [github repo](https://github.com/loremdipso/github_batch_download). I used Rust with the lovely [octocrab](https://docs.rs/octocrab/latest/octocrab/) crate to handle the Github API, [git2](https://docs.rs/git2/latest/git2/) to handle downloading the repositories, and a little bit of [tokio](https://github.com/tokio-rs/tokio) for async and multi-threading. I'm very happy with the result, though I did run into rate-limiting for the GitHub API fairly quickly even with a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Even so, I was able to come out of that with 220 repos without much trouble, from which I extracted 20MB of raw `.svelte` files. Once I removed the empties and the duplicates I was left with a respectable `18MB` worth of files. I ran those files through the svelte compiler, skipping any that wouldn't compile. I didn't expect to run this too often, so I ended up using ruby to call a shell script that told node to compile a particular file with some options, which I ran over every file twice: once with minification and once without. While I ended up with a workflow that took several minutes to run it was the fastest for me to write.

After a cuppa I had this:

| Type                | Total size (KB) |
| ------------------- | --------------- |
| raw `.svelte` files | 18420           |
| compiled            | 23188           |
| minified            | 15764           |
| gzipped             | 10836           |

Very interestingly there were two files whose minified size was actually slightly larger than the original. This makes me think I could find a better minifier than [minify](https://www.npmjs.com/package/minify). Even after playing with the available options, going so far as to enable some unsafe operations, I still couldn't get that number down. I might try another minifier entirely ([node-minify](https://www.npmjs.com/package/node-minify) looks cool), but for now I'll keep what I've got.

I think that's enough for now. Once I get a compiler going I can use this to measure just how well my output fairs against Svelte's, both raw and after minification. I believe there's some room for improvement if we try and output code that's easy for the minifier to minify. For example, I've noticed the Svelte compiler outputs something sort of like this for detaching a component (heavily edited for simplicity):

```js
import { detach } from "./svelte";

let a;
let b;
let c;

function fn(do_detach) {
	if (do_detach) detach(a);
	if (do_detach) detach(b);
	if (do_detach) detach(c);
}
```

Which get minified to:

```js
import { detach } from "./svelte";
let a, b, c;
function fn(t) {
	t && detach(a), t && detach(b), t && detach(c);
}
```

If, instead, the source was:

```js
import { detach } from "./svelte";

let a;
let b;
let c;

function fn(do_detach) {
	if (do_detach) {
		detach(a);
		detach(b);
		detach(c);
	}
}
```

Which, in this example at least, is functionally equivalent. I haven't dug into Svelte enough to know if this is always going to be a safe transformation. In any case, this can be minified to:

```js
import { detach } from "./svelte";
let a, b, c;
function fn(t) {
	t && (detach(a), detach(b), detach(c));
}
```

A whole 4 characters saved! I know, I know, it doesn't seem like much, but that's basically free and is a function of how many variables your svelte program has. One last consideration is aliasing. We could, for example, imagine a minifier smart enough to output this:

```js
import { detach as d } from "./svelte";
let a, b, c;
function fn(t) {
	t && (d(a), d(b), d(c));
}
```

We could also eschew aliasing and just have a separate svelte library that only has these minified functions to avoid the "as x" bit:

```js
import { d } from "./svelte-mini";
let a, b, c;
function fn(t) {
	t && (d(a), d(b), d(c));
}
```

The downside of some of these optimizations, of course, is that it becomes harder and harder to debug in production. But if we're already at the point of minifying I say it's [no holds barred](<https://en.wikipedia.org/wiki/No_Holds_Barred_(1989_film)>).
