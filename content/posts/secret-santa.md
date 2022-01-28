---
title: "Secret Santa"
date: 2021-01-27
draft: true
---

### Backstory

I have a groups of friends from college that have a [Secret Santa](https://en.wikipedia.org/wiki/Secret_Santa) event every year. Even after we all moved apart we've kept it up, jumping to Zoom to unwrap our gifts and guess who was our gifter. One of my most favorite traditions, a delight tempered only by the daunting task of logistics. You see, there are some constraints:

1. Couples are already going to give each other gifts so they shouldn't be each other's Secret Santa
1. Secret Santa gifter/giftee pairs shouldn't be repeated (if possible). If not possible then we should prefer repeats that are as chronologically separate as possible. That is, a repeat from five years ago is much better than one from last year.
1. No one should know their Secret Santa, including the person doing the organizing.

### Initial approach

At first I wrote a simple ruby script that would generate text files whose names were the gifter and whose contents were the giftee. The organizer would then send an email out to everyone, attaching the correct file to each email. This worked, but was relatively inflexible. Plus previous years didn't automatically carry over, so the organizer would have to

### Existing solutions

The closest thing I found out in the wild that didn't collect any info or show any ads was https://arcanis.github.io/secretsanta/. It wasn't exactly what I was looking for, plus the exclusions seemed a bit broken, but it had the fantastic idea of encoding the giftee's information in the URL, using AES with a static key as an obfuscator. Neat!

### The classic excuse

If I'm being honest with myself I could have pretty easily extended the ruby script to do everything a web app could, but I'm always looking for any reason to try out a new technology. This time it was [Svelte](https://svelte.dev/). I'd heard it has Vue-like structure and Syntax, Vanilla JavaScript performance, and I'd already [started writing a compiler for it](https://loremdipso.com/tags/lithe/). So let's give a go, shall we?

### UI

The one thing anyone who uses Svelte seems willing to criticize is the lack of ecosystem. However I was able to find a [Svelte implementation](https://sveltematerialui.com/) of [Material Design](https://material.io/) that seemed reasonable enough.

### Dev experience

Here were some initial thoughts and minor complaints:

1. Setup was easy enough with a good project template.

1. Webpack continues to be terribly complex, so for this project I finally gave [rollup](https://rollupjs.org) a shot. It kind of seemed like a Webpack with less historical baggage, which is exactly what I wanted.

1. Svelte's component-specific styles are very nice.

1. Svelte's hot reloading: also very nice

1. Wow, I really like those `$`. I've written enough using React's hooks that I'm never confident my code's going to be fast unless I memoize everything, so it's great to see something that just works.

1. At first Svelte's loud complaints about unused styles got on my nerves, but I've come to accept that they're probably for the best.

1. I don't think my app was complex enough to really take advantage of Svelte's proclaimed runtime performance benefits, but I have no complaints.

1. I noticed a couple of minor consistency issues. If I had a bug in a `.ts` file that wasn't used anywhere, and I renamed it so it was a `.txt` just to get rid of the errors, Rollup or Svelte or TSC or whoever should notice did not. I had to restart the dev server for it to see that change.

### Bundle size

I was a little disappointed that the Svelte-based Material UI library spit out **500KB** just in styles. I'd love to get rid of most of that, but even so the whole project comes in at under **1MB** total. Okay, but how does it compare to, say, React? Well, luckily I first wrote this app using React and [Antd](https://ant.design/). The implementations aren't exactly the same but they have nearly the same set of features. All told, the build of the React version comes out at around **3.4 megabytes**, which seems awfully high to me, even for React. After some digging it turns out it was due to that version of antd having [some issues](https://stackoverflow.com/questions/48721290/ant-design-huge-imports), so if I just `npm update` and rebuild I get...

**11MB** ?!?! Whoa whoa whoa, that can't be right. Alright, what if we use [babel-plugin-import](https://github.com/umijs/babel-plugin-import), so that imports like `import { Button } from 'antd';` automatically turn into something more like `import Button from 'antd/lib/button';`. Apparently that's good for tree shaking. Aaaand... I actually kind of hate babel, so let's try and avoid it by just manually updating these imports. Aaaand...

**7.7MB**. Wellllll, that's... better, at least, but something's definitely squiffy. Alright, fine, I'll use babel. Aaaand... no change. Darn. Oh, wait! Looks like the real space-taker are [the icons](https://github.com/ant-design/ant-design/issues/12011#issuecomment-623043192), and we should use babel for that too. And with that I'm down to... **4.8MB**! _sigh_ Alright, at this point I've had a gut full and just want to try something new.

### Meanwhile, in Svelte land...

So **1MB**. Alright, just in case I was doing something silly let's go ahead and just try to use a [similar UI library](https://carbon-components-svelte.onrender.com/) in an app built using [Svelte Kit](https://kit.svelte.dev/)'s starter app template. That should give me the latest and greatest setup. But no, that also ended up costing ~500KB in styles, base, before I even started to pull in components. Why am I paying for junk I'm not even using? Hopefully users of that lib have a way to cut those out, but for the life of me I haven't been able to find it.

### Enter Smelte

[Smelte](https://smeltejs.com/). The elevator pitch is basically [Material Design](https://material.io/) + [Tailwind CSS](https://tailwindcss.com/). You can use all of the normal Tailwind styles in your app, plus a tonne of pre-build components. Dev worked great, but the build was a bit broken. After much debugging I found that there's an open issue against smelte right now where it should be passing an allowlist around but instead it's passing a whitelist. Unfortunate, I hope that fix gets merged soon, but until then using a slightly older version of tailwindcss and did the trick. And once I migrated the app to Smelt the final build dropped all the way down to **200KB**!!! Nice.
