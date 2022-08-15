---
title: "Lithe 3: A Rewrite"
slug: "lithe-3"
date: 2022-01-03T17:07:07-07:00
draft: false
taxonomies: {
	tags: ["lithe", "devlog", "mini", "svelte"]
}
---

What if I just copied the Svelte compiler, written in TypeScript, changed all of the file extensions from `.ts` to `.rs`, and fixed all the bugs? It'd be a slog, sure, but at the end of the day I'd have a compiler that was very nearly the same, but presumably more performant.

This attempt I gave a real try, spending maybe three nights just chugging away. What I got was just more and more errors, which was fairly disheartening. I also realized just how different Rust is, and that a 1-to-1 rewrite would result in something that wouldn't be as ideal as it could be. For example, take this very simple TypeScript class:

```ts
class Node extends BaseNode {
	name: String? = null,
	children: Node[] = [],
}
```

The equivalent Rust struct might look like:

```rust
struct Node {
	base: BaseNode,
	name: Option<String>,
	children: Vec<Node>
}
```

I don't think that's great. What fields belong on Node? Which belong on BaseNode? Plus TypeScript's got a garbage collector, so for parity any `T` should probably be wrapped in an [`Rc<T>`](https://doc.rust-lang.org/std/rc/struct.Rc.html). Plus everything's mutable, so we'd want to wrap that in a [`RefCell<T>`](https://doc.rust-lang.org/std/cell/struct.RefCell.html).

```rust
struct Node {
	base: BaseNode,
	name: Option<String>,
	children: Vec<Rc<RefCell<Node>>>
}
```

While probably fine, this just looks it'd like a pain to work with. I think we can do better. These nodes don't really reference each other, so we don't actually need an `Rc`, and without that we wouldn't need a `RefCell`. Also I'm up to `1337` errors, so I'm pretty happy ending this attempt here.
