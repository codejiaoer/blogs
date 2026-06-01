# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Framework**: [Hexo](https://hexo.io/) — Node.js static site generator
- **Theme**: landscape (default)
- **Deployment**: GitHub Actions → GitHub Pages (`https://codejiaoer.github.io/blogs`)

## Common Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4000/blogs/)
npx hexo server

# Create a new post
npx hexo new "Post Title"

# Build static files to public/
npx hexo generate

# Clean build cache
npx hexo clean
```

## Content Structure

- `source/_posts/` — blog posts (Markdown)
- `source/_drafts/` — draft posts (not published)
- `scaffolds/post.md` — template for new posts

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which runs `hexo generate` and deploys `public/` to GitHub Pages automatically. No manual deploy step needed.

## Configuration

- `_config.yml` — site-wide config (title, URL, theme, permalink)
- `_config.landscape.yml` — landscape theme config
- Site URL is set to `https://codejiaoer.github.io/blogs` with `root: /blogs/`
