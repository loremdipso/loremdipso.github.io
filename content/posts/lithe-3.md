---
title: "Lithe 3: A Rewrite"
slug: "lithe-3"
date: 2022-01-03T13:07:07-07:00
draft: false
tags: ["lithe"]
---

What if I just copied the Svelte compiler, written in TypeScript, changed all of the file extensions from `.ts` to `.rs`, and fix all the bugs? It'd be a slog, sure, but at the end of the day I'd have a compiler that was very nearly the same, but presumably more performant.

This attempt I gave a real try, spending maybe three nights just chugging away. What I got was just more and more errors, which was fairly disheartening. I also got realized just how different Rust is, and that a 1-to-1 rewrite would result in something that wasn't ideal. For example, take this very simple TypeScript class:

```ts
class Node extends BaseNode {
	name: String? = null,
	children: Node[] = [],
}
```

The equivalent TypeScript struct might look like:

```rust
struct Node {
	base: BaseNode,
	name: Option<String>,
	children: Vec<Node>
}
```

The base thing isn't great, but also TypeScript's got a garbage collector, so any `T` should probably be wrapped in an `Rc<RefCell<T>>`:

```rust
struct Node {
	base: BaseNode,
	name: Option<String>,
	children: Vec<Rec<RefCell<Node>>>
}
```

While probably fine, it looks like a pain to work with, and I think we can do better, since these nodes don't really reference each other. Also I'm up to 1337 errors, and I'm pretty happy leaving that number alone.
