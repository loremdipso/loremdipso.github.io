---
title: "Web framework wishlist"
description: "What should a modern web framework look like?"
slug: web-framework-wishlist
date: 2022-09-02
draft: true
taxonomies: {
  tags: ["software", "web", "hot take"]
}
---

## Rambling intro

Web frameworks are a dime-a-dozen nowadays, perhaps always. I've worked with a handful, tried out several handfuls, and I often wonder why in the world there're so many. Perhaps it's simply a matter of taste. I mean, RoR is fundamentally just another Django but using Ruby instead of Python. Express is similar, though with perhaps a heavier focus on non-blocking IO. ASP.NET is Java Spring but with C#. PHP is (in my mind) a replacement for old-school Perl sites. And that's just for SSR. For SPAs there's even more choice since your backend can just turn into an API that your frontend calls.

Taking a step back, I'd like to talk about some aspects of full-stack web development that I'd like to see in whichever framework I <del>am stuck with</del> get to use.

## SSR vs CSR?

In this year of our Lord 2022, Server Side Rendered applications are making a comeback in a big way, with Next.js, Nuxt.js, SvelteKit, among others. Same goes for pre-rendered sites using tools like Hugo or Zola (like this blog, for example). And for some applications this is fine and can be the end of the story, but those applications are boring and I don't want to talk about them.

There's also this interesting middle ground where SSR is used for the initial page content and CSR comes in after via so-called "hydration". My hot take here is that hydration adds an extraordinary amount of complexity and by and large is just not worth it for the vast majority of applications. If you're aware of how much content you ship to the browser, what's above and below the fold, know how to split your code, [don't use Moment.js](https://github.com/you-dont-need/You-Dont-Need-Momentjs), and optimize your images, you're probably fine without a CSR/SSR changeover.

That said, SEO is important for some sites, and for those it might make sense to have a SSR option. However, I'll argue you still don't need hydration here, a point I'll get into later.

## Let's talk turkey

Here're some of the features I think any modern web framework should enable:

- Types on the backend
  - Duh.
- Types on the frontend
  - Obviously.
- Types when talking to a database
  - Also pretty obvious, but this is definitely not the norm.
- Share type definitions between these systems
  - Again, common-sense - why define two versions of an interface that might get out of sync? And you'd think the popularity of JavaScript-based backends would have made this common, but again it's definitely not.
- Make it easy to store/fetch data from a local cache. Or, if that fails, make it easy to fallback to some datastore.
- Make it hard to write slow code
  - I'm looking at you, [Dir['*']](https://stackoverflow.com/questions/16487115/is-there-a-faster-alternative-to-rubys-dir-glob "Why in the world would this return an array rather than an iterator? WHY?!?!").
- Make it REALLY hard to deadlock
- Make it easy to restart
- Make it easy to scale horizontally
- Make it easy to get a high-level overview of how your service is doing
- Data encoding formats should be configurable
  - JSON is the golden standard, but protobuf and MessagePack are totally legitemate options that make a lot of sense in some applications.
- Writing a WebSocket endpoint should be just as easy as writing a RESTful one
