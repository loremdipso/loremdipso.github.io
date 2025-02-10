---
title: "Hip Hop Helper"
description: "Let's pursue our dreams of becoming the next [insert favorite poet here]"
slug: hip-hop-helper
date: 2023-02-12
draft: true
taxonomies: { tags: ["music", "programming"] }
---

## The Pitch

Writing poetry with specified rhyming schemes is hard. Whenever I try I end up whisper singing to myself over and over as I try to think of synonyms that rhyme with "Timbucktoo". Can we do any better?

### Disclaimer

Before we begin, yes hip hop is not rap, and this is more of a general tool for writing structured verse, but they're all kind of related and hip hop has better alliteration so I'm keeping it.

## V1

This has been an idea kicking around in the back of my head for years. Surely there's a multitude of projects doing exactly this but better but I've purposefully avoided looking at any of them for fear of losing motivation. So I've split this project into at least two parts:

- Part 1: (what you're reading now) where I embrace my naivete and just try to optimize for what I know
- Part 2: where I do some research on the state of the art and then borrow/re-implement the features I like the most

If there's enough ground to cover I may end up stretching this into a trilogy, but I'm writing it one part at a time so who knows?

For this first attempt I'd like to visualize the syllables of the words as I write them. To do that we just need to split our source text into syllables. I thought this would be the easy part. Surely there's some ready-made mapping and I just have to pick one. Right? Right??

Well half an hour of googling later I can semi-confidently say that I don't think so, at least not ready-made. I did find out you can download [Wiktionary](https://en.wiktionary.org/wiki/Help:FAQ#Downloading_Wiktionary), which is super cool, but more to the point that means I could could take that database and pull just the words and the associated syllables out into some smaller (but still quite massive) `JSON`. While that exercise seems doable and somewhat interesting it doesn't cover all use-cases, particularly made up words (which, as you'll soon see, I am quite the fan).

So after even more searching I ended up using the lovely [compromise](https://www.npmjs.com/package/compromise) package. It certainly wasn't built with syllable extraction in mind, and it's definitely overkill for what I need, but we're just exploring the problem space for now so I'm fine with it. This also required some enhancements to your [interactivity](/posts/adding-interactivity) work (which I've now backported, so you can read about it there).

With that, this is what we get:

{{ demo(key="hip_hop_helper_v1") }}

Putting that award winning limerick aside for a moment I actually quite like this. I mean clearly it's imperfect (once is split into "on" and "ce", for example) but it's workable. I'd be happy sinking some more time into using a dictionary for all the real words and only falling back to `compromise` as a heuristic for the made up ones. Other enhancements I can think of:

- Synonym finder
- Indicating rhymes
- Marking slant rhymes
- Specifying the rhyme scheme (with common presets)
- Indicating deviations from said rhyme scheme
- Splitting/joining syllables to indicate how it's spoken
- Support multiple stanzas

This seems a bit short, but I think I've done just about everything I set out to do with this prototype. Next I'll do a bit of research and come back with a gameplan and we'll (hopefully) make something actually useful. Wouldn't that be fun? Anyway, until next time,

Stay frosty,
Michael ❤️
