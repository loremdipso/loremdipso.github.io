---
title: "Lithe 4: On the Shoulders of Giants"
description: "Continued exploration of Lithe, an attempt at re-writing the Svelte compiler in Rust"
slug: "lithe-4"
date: 2022-01-03T18:39:44-07:00
draft: false
taxonomies: {
  tags: ["lithe", "devlog", "performance", "svelte"]
}
---

Starting from characters and parsing that into an AST that could render a Svelte program could definitely open open possibilities for some low-level optimizations, but even just parsing a normal HTML document is not a small project, and Svelte includes JavaScript, TypeScript, Handlebars-esque blocks, CSS, and SCSS, too. Doing all that at once would be the mother of all slogs. But, luckily, I don't have to! There exist many, many pre-build alternatives. The Svelte compiler itself even uses a couple.

So here's the new plan:

1. Create a basic Rust lib and make sure I can get communication working to/from JavaScript via FFI in Node
1. Send a svelte file as a string through a DOM parser to get a basic AST
1. Convert that AST to our own custom one
    - This is where we should do any conversions we might want to the original AST, like squashing child Text nodes, splitting nodes or inserting nodes, etc.
1. Render that custom AST to a string
    - We should eventually keep track of other things, warnings, CSS, etc., but for now we're simply trying to replicate the JavaScript string
    - We should keep in mind that whatever we do here we'll need to do something very similar when rendering for SSR, so we should do as much AST manipulation as possible before this step. This should be a simple "let's render a string"

But before we really get started let's see what kind of performance we're getting out of the original compiler. I'm only looking to test execution times, so to ignore however long it takes to load everything into Node's runtime we'll simply do two runs per test: once to ensure everything's loaded, and the other we'll actually time. How long does Svelte take to compile this simple program?

```html
<span>Hello world!</span>
```

On my machine this is about `5ms`. That seems... high? I think? I haven't written a compiler before, but computers are fast and this program is absolutely tiny. Maybe there's some cost to compile anything, regardless of program size? Let's see how it scales. What if we do 10x?

```html
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
<span>Hello world!</span>
```

I should note this renders extra calls to a `space()` function by default (I assume so the resultant DOM looks nice), so to avoid this I remove all newlines during tests. Anyway, with newlines removed this takes `16ms`. Hmmm.... let's do a few more:

| Number of `span`s | Time to render |
| ----------------- | -------------- |
| 1                 | 5ms            |
| 10                | 16ms           |
| 100               | 62ms           |
| 1000              | 432ms          |

Okay, so half a second for 1000 elements isn't super great, but it's still probably okay. How often are you writing components this big anyhow? And any half-decent system would only recompile whenever you make changes. Still, fast compiles make for happy devs, so this is the mark we're trying to beat.

The only other order of business for now is the name. I did what I always do and looked up some synonyms for similar projects, in this case Svelte. After some browsing I landed on `lithe`, so that's what I'll use for now until I find some other JS project already picked that name.

<details>
  <summary>
	Click for spoilers
  </summary>
  
  <p>
	Lithe is far from done, but it can easily render the example programs above. In release mode, 1000 <code>span</code>s takes just <code>5ms</code> to run (!!!), most of which is simply the initial DOM parsing provided by an external library. Time is lost initializing FFI and shuttling strings to/from Node, but even so it turns out Rust is really really fast (who knew?). As we add more features lithe can only slow down, but for now I'll take this as a sign that this work might actually be useful.
  </p>
</details>
