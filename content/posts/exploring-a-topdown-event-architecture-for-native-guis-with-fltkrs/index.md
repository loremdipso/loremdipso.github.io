---
title: "Exploring a top-down event architecture for native GUIs with fltk-rs"
description: "Let's explore a conceptually simple architecture to building a native GUI application."
slug: exploring-a-topdown-event-architecture-for-native-guis-with-fltkrs
date: 2024-01-14
draft: true
taxonomies: { tags: ["fltk", "redux", "architecture"] }
---

I've been in the industry long enough that when I see a new article about some new technology my first response often is something like, "New?! You're just reinventing <insert thing here>!". Much like fashion trends, ideas come in and out of style. Server Side Rendering was the default and, really, only way of writing websites up until GMail came along. Then CSR ruled, until every website required 5+ MBs of minified JS to render anything, and so SSRs are coming back.

I fear I've fallen into this trap as well, for I have rediscovered two very well-explored ideas:

- The joy of programming native applications with a retained-mode GUI framework

- The initial simplicity (but ultimately convolutedness) of a top-down event architecture

Let's talk about it.

# FLTK: the basics

## The basics

[fltk](https://www.fltk.org/), pronounced "fulltick"[^1], was initially released in 1998. It's actively maintained even today, offering
rust bindings via [fltk-rs](https://github.com/fltk-rs/fltk-rs). By default it's ugly as sin, but it can (and should) be customized.

fltk offers an extremly simple and extensible component architecture. Components have and maintain their own state, do their own drawing, everything's single-threaded, and all events happen in a predicatable order.

fltk does not shy away from global state. You can access the last mouse or keyboard event from anywhere at anytime, with the idea being you'd really only want to do so from inside an event callback.

And while fltk is technically written in C++ and has a [class heirarchy](https://www.fltk.org/doc-1.3/hierarchy.html), you can see it's quite flat. This makes the rust library quite simple. You construct and interact with the widgets in a very rusty way.

This is in contrast to [GTK](https://docs.gtk.org/gtk3/classes_hierarchy.html), which makes heavy use of subclasses. And since Rust doesn't support inheritance, relying instead on composition, [gtk-rs reaches for macros](https://gtk-rs.org/gtk4-rs/stable/latest/book/g_object_subclassing.html) to bridge the gap. While this technically works it's quite hard to debug and unless you read the source code it's hard to even understand what's going on.

## The layout

How does one do layout in fltk? Glad you asked. It's similar to immediate mode frameworks (imgui or egui, for ex.), where your heirarchy is determined by open and close commands. Let's say we wanted to make a flex-box layout with a label that was 50 units tall:

```rs
let container = Flex::default_fill().column();

let mut label = Frame::default();
label.set_label("Fancy label");
container.fixed(&mut label, 50);

container.end();
```

Now I know what you're thinking: Michael, I live and love react and/or QML, why would I declare my UI like this? Gross. And that's fair. Compare the above to:

```html
<div>
  <span>Fancy label</span>
</div>
```

It's just worse. But fltk is so basic, so simple, that we can add our own convenience layers on top. After some experimentation I've landed on this style:

```rs
with_flex(|container| {
  container.fixed(&mut simple_label("Fancy label"), 50);
})
```

I feel this is more expressive than the default fltk-rs style while hiding some of the noise of the boilerplate.

## Why retained mode?

Computers are fast and maintaining state is hard. This has led to the rise of immediate mode GUI frameworks. Immediate mode simply renders everything everytime. Retained mode renders only when it needs to. In theory retained mode essentially trades some memory for compute, whereas immediate mode relies entirely on compute and promises easier to program UIs.

Immediate mode UIs have found their niche in games and debug UIs. Since you're already rendering everything every frame, why not also draw some boxes?

# Event flow

TODO

[^1]: 🙄
