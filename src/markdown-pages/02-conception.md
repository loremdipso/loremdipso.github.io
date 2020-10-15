---
slug: "/blog_content/conception"
date: "2020-08-10"
title: "Conception"
---

This site was made, primarily, as a vehicle for my résumé. It could have been a one-day thing. Just find a pretty wordpress template, customize it a bit, and voilà! But where's the fun in that? I mean, what self-respecting dev doesn't love a good [greenfield project](https://en.wikipedia.org/wiki/Greenfield_project).

So, to justify this waste of time, I came up with some requirements:

## Free

This was by far the easiest task since github will host a page for your user. This only works for static sites (no SSR), but that's my preference anyhow. I did still have to pay for the domain name, though.

## Fast

Fast means different things to different people. I knew this site was going to be mostly static content, and my hoster already had CDNs. The question was: do I bother making a [SPA](https://en.wikipedia.org/wiki/Single-page_application)? On the one hand, I think you can do some pretty cool things with a SPA. On the other, it's definitely more work. Could I really justify the time in this already overly-onerous task?

But we're greenfielding it, so SPA it is! And I chose gatsby to help out with navigation and also generating the blog content. For the résumé I have kind of an exaggerated pipeline, where I fill out a yml which I convert to json and feed into a page on this site. To get a `pdf` I wrote a script that effectively hosts the page in a headless browser and prints the result to a file. To get a `.docx` I... would have to write it by hand. But luckily `.docx` is far less common.

The skeleton of the site is loaded regardless of which page you go to. Heavier projects will be [split out and lazy loaded](https://reactjs.org/docs/code-splitting.html), so the site is about as fast as it can reasonably be and shouldn't get slower even as I add content.

## Fun

I chose React as the framework, since I know it and really enjoy using it. It was pretty overkill for this project since not a lot of this site it reactive, but, like Shane Patton is credited as saying: anything worth doing is worth overdoing.

## Fanciful

I love moving backgrounds. I flip-flopped on how best to accomplish this, CSS or canvas. CSS, especially CSS3, has gotten so good and feature rich that people have done all sorts of amazing things. All sorts of problems, like jitter and framerate, would go away. But while it would be easier to get something up and running, just CSS is more limiting than the canvas approach, so that's what I went with.

The first iteration is a simple collage of circles that lazily drift around, growing and shrinking at random. It's not perfect, but pretty enough for a first go.

# Conclusion

And that's it. I hope you enjoy this site as much as I've enjoyed making it. Ciao!
