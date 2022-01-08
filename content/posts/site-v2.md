---
title: "Site V2"
date: 2021-12-27T14:15:48-07:00
tags: ["meta", "software"]
---

Channeling my inner dev, I've gone ahead and completely re-written this site. [Original post for comparison]({{< ref "conception.md" >}}).

## Why?

The original site was... poorly written. It used React, which can be fine, but was honestly totally overkill for a site that wasn't complex or really that interactive. And I've had a change of heart when it comes to SPAs: that they're useful when they're useful, and not when they're not.

## Free

Hosting this site is still basically free via Github pages (except for the domain name), and the way hugo generates the CSS bundles is predictable, so even though I'm do clean builds when I add content, if it doesn't change the existing CSS then the generated CSS gets the exact same name, which means it can live in peoples caches longer. Neat!

## Fast

Switched from React and webpack to Hugo, and I couldn't be happier. My build times are basically instant now (yay!), and the site is generally faster in every way. I may revisit turning this generate site into a SPA again, but it'd just be a vanity project. Each page's chrome is so simple I wouldn't actually save any real time by keeping it around and just swapping out the content.

## Fun

Eh, Hugo is great, but it's also opinionated and a little difficult to grok for a while if you haven't worked with it before, and I've found the online forum moderators to be a little short-tempered. Making the site was fun, but learning how was to was a little big of a slog.

## Fanciful

I added nifty slide-in effects for the header/footer to make the site just a little bit more interesting. The moving backgrounds are gone, though, for now (☹️). I may add them back in a bit, maybe as part of a shared library. I'm imagining you import some CSS file and it handles the rest, but idk.
