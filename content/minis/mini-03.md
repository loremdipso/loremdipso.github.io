---
title: ""
description: ""
slug: mini-03
date: 2025-02-20
draft: false
taxonomies: { tags: ["stackoverflow", "ruby"] }
---

I think one of the worst hit by the LLM mania is Stack Overflow. Not only has
its content been essentially stolen and regurgitated by ChatGPT in an,
admittedly, convenient and easy-to-understand package, but LLMs have made it
easier than ever before to give yourself credability via a bot network of
reasonable sounding answers that get reasonable sounding praise.

So I'd like to just highlight one of my favorites posts. No fat to be trimmed,
just a simple, honest answer to a simple, earnest question.

### Question

How can I display a child process's output in real time with Ruby?

### Answer

```ruby
IO.popen("s3sync.rb …").each do |line|
  print line
end
```

Beautiful. [Source](https://stackoverflow.com/a/1974748)
