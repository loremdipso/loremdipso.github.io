---
title: "Secret Santa: a Saga"
date: 2022-01-27
draft: false
slug: "secret-santa-saga"
description: "Dive deep into my Secret Santa obsession"
taxonomies: { tags: ["one-shot", "performance", "svelte"] }
---

{{ image(alt="Santa!", path="assets/santa.svg", title="OMG IT'S SANTA!", max_height=300) }}

## The End Result

Here ya go! [Secret Santa](https://loremdipso.com/secret-santa/).

## Backstory

I have a groups of friends from college that have a [Secret Santa](https://en.wikipedia.org/wiki/Secret_Santa) event every year. Even after we all moved apart we've kept it up, jumping to Zoom to unwrap our gifts and guess who was our gifter. One of my most favorite traditions, a delight tempered only by the daunting task of logistics. You see, there are some constraints:

1. Couples are already going to give each other gifts so they shouldn't be each other's Secret Santa
1. Secret Santa gifter/giftee pairs shouldn't be repeated (if possible). If not possible then we should prefer repeats that are as chronologically separate as possible. That is, a repeat from five years ago is much better than one from last year.
1. No one should know their Secret Santa, including the person doing the organizing.

## Initial Approach

At first I wrote a simple ruby script that would generate text files whose names were the gifter and whose contents were the giftee. The organizer would then send an email out to everyone, attaching the correct file to each email. This worked, but was relatively inflexible. Plus previous years didn't automatically carry over, so the organizer would have to manually update the ruby script with those pairings and prune old ones when there were too many for the script to find a valid solution.

## Existing Solutions

The closest thing I found out in the wild that didn't collect any info or show any ads was <https://arcanis.github.io/secretsanta/>. It wasn't exactly what I was looking for, plus the exclusions seemed a bit broken, but it had the fantastic idea of encoding the giftee's information in the URL, using AES with a static key as an obfuscator. Neat!

## The Classic Excuse

If I'm being honest with myself I could have pretty easily extended the ruby script to do everything a web app could, but I'm always looking for any reason to try out a new technology. This time it was [Svelte](https://svelte.dev/). I'd heard it has Vue-like structure and Syntax, Vanilla JavaScript performance, and I'd already [started writing a compiler for it](https://loremdipso.com/tags/lithe/). So let's give a go, shall we?

## UI

The one thing anyone who uses Svelte seems willing to criticize is the lack of ecosystem. However I was able to find a [SMUI](https://sveltematerialui.com/), a Svelte implementation of [Material Design](https://material.io/) that seemed reasonable enough.

## Dev Experience

Here were some initial thoughts and minor complaints:

1. Setup was easy enough with a good project template.

1. Webpack continues to be terribly complex, so for this project I finally gave [rollup](https://rollupjs.org) a shot. It kind of seemed like a Webpack with less historical baggage, which is exactly what I wanted.

1. Svelte's component-specific styles are very nice.

1. Svelte's hot reloading: also very nice

1. Wow, I really like those `$`. I've written enough using React's hooks that I'm never confident my code's going to be fast unless I memoize everything, so it's great to see something that just works.

1. At first Svelte's loud complaints about unused styles got on my nerves, but I've come to accept that they're probably for the best.

1. I don't think my app was complex enough to really take advantage of Svelte's proclaimed runtime performance benefits, but I have no complaints.

1. I noticed a couple of minor consistency issues. If I had a bug in a `.ts` file that wasn't used anywhere, and I renamed it so it was a `.txt` just to get rid of the errors, Rollup or Svelte or TSC or whoever should notice did not. I had to restart the dev server for it to see that change.

## Bundle Size

I was a little disappointed that the Svelte-based Material UI library spit out **500 KB** just in styles. I'd love to get rid of most of that, but even so the whole project comes in at under **1 MB** total. Okay, but how does it compare to, say, React? Well, luckily I first wrote this app using React and [Antd](https://ant.design/). The implementations aren't exactly the same but they have nearly the same set of features. All told, the build of the React version comes out at around **3.4 MB**, which seems awfully high to me, even for React. After some digging it turns out it was due to that version of antd having [some issues](https://stackoverflow.com/questions/48721290/ant-design-huge-imports), so if I just `npm update` and rebuild I get...

**11 MB** ?!?! Whoa whoa whoa, that can't be right. Alright, what if we use [babel-plugin-import](https://github.com/umijs/babel-plugin-import), so that imports like `import { Button } from 'antd';` automatically turn into something more like `import Button from 'antd/lib/button';`. Apparently that's good for tree shaking. Aaaand... I actually kind of hate babel, so let's try and avoid it by just manually updating these imports. Aaaand...

**7.7 MB**. Wellllll, that's... better, at least, but something's definitely squiffy. Alright, fine, I'll use babel. Aaaand... no change. Darn. Oh, wait! Looks like the real space-taker are [the icons](https://github.com/ant-design/ant-design/issues/12011#issuecomment-623043192), and we should use babel for that too. And with that I'm down to... **4.8MB**! _sigh_ Alright, at this point I've had a gut full and just want to try something new.

## Meanwhile, in Svelte land

So **1 MB**, huh? Alright, just in case I was doing something silly let's go ahead and just try to use a [similar UI library](https://carbon-components-svelte.onrender.com/) in an app built using [Svelte Kit](https://kit.svelte.dev/)'s starter app template. That should give me the latest and greatest setup. But no, that also ended up costing ~500KB in styles, base, before I even started to pull in components. Why am I paying for junk I'm not even using? Hopefully users of that lib have a way to cut those out, but for the life of me I haven't been able to find it.

## Enter Smelte

[Smelte](https://smeltejs.com/). The elevator pitch is basically [Material Design](https://material.io/) + [Tailwind CSS](https://tailwindcss.com/). You can use all of the normal Tailwind styles in your app plus a tonne of pre-built components. There was one outstanding issue where Smelte doesn't currently list a specific version of purgecss and is slightly incompatible with it. Hopefully that PR gets accepted soon, but until then I had great luck using an older version of [purgecss](https://www.npmjs.com/package/purgecss).

So now that I've got my UI framework swapped out and patched up and worked like a dream, let's see the build size... **200 KB**!!! Alright, now that's more like it.

## Caveats and Conclusions

I should clarify that comparing the React+Carbon app against the Svelte+Smelte app isn't entirely fair. For one I just gave up on React+Carbon after a certain point. I'd hope that production apps aren't shipping with a framework that's got a **4 MB** "Hello World". Also, Carbon embeds its icons as SVG directly in its final bundle, whereas I reference Google Material Icons font library as an external URL. So to be more fair I should either increase the Svelte app's total size or decrease the React app's total size.

That said, I don't think I can definitively claim something as sweeping as "Svelte > React" or "Smelte > Carbon". What I can say is that testing performance is, as usual, important and _hard_. Even after deciding that bundle size was the metric I wanted to improve, actually going about improving it meant a lot of trial and error. I learned a lot, but if this project wasn't for fun I definitely wouldn't have put this much time or effort into it. And in the end I did find a combination of technologies that I'm really happy with that I'd love to try out in future projects, so I'll chalk this one up as smashing success.

Please tease me if I spend any more time re-writing this silly app again.

<details>
  <summary>
 Bonus: 2048
  </summary>
  
  <p>
 I did this same exercise with another of my old projects: <a target="#" href="https://loremdipso.com/YAN2048">YAN2048</a>. This one was written in Angular and only used its UI framework for the buttons and a game-over dialog. The <a target="#" href="https://loremdipso.com/YAN2048_Svelte">clone</a> does the same, and I copy/pasted very nearly all the same logic and styles, yielding two very similar apps.
  </p>

  <h2>
 Results
  </h2>

  <p>
 On-disk space, Angular: an even <b>500 KB</b>, Svelte: <b>84 KB</b>.
  </p>

  <p>
 Total delivered to browser (according to my network tab), Angular: <b>587 KB</b> inflated (<b>251 KB</b> with gzip), Svelte: <b>224 KB</b> inflated (<b>179 KB</b> with gzip).
  </p>

  <p>
 But is this comparison worthwhile? Is what I observed experimentally vaguely in line with what they should be? Well, according to <a href="https://github.com/LayZeeDK/ngx-ivy-minimal-app-with-ngzone">this git repo</a>, a hello world using the <a href="https://docs.angular.lat/guide/ivy">Ivy renderer</a> costs around <b>131 KB</b> uncompressed. So, yeah, I think the results here are reasonable.
  </p>
</details>
