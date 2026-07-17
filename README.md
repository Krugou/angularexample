# AngularCraft

Production-ready Angular 22 app with Tailwind CSS, responsive reusable UI components, route-based pages, and GitHub Pages deployment via GitHub Actions.

Assumptions used in this setup:

1. Angular latest stable is Angular 22.
2. Repository name is `angularexample`, so GitHub Pages base path is `/angularexample/`.

## Project structure

```text
.
|- .github/workflows/deploy-gh-pages.yml
|- angular.json
|- tailwind.config.js
|- postcss.config.js
|- src/
|  |- styles.css
|  |- app/
|  |  |- app.ts
|  |  |- app.html
|  |  |- app.routes.ts
|  |  |- app.config.ts
|  |  |- pages/
|  |  |  |- home/
|  |  |  |- about/
|  |  |  |- features/
|  |  |  |- contact/
|  |  |- shared/ui/
|  |     |- navbar/
|  |     |- hero/
|  |     |- card/
|  |     |- button/
|  |     |- footer/
```

## Tailwind CSS setup

Tailwind is configured with:

1. `tailwind.config.js` content scanning `./src/**/*.{html,ts}`
2. `postcss.config.js` plugins (`tailwindcss`, `autoprefixer`)
3. `src/styles.css` directives:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`

Reusable utility-based elements are provided via Tailwind component layers:

1. Buttons (`.btn-primary`, `.btn-secondary`)
2. Cards (`.card-surface`)
3. Navigation state (`.nav-link`, `.nav-link-active`)
4. Section layout (`.section-wrap`)

## Routes included

1. `/` Home
2. `/about` About
3. `/features` Features
4. `/contact` Contact

## GitHub Pages compatibility

This project supports GitHub Pages subpath deployment by using:

1. `build:gh-pages` script with `--base-href /angularexample/`
2. Hash-based Angular routing (`withHashLocation()`) for static-host refresh safety
3. GitHub Actions workflow that builds and deploys `dist/angularexample/browser`

## Local development commands

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run start
```

Build production:

```bash
npm run build
```

Build with GitHub Pages base href:

```bash
npm run build:gh-pages
```

Optional local preview with GitHub Pages base href:

```bash
npm run start:gh-pages
```

Run tests:

```bash
npm run test
```

## Deployment to GitHub Pages

1. Push to the `main` branch.
2. In GitHub repository settings, enable Pages and set Source to GitHub Actions.
3. The workflow in `.github/workflows/deploy-gh-pages.yml` will:
   - install dependencies with `npm ci`
   - build using `npm run build:gh-pages`
   - upload `dist/angularexample/browser` as Pages artifact
   - deploy with `actions/deploy-pages`

## Final quick commands

```bash
# local dev
npm install
npm run start

# production build check
npm run build:gh-pages

# commit and push
git add .
git commit -m "feat: production Angular Tailwind app with GitHub Pages workflow"
git push origin main
```
