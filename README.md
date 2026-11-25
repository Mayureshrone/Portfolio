# Mayuresh Rone — Developer Portfolio

A responsive, single-page portfolio for Mayuresh Rone. Built with React and Vite, with a dark/light theme, accessible navigation, project previews, education and internship timelines, a resume link, and an EmailJS-ready contact form.

## Features

- Responsive layout for desktop, tablet, and mobile widths
- Sticky navigation with scroll tracking and a mobile menu
- Dark theme by default, with a saved light-theme option
- Lightweight scroll reveals and a role typing animation; both respect reduced-motion preferences
- Lazy-loaded below-the-fold React sections
- Data-driven project, skill, experience, and education content in `src/data/`
- CSS-rendered project previews, clearly labeled as conceptual rather than screenshots
- Resume preview, PDF viewing, and download using the supplied PDF in `public/`
- Contact form validation and optional EmailJS delivery
- SEO and Open Graph metadata, custom favicon, keyboard focus styles, and skip navigation

## Technologies

- React 19 and Vite 8
- JavaScript (ES modules) and CSS
- Framer Motion for scroll reveals and Lucide React for interface icons
- EmailJS REST API for optional browser-side form delivery

## Requirements

- Node.js 20.19+ or 22.12+ (required by the installed Vite 8 version)
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL, normally <http://localhost:5173/>.

## Contact form setup

The form validates inputs in the browser. Until EmailJS is configured, it displays a setup message and invites visitors to use the direct email link.

1. Create an EmailJS service and an email template. Configure template fields for `name`, `email`, `reply_to`, `subject`, and `message`.
2. Copy `.env.example` to `.env.local` and fill in the service ID, template ID, and EmailJS public key.
3. Restart the Vite dev server after changing environment values.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Vite embeds `VITE_` values in browser code. Use only EmailJS's intended public key here; never add a private key, account password, or other server-side secret. Configure allowed origins and rate limits in EmailJS for the deployed domain.

## Production build and preview

```sh
npm run build
npm run preview
```

The build output is written to `dist/`. The preview server normally runs at <http://localhost:4173/>. Preview the production build locally before publishing.

## Deploy to Vercel

1. Push this project to a GitHub repository you own (see below).
2. In Vercel, choose **Add New → Project**, import that repository, and keep the detected Vite settings. The build command is `npm run build`; the output directory is `dist`.
3. If using the contact form, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in the Vercel project's **Settings → Environment Variables**. Add them to each environment you use, then redeploy.
4. To use a custom domain, open **Settings → Domains**, add the domain, and follow the DNS records Vercel provides at your domain registrar. Wait for DNS verification.
5. Vercel provisions HTTPS/SSL after the domain's DNS records are verified. Confirm the domain shows as valid in Vercel before sharing it.

No live deployment URL is set yet. Add it here once a deployment exists: `https://YOUR-DEPLOYMENT.vercel.app`.

## Publish to GitHub

Create an empty repository on GitHub, then connect this local project (replace the placeholder with your repository URL):

```sh
git init
git add .
git commit -m "Build Mayuresh Rone portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

The repository URL is intentionally a placeholder until you create the repository. `.env.local` and other `.env.*` files are ignored by Git; do not commit credentials.

## Project structure

```text
public/
  favicon.svg
  resume/
    Mayuresh-Rone-Resume.pdf
src/
  components/       Reusable navigation, buttons, cards, timelines, icons, and reveal behavior
  data/             Portfolio content kept separate from presentation
  sections/         Hero, about, skills, projects, experience, education, resume, and contact
  App.jsx
  App.css
  index.css
  main.jsx
.env.example
index.html
vite.config.js
```

## Screenshots

Add real screenshots after running the site and replace these placeholders:

| Desktop | Mobile |
| --- | --- |
| `docs/screenshots/desktop.png` | `docs/screenshots/mobile.png` |

Live website: `https://YOUR-DEPLOYMENT.vercel.app`  
GitHub repository: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY`

## Design notes

- The supplied resume PDF is preserved in `public/` and linked by the navbar, hero, and resume section.
- Project screenshots were not present in the workspace, so the cards use original CSS illustrations marked “Conceptual UI preview.” No project repository links are shown because no verified project repository URLs were supplied.
- The contact form requires EmailJS setup for delivery. Direct email remains available even before setup.
- To keep the design lightweight, there are no project image downloads or background video assets. CSS previews reserve space and avoid external image requests.

## Challenges and solutions

- **No supplied project screenshots:** each project gets a lightweight CSS illustration and an explicit conceptual-preview label, so the portfolio does not imply these are captured product screens.
- **No EmailJS configuration in the workspace:** the form reports its setup state and keeps a direct email link available until the three public EmailJS values are configured.
- **Motion and small screens:** animations are brief, reduced-motion preferences are respected, and the layout switches to a compact navigation and single-column cards on narrow viewports.
