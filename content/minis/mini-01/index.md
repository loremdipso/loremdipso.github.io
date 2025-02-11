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
// Animate the progress bar
let progressBar = document.querySelector(".progress-bar");
if (progressBar) {
 let html = document.querySelector("html");
 let header = document.querySelector("header");
 const updateProgressBar = () => {
  // This is the only way I found to deal with the mobile address bar
  let effectiveScrollHeight = html.scrollHeight - window.innerHeight;
  // Only enable this when the post is big enough
  if (effectiveScrollHeight > 200) {
   let newHeight = Math.round(
    100 * (html.scrollTop / effectiveScrollHeight)
   );
   progressBar.style.width = `${newHeight}%`;
  } else {
   progressBar.style.width = "0";
  }
 };

 document.addEventListener("scroll", () => {
  updateProgressBar();
 });
 // Scroll events don't always fire when the window resizes
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
