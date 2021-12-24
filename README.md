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
