---
title: "Adventures in databases 01: so it begins"
description: "This is the start of a series exploring my experience with sqlite in a small desktop application"
slug: adventures-in-databases-01
date: 2025-02-18
draft: true
taxonomies: { tags: ["sqlite", "database", "software"] }
---

Years ago I was exploring various databases for a simple desktop application.
It started with a single ruby file that used a simple file that I
[Marshal](https://ruby-doc.org/core-2.6.8/Marshal.html)'d[^1] to/from whenever
I read or wrote to it. This started off fine (computed are fast) but very quickly
felt too slow. Just starting up the codebase too on the order of hundreds of ms,
plus saving all that data to disk on every operation made the app feel sluggish.

While I'm sure it's possible to fix the application while staying inside of Ruby,
like using a daemon to pre-load the application) I was looking for an excuse to
migrate, and go was the new kid on the block. And boy howdy, was it fast! To
develop and to startup, go was an immediate improvement.

But I was still loading/saving to a file, but what I really wanted was a database.
But databases are slow, and I wanted _speed_. So I dug around and found
[BuntDB](https://github.com/tidwall/buntdb). A key value store that you could
persist to disk. It used a append-only file for persistence, so writes were so
so fast, and I only needed to persist to disk on close.

Until... I wanted to run two instances of my application and have them connect
to the same database. Yikes. I ended up implementing a lock file, so I could have
a lot of readers but only one writer, which worked but was fairly limiting. Plus
I was having some issues with concurrency and consistency and the key/value store
was slow to work with. Anytime I wanted to change my "schema" I had to write
custom migration code.

<details>
  <summary>
	Spoilers
  </summary>
  
  <p>
At this point I'm sure that anyone who's played around with databases is yelling
at their screen, "just use sqlite!" Well, I'm getting there, alright? Hold your
horses.
  <p>
</details>

So I had heard of sqlite, who hasn't? But I had always ruled it out. To be
honest, I was caught up in the NoSQL hype train. My impression that anything
SQL was just for enterprise applications and was going to be, by its very
nature, sluggish.

So imagine my surprise when I finally bite the bullet and give sqlite a try.
The speed! The features! The easy of use! The wonderful tooling! I can trivially
support multiple concurrent readers, create indexes, perform migrations, do
ad-hoc analysis, and the startup time is **less**!!! The write time isn't quite
as good, but I get around that with batch writes that I do in a background
thread.

[^1]: Ruby Marshalling is roughly equivalent to Python's [Pickling](https://docs.python.org/3/library/pickle.html)
