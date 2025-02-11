---
title: "Dynamic reading progress bar"
description: "How to add a progress bar to your blog"
slug: mini-01
date: 2025-02-10
draft: false
taxonomies: { tags: ["writing", "ux"] }
---

I'm sure [fjall-rs](https://fjall-rs.github.io/) isn't the first tech blog to implement a dynamic reading progress bar, but it's the first the caught my eye. Implementing it was trivially easy, though there are some browser pitfalls to be aware of. Here it is, in full:

```js
let progressBar = document.querySelector(".progress-bar");
if (progressBar) {
 let html = document.querySelector("html");
 const updateProgressBar = () => {
  // Only enable this when the post is big enough
  if (html.scrollHeight - html.clientHeight > 200) {
   let newHeight = Math.round(
    100 * (html.scrollTop / (html.scrollHeight - html.clientHeight))
   );
   progressBar.style.width = `${newHeight}%`;
  } else {
   progressBar.style.width = "0";
  }
 };

 document.addEventListener("scroll", () => {
  updateProgressBar();
 });
 // Scroll events don't always fire,
 // especially on mobile when the header comes and goes
 document.addEventListener("resize", () => {
  updateProgressBar();
 });
}

```

```css
.progress-bar {
  position: fixed;
  left: 0;
  top: 0;
  height: 3px;
  background: #5ca3ff;
  /* so you can click through */
  pointer-events: none;
  /* raise above everything else */
  z-index: 100;
  /* make the transition nice and smooth */
  transition: width 1s ease-in-out;
}
```

And I think the result is quite pleasing:
{{ video(title="Progress bar", path="assets/demo.mp4", width=786, height=200) }}
