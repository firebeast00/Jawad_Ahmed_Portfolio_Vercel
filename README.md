# Jawad Ahmed — Portfolio

A responsive static portfolio with project screenshots, interactive project overviews, a five-screen Likhlo gallery, a portrait hero, résumé download, and contact links.

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Use **Other** as the Framework Preset.
3. Keep the repository root as the Root Directory.
4. Leave the Build Command empty and use **public** as the Output Directory.
5. Deploy. No environment variables or dependency installation are required.

The included `vercel.json` sets the framework, empty build command, and output directory.

## Local preview

```sh
python3 -m http.server 8000 --directory public
```

Open http://localhost:8000.

## Files

- `public/index.html`: sections and project cards
- `public/styles.css`: styling and responsive layouts
- `public/script.js`: project data, galleries, menus, and contact interactions
- `public/images/`: actual project screenshots
- `public/jawad-ahmed.jpeg`: portrait
- `public/Jawad-Ahmed-Resume.pdf`: downloadable résumé

## Editing

Edit project details and gallery captions in `public/script.js`, section text in `public/index.html`, and design rules in `public/styles.css`. Keep image filenames consistent with their HTML and JavaScript references.

Fonts are loaded from Google Fonts with system fallbacks. This export has no dependency on the original hosting provider. Repository access and Vercel deployment visibility are configured separately in those services.
