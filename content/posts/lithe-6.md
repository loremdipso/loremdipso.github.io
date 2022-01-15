---
title: "Lithe 6: What about WASM?"
slug: "lithe-6"
date: 2022-01-13
draft: false
tags: ["lithe", "devlog"]
---

### Excuses

I know I haven't talked much about the state of Lithe except to mention how fast it is while run natively, but that's only because Lithe is still very very bare bones. It parses the contents of svelte files into an HTML AST, which it then transforms into a more Svelte-y AST, which it then runs through to generate the final output. And it only works for the simplest of svelte files.

### Thinking ahead

But before I write more about the internals of Lithe or implement any new features, I thought it'd be a fun diversion to think ahead to when this is a smash success and absolutely everyone wants it. How are we going to package and release it? The obvious (and my initial) answer was as a native extension that we talk to via FFI. But how will that be received? JavaScript developers like fast build times, even at the very start. Projects like [Snowpack](https://www.snowpack.dev/) are successful exactly because of that. No frontend engineer wants to wait for the latest compiler to be downloaded and build on their local machine, especially if that requires the Rust toolchain.

### An aside

I never knew, but apparently tsc is, itself, written in TypeScript. Which really calls into question this whole endeavor. If something as successful as tsc (which I never felt was all that slow) is written in TypeScript, why can't Svelte? The move to Rust has never been a sure one, and this might just be another reason against. Perhaps the performance limitations I'm trying to solve are more algorithmic than they are technical.

### What's WASM again?

In any case, assuming Lithe is alive and well and we want to release it to impatient developers, we could maybe release native binaries. This seems (to me, anyway) to be something of a hassle, plus your consumers need to have the utmost trust in you. So what about [WASM](https://webassembly.org/)? It's cross-platform, I assume Node can run it, and I can only imagine that it's cutoff from anything dangerous like network or file IO by default.

### How to

I set to work slightly modifying Lithe to output a WASM module rather than a native Rust lib. There were only two non-obvious changes I had to make. First, I needed to set my WASM's `package.json`'s `type` to be `module` to get it to load correctly:

```js
{
  "name": "lithe",
  "version": "0.1.0",
  "files": [
    "lithe_bg.wasm",
    "lithe.js",
    "lithe_bg.js",
    "lithe.d.ts"
  ],
  "module": "lithe.js",
  "types": "lithe.d.ts",
  "sideEffects": false
  "type": "module", // <- new
}
```

I also had to refrain from using [`std::time`](https://doc.rust-lang.org/std/time/index.html), though luckily I was only using that for detailed performance tracing. With those two small changes done it just... worked. I am now able to import my compiler with a wondrously simple:

```ts
import { wasm_compile } from "./wasm/lithe.js";
```

Wow. And the timings were better than I could have hoped: just `4ms` for 1000 `span`'s, which is just as fast as native!!!

I checked my enthusiasm, and then I checked the output to make sure it was actually doing what it should (it was). Then to make sure I was actually doing the timing correctly (I was) I tried 10,000 `span`'s, and that took only `42ms`. Svelte, for comparison, had long since overflowed its stack.

I should note that I don't actually think WASM is just as fast as native. Maybe it is in some instances, but the times involved here are so small and the testing itself so basic that I can't confidently prove anything. But what I can do is predict that, when all is said and done, that the WASM version of Lithe is probably going to run about as fast as the native version most of the time. But even if it's 20x slower that's still far faster than Svelte's TypeScript compiler and that's good enough for me.

### Conclusion

It might be too early to tell, but just from this it's looking like releasing this compiler via WASM might be totally viable. And the icing on the cake? The current version of Lithe, when compiled to WASM, weighs in at a mere `268K`. `268K`! That's even smaller than a native [hello world in Rust](https://stackoverflow.com/questions/29008127/why-are-rust-executables-so-huge). Color me impressed.

<details>
  <summary>
	Disclaimer
  </summary>
  
  <p>
	I did have to enable node's <code>--experimental-wasm-modules</code> flag to get my WASM binary to even load. I'm hoping that flag goes away and WASM is supported by default, but I suppose there's a chance WASM goes the <a href="https://www.zdnet.com/article/flash-is-dead-long-live-html5/">way of flash</a>.
  </p>
</details>
