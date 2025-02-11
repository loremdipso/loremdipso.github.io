---
title: ""
description: ""
slug: mini-02
date: 2025-02-10
draft: false
taxonomies: { tags: ["zola"] }
---

I just added in the ability to render videos in my blog, and in so doing came
across a question I hadn't considered before: how do I reserve space for a
video that loads after the page does? Also, are videos loaded after page load,
or what's the deal there?

Turns out: yes! You can reserve space for a video. In my case, I want my video
to take up 100% of the available width and let the height work itself out. So
do that I used the [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
property and calculate on in my template with the video's width and height.
The result is what you see below, and here's the zola shortcode I made:

```html
{%- set path = page.path ~ path -%}
{%- set aspect_ratio = width / height -%}
<video loop autoplay muted
  {%if title%}title="{{ title }}"{%endif%}
  style="aspect-ratio: {{aspect_ratio}}"
>
  <source src="{{ path }}" type="video/mp4">
</video>
```

Which I can embed in my markdown documents like so:

```md
video(title="Progress bar", path="assets/demo.mp4", width=786, height=200)
```

A tad manual, but it avoids big page reflows, so I don't mind.
