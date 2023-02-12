---
title: "Hip Hop Helper"
description: "Let's pursue our dreams of becoming the next [insert favorite poet here]"
slug: hip-hop-helper
date: 2023-02-12
draft: true
taxonomies: { tags: ["music", "programming"] }
---

## The Pitch

Writing poetry with specified rhyming schemes is hard. Can we get a bit of automated help just in laying out our words without having to whisper sing them to ourselves over and over?

### Disclaimer

Before we begin, yes hip hop is not rap, and this is more of a general tool for writing structured verse, but they're all kind of related and hip hop has better alliteration so I'm keeping it.

## V1

This has been an idea kicking around in the back of my head for years. Surely there's a multitude of projects doing exactly this but better but I've purposefully avoided looking at any of them for fear of losing motivation.

For our first attempt we're going to simply split our source text into syllables, which is actually a bit harder than I had thought. Surely there's some ready-made mapping, right? Right??

Well half an hour of googling later I can semi-confidently say that I don't think so, at least not ready-made. I did find out you can download [Wiktionary](https://en.wiktionary.org/wiki/Help:FAQ#Downloading_Wiktionary), so presumably one could take that database and pull just the words and the associated syllables out. While that exercise seems doable and somewhat interesting it doesn't cover all use-cases, particularly made up words (which, as you'll soon see, I am quite the fan).

For this attempt I ended up using the lovely [compromise](https://www.npmjs.com/package/compromise) package. It certainly wasn't built with syllable extraction in mind, and it's definitely overkill for what I need, but we're just exploring the problem space for now and so I'm fine with it. This also required some enhancements to your [interactivity](/posts/adding-interactivity) work (which I've now backported, so you can read about it there).

{{ demo(key="hip_hop_helper_v1") }}
