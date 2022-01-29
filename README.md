# Michael's Resume Website

To run locally:

```
hugo server -D
```

To publish to `docs/`:

```
hugo -D
```

Or to do it clean (while maintaining CNAME):

```
./scripts/export.sh
```

To re-generate resume.pdf (NOTE: requires wkhtmltopdf):

```
./scripts/generate_resume.sh
```

# TODO

-   [ ] Improve color scheme

-   [ ] Better copy button

-   [ ] Add new/better means of contacting me

-   [ ] More photos

-   [ ] Add TOC to blog posts

-   [x] When regenerating, keep old CSS files around for users who have cached HTML

    -   Github pages boasts really short file caching. Which is generally good, but can cause issues for CSS files

# Ideas

-   [ ] Resurrect Rust WASM projects. Propose new hosting scheme
