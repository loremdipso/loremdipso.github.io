---
title: "Rust's Zip"
slug: "rust-zip"
date: 2022-01-10T07:52:39-07:00
draft: true
tags: ["performance", "mini"]
---

If you aren't big into comic books, or you don't read them on your computer, the common thing to do is use either `.cbr`, "comic book rar", which is just a `.rar` file meant to be read like a comic book, or `.cbz`, which is the same but for `.zip`.

I love comic books, and the program I've used to read them for years has been [MComix](https://sourceforge.net/projects/mcomix/). Now MComix is great, but it's also a little slow. For one the application code is written in Python, but also they made a... questionable algorithmic choice. See, whenever you open an archive, MComix will extract it to some temporary directory (`/tmp` on my machine), after which accessing each file is about as quick as it can be. But for very large archives this startup cost can be a bit much. If I'm just flipping through comics I don't want to wait for every single image to be totally decompressed before I can look at the first page. Why not just extract exactly what you need when you need it?

Seems simple enough. I got to work using Rust's [gtk4 bindings](https://gtk-rs.org/gtk4-rs/stable/latest/docs/gtk4/). Definitely more boilerplate than MComix's lovely Python integrations but I got there eventually. My thought was to have two threads: the main thread and the worker thread. When a new archive gets opened, or if the user jumps to a specific page, I use the main thread to open the zip file and extract the first image. Then I tell the worker thread to decompress the next several images in the archive. Using Rust to orchestrate our communication to C for the best mixture of performance and safety, plus we've even got a brilliant decompression scheme to boot. What could go wrong?

Skipping over the boring bits, I got something working. And it was... kind of slow. In fact, it seemed to me it was even a little bit slower than MComix was. Which definitely should not be the case. After some investigation, I found the culprit: Rust's [zip crate](https://crates.io/crates/zip). Naively, I thought the de-facto zip library for Rust would be fast. In fact, for a small archive with 30 images, extracting one image took on the order of `250ms`. One image! For context, the native zip utility could inflate the entire archive in `200ms`.

ACTUALLY, I might just not have been running in Release mode xD
