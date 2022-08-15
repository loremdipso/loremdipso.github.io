---
title: "Lithe 1: The Motivation"
slug: "lithe-1"
date: 2022-01-03T16:12:04-07:00
draft: false
taxonomies: {
    tags: ["lithe", "devlog", "svelte"]
}
---

Svelte is like Rust for me in that I had heard good things for years before I even gave it a try.

Svelte is like Rust for me in that I loved it immediately.

It's really very simple to write in, the basic idea is engaging, and after trying it I wanted so badly for it to succeed. For context I have professional experience with vanilla JavaScript, React, and Angular. After transitioning a small app from Angular to Svelte, here were my takeaways:

1. It's very much like Vue
    - Single file structure
    - Framework provides a lot out of the box
1. It's got a better pattern for reactive programming than React
    - I'm guessing Svelte is a large part of the motivation behind React's new [React without memo](https://www.youtube.com/watch?v=lGEMwh32soc) project
1. It's had five years to become popular, and yet it has not.
    - I can only guess at this, but I'd say Svelte was simply late to the game. So much of the web is written using other frameworks, and no one wants to re-write it all
    - Initially Svelte touted itself as providing all the functionality you'd expect from a big JS framework with way less code. That's turned out to not be the [full story](https://github.com/sveltejs/svelte/issues/2546#issuecomment-678845774), and an app with lots of components will end up being less LOC if written in, say, React than Svelte

To appease my most recent hyperfixation I was listening to anything with Rich Harris (the creator of Svelte) in it. One such piece of media was [JS Party 205](https://changelog.com/jsparty/205). In it Rich had a throwaway line about maybe someday rewriting the compiler in Rust. It came across as a "it'd be nice to have, but it's definitely not a priority" project. Which makes sense. The Svelte compiler is already mostly TypeScript, so it's got enough static typing to be safe and is also very easy for new people to contribute to, a must for any open source project. Rich is wise to stick to improving the Developer Experience first before doing a largely unnecessary rewrite. React is proof that if your JS framework makes it quick to develop apps people will use it regardless of bundle size.

But that doesn't stop this project from being very tempting to take on, and it definitely doesn't stop me from trying. So this is going to be the start of a new series in which I chronicle my journey of rewriting a compiler (which I've never done before) for a project I've barely used. What I'm hoping to get out of it:

1. A better understanding of:
    - Svelte
    - JavaScript
    - Compilers
    - Rust
    - Tackling big projects
1. A compiler that can do a significant subset of what the Svelte compiler can do, but much much faster
    - I don't yet care for Server-Side Rendering, so that should cut the work a bit
1. Smaller bundle sizes
    - Code splitting can only do so much
    - Not caring about bundle sizes is how we end up with 5MB of JS
1. A list of changes I'd like to make to the Svelte compiler so even if my compiler doesn't get used the community can still benefit
    - Can we decrease bundle size?
    - Can we speed up compilation?
    - Are there any edge-cases not currently handled well?
