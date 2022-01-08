---
title: "AOC Optimizations Part .1 - Inputs"
slug: "aoc-1"
date: 2021-12-24T17:55:37-07:00
draft: true
---

[Advent of Code](https://adventofcode.com/) is a terrific opportunity each year hyper-focus on some tiny, eminently solvable puzzles. In return you get gold stars and the warm knowing that you're actually pretty great. And who needs to get on that leaderboard, anyway, right? You're just here to have a chill time.

But let's say that we wanted to get on that sweet, sweet leaderboard. There're a bunch of steps we could take that might actually get us closer:

1. Start each day's puzzle right when it releases and not several days later
2. Practice programming in-between puzzles
3. Try to solve the problem in the fewest keystrokes

etc. This is the first in a series where we'll explore some of these, and more. But today, let's focus on perhaps the most inconsequential: reading the input from disk.

AOC's inputs are generally very very small. This year the largest was only 24K large. So whether you're reading it all at once, or line-by-line, or character-by-character, you probably won't even notice. Let's optimize it anyway.

I'm using Rust, because it's fun and cool, and there're three approaches I want to test:

1. Reading the entire file into a string
2. Reading the file line-by-line using a [BufReader](https://doc.rust-lang.org/std/io/struct.BufReader.html).
3. Using a `BufReader` and re-using the same memory for each line (thanks [stack overflow](https://stackoverflow.com/a/45882510/13707438)!)

#1 is definitely the most boring, so I'm hoping #3 wins so that I can add it to my new and hip AOC toolbelt next year.

All this testing lives in [this Github repository](https://github.com/loremdipso/post-aoc-inputs). To test I iterated through AOC's input files line-by-line and ran my code via a simple `cargo run` (who's going to turn on the optimizations when you're doing AOC?). And my results:

| Method                        | Time    |
| ----------------------------- | ------- |
| Read into memory              | 5.93ms  |
| `BufReader`                   | 14.37ms |
| `BufReader` with memory reuse | 20.33ms |

Well that's... kind of expected. I've got an SSD, but even so RAM is really very fast, so it's no wonder that reading entire files into memory is quick. I guess it also makes sense why the memory reuse version is slower. Right? Or... hmmm... let me just run that again:

| Method                        | Time   |
| ----------------------------- | ------ |
| Read into memory              | 1.51ms |
| `BufReader`                   | 8.35ms |
| `BufReader` with memory reuse | 4.90ms |

Oh, well... I mean those are some totally different results. Maybe the real take-away from this post is that performance testing easy to get wrong and you should always check your assumptions and run your tests multiple times.

Anyway, for AOC's inputs you should definitely read your inputs directly into memory all in one go (I used `fs::read_to_string`). Should save you at least a ms or two.

Okay, but how big does the input file need to be before `BufReader` starts to win? Well I made a little file generator in that repository and generated files of size, both in characters per line and lines per file:

## 1,000 lines x 1,000 characters per line

| Method                        | Time  |
| ----------------------------- | ----- |
| Read into memory              | 262ns |
| `BufReader`                   | 58ns  |
| `BufReader` with memory reuse | 51ns  |

Oh wait, what? This is unexpected. I am running all three tests in the same go, so what if I re-arrange them:

| Method                        | Time  |
| ----------------------------- | ----- |
| `BufReader`                   | 149ns |
| Read into memory              | 55ns  |
| `BufReader` with memory reuse | 59ns  |

Oh wow, something interesting is definitely doing on here.
