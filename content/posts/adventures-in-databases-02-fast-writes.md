---
title: "Adventures in databases 02: fast writes"
description: "How I utilized batching and a background thread to speed up my application using sqlite"
slug: adventures-in-databases-02-fast-writes
date: 2025-02-18
draft: true
taxonomies: { tags: ["sqlite", "software", "performance"] }
---

In our application, we want it to feel as fast as possible. Sqlite is great, but
we don't want to block our UI thread on its write speeds. So let's implement a
background thread to do that for us.

Pros:

-   "Writes" are essentially queued up for later and performed off the main thread.

Cons:

-   Any issues with the writes won't show up right away. We should only do this
    when we're reasonably confident it'll succeed.
-   We need to enforce our own consistency. That is, I need to make sure my writes
    are finished before I read from the database again.
