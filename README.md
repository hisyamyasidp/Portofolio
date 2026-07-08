# Portofolio V5 - Simplified

This is a simplified, local-only clone of EkiZR/Portofolio_V5 created to match the public site layout without Supabase integration.

Quick start (no npm):

Open `index.html` directly in your browser (double-click or drag into browser). The page uses Tailwind Play CDN and local SVG assets.

Deploy to GitHub Pages (recommended):

1. Create a repository (for user pages use `<username>.github.io`, or any repo for project pages).
2. Commit and push the contents of this folder to the repository root (ensure `index.html` is at repo root).
3. In GitHub repo settings → Pages, set Source to `main` branch and root (or use `gh-pages` branch).

Quick commands (replace remote URL):

```bash
git init
git add .
git commit -m "Static portfolio for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Notes:
- Use `https://<your-username>.github.io/<repo>/` for project pages or `https://<your-username>.github.io/` for user pages.
- If you want the full dynamic features (Supabase, admin dashboard), use the upstream React project and follow its README.
