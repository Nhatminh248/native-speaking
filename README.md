# Speak Native

A blog built with [Astro](https://astro.build), migrated from a single HTML file.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/native-speaking/` in your browser.

> The `/native-speaking` prefix matches the `base` in `astro.config.mjs` so that
> local dev mirrors the GitHub Pages URL exactly.

## Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the built site locally
```

## Deploy to GitHub Pages

### One-time setup

1. Push this repo to GitHub under the account `Nhatminh248`.
2. Go to **Settings → Pages** in your GitHub repo.
3. Under **Source**, choose **GitHub Actions**.

### Automatic deploys

Every push to `main` triggers the workflow at `.github/workflows/deploy.yml`,
which builds the site and publishes the `dist/` folder via the GitHub Pages API.

The live URL will be: `https://Nhatminh248.github.io/native-speaking/`

## Adding a new post

1. Create `src/content/posts/your-slug.md` with this frontmatter:

   ```md
   ---
   title: "Your Post Title"
   date: 2025-06-01
   description: "One-sentence summary shown on the homepage card."
   slug: "your-slug"
   ---

   Your markdown content here...
   ```

2. The post automatically appears on the homepage and gets a page at
   `/posts/your-slug`.

For posts with complex HTML layouts (like the IELTS post), add an `.astro`
component to `src/components/posts/` and add a slug check in
`src/pages/posts/[slug].astro`.

## Project structure

```
src/
  content/
    config.ts                    # Zod schema: title, date, description, slug
    posts/
      ielts-speaking.md          # First post (frontmatter only — body is below)
  components/
    PostCard.astro               # Card used on the homepage listing
    posts/
      IeltsSpeakingBody.astro    # Full HTML body for the IELTS post
  layouts/
    BaseLayout.astro             # Shared HTML shell, footer, scroll reveal script
  pages/
    index.astro                  # Homepage — lists all posts
    posts/
      [slug].astro               # Dynamic post route
  styles/
    global.css                   # All design tokens and styles (no changes from original)
```

> `index.html` in the project root is the original single-file source. It is not
> served by Astro and can be deleted once you are satisfied with the migration.