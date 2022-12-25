---
title: "Adding Interactivity"
description: "Static sites are cool and all, but what about interactive demos???"
slug: adding-interactivity
date: 2022-12-24
draft: true
taxonomies: { tags: [] }
---

## Looking For Problems To Solve

[Zola](https://www.getzola.org/) is wonderful. It builds quickly, it's so configurable, but it is (by design) not well suited for interactivity. I hadn't thought I wanted that until I saw some on [Amos's site](https://fasterthanli.me/). He ended up using `iframes` to manage that integration, which is a perfectly acceptable solution. But it did make me wonder: can we accomplish the same result without all of that nasty ugly `HTML`? Can we just write some clean JS and call it a day?

Let's find out.

## Creating the Bundle

I hear that [Svelte](https://svelte.dev/) is great at integrating into existing applications. You just give it some home during initialization and it goes from there.

## Embedding the Bundle

-   Shortcode
-   Consistent naming
-   Only rebuild when necessary

## Test

Will this work?

{{ demo(key="counter") }}
