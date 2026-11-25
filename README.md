# Mayuresh Rone — Portfolio

Responsive React portfolio built with Vite. Includes projects, skills, education, internship experience, resume, and contact form.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build
npm run preview   # http://localhost:4173
```

## Contact form

EmailJS is optional. Copy `.env.example` to `.env.local`, add the EmailJS service ID, template ID, and public key, then restart Vite. Without these values, the form shows a setup message and provides a direct email link. Never put private credentials in Vite environment variables.

## Deploy

Push the project to GitHub, then import the repository in Vercel. Use `npm run build` as the build command and `dist` as the output directory. Add the EmailJS variables in Vercel settings if needed. For a custom domain, add it under **Settings → Domains**, configure the DNS records Vercel provides, and wait for HTTPS to activate.

## Challenges and fixes

- A blank screen was caused by stale `Github` and `Linkedin` references after switching to inline brand icons. Removing the undefined references fixed the runtime error; build and lint pass.
- No project screenshots were supplied, so project cards use CSS illustrations labeled as conceptual previews.

## Project layout

- `src/sections/` — page sections
- `src/components/` — reusable UI
- `src/data/` — project, skill, education, and experience content
- `public/resume/Mayuresh-Rone-Resume.pdf` — resume

Live site: `https://YOUR-DEPLOYMENT.vercel.app` · Repository: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY`
