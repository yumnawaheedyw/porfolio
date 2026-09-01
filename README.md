# Yumna Waheed — Portfolio

A lightweight, dependency-free portfolio site (plain HTML/CSS/JS, no build step).

## Files
- `index.html` — all content and structure
- `styles.css` — design tokens, layout, animation
- `script.js` — mobile nav, scroll reveal, contact form

## Run it locally
Just open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy (free options)
- **GitHub Pages**: push these 3 files to a repo, enable Pages in repo Settings → Pages, pick the branch/root.
- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard, or connect the GitHub repo.

## Customize
- **Photo**: the hero currently uses an abstract SVG signature instead of a headshot. To add a real
  photo, replace the `.hero__visual` SVG block in `index.html` with an `<img>` tag and add matching
  styles in `styles.css`.
- **Colors**: everything is driven by CSS variables at the top of `styles.css` under `:root`.
  Change `--accent` (#5EEAD4) or `--bg` to shift the whole palette.
- **Content**: all copy (experience, projects, education) lives directly in `index.html` — no CMS,
  just edit the text.
- **Contact form**: it opens the visitor's email client via a `mailto:` link (no backend needed).
  If you want real form submissions instead, wire it to a service like Formspree or Netlify Forms.

## Notes
- No external JS libraries — under 15KB of custom CSS/JS total.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts; swap the `<link>` tags in
  `index.html` if you'd rather self-host them.
- Respects `prefers-reduced-motion` and is keyboard-navigable.
