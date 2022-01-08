---
title: "Lithe 1: The Motivation"
slug: "lithe-1"
date: 2022-01-03T12:12:04-07:00
draft: false
tags: ["lithe"]
---

Svelte is like Rust for me in that I had heard good things for actual years before I even gave it a try. And Svelte is like Rust for me in that I loved it immediately.

It's really very simple to write in, the basic idea is engaging, and I want so badly for it to succeed. For context I have professional experience with vanilla JavaScript, React, and Angular. After transitioning a small app from Angular to Svelte, here were my takeaways:

1. It's very much like Vue
    - Single file structure
    - Framework provides a lot out of the box
1. It's got a (I think) better pattern for reactive programming than React
    - I'm guessing Svelte is a large part of the motivation behind React's new [React without memo](https://www.youtube.com/watch?v=lGEMwh32soc) project
1. It's had five years to become popular, and yet it has not.
    - I can only guess at this, but I'd say it's just late to the game. So much of the web is written using other frameworks, and no one wants to re-write it in Svelte
    - Initially Svelte touted itself as providing all the functionality you'd expect from a big JS framework with way less code. That's turned out to not be the full story, and an app with lots of components will end up being less LOC if written in, say, React than Svelte

In this, my most recent hyperfixation, I was listening to anything with Rich Harris (the creator of Svelte) in it. One such piece of media was [this episode of JS Party](https://changelog.com/jsparty/205). In it Rich had a throwaway line about maybe someday rewriting the compiler in Rust.

This is one of those "it'd be nice to have, but it's definitely not a priority" projects. Which makes sense. The Svelte compiler is already mostly TypeScript, so it's got both enough types to be safe and is also very easy for new people to contribute to, a must for an open source project. Rich is wise to stick to improving the Developer Experience first before doing a largely unnecessary rewrite.

But that doesn't the problem from being so tempting to try and solve, and it surely doesn't stop me from trying. So I'm going to start a new series in which I chronicle my journey of rewriting a compiler (which I've never done before) for a language I've barely used. What I'm hoping to get out of it:

1. A better understanding of:
    - JavaScript
    - Compilers
    - Rust
    - Tackling big projects
1. A compiler that can do a significant subset of what the Svelte compiler can do, but much much faster
    - I don't yet care for Server-Side Rendering, so that should cut the work a bit
1. A list of changes I'd like to make to the Svelte compiler
    - Decrease bundle size
    - Speed up compilation
    - Fix edge-cases
