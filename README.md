# José Huamaní — site

Personal website for José Huamaní — viola da gamba & violone.
Static HTML, no build step.

## Files

- `index.html` — home (hero, agenda, contact)
- `about.html` — bio
- `ensembles.html` — ensembles & programmes
- `i18n.js` — translations (EN · ES · FR · IT · NL)
- `assets/` — photos and images
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Local preview

Just open `index.html` in a browser, or run a tiny static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing on GitHub Pages

1. Create a new repository on GitHub (public).
2. Upload all files (drag-and-drop the contents of this folder onto the repo's "Add file → Upload files" page, or use `git`).
3. In the repo, go to **Settings → Pages**.
4. Under "Source", choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
5. After a minute the site will be live at `https://<your-username>.github.io/<repo-name>/`.

To use a custom domain (e.g. `josehuamani.com`):
- In **Settings → Pages**, add the domain under "Custom domain".
- At your domain registrar, point a `CNAME` record to `<your-username>.github.io`.

## Editing content

- Text is mostly in the HTML files. Search for the line you want and edit it.
- For translations, edit the matching key inside `i18n.js` (look for the language block: `en:`, `es:`, `fr:`, `it:`, `nl:`).
- Concert dates live inside `index.html` under the "Agenda" section.
- New photos go into `assets/` and you reference them like `<img src="assets/your-file.jpg" />`.
