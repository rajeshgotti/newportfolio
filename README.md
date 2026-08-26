# Alex Morgan — Angular Portfolio

A production-style personal portfolio built with **Angular 18 (standalone components)**,
TypeScript, SCSS and Bootstrap, inspired by the layout, interaction language and visual
rhythm of a dark, animated single-page developer portfolio: full-screen hero with a
typewriter role animation, a scroll-triggered reveal system, an animated skills/stats
section, a filterable portfolio grid with a project detail modal, a resume timeline,
a testimonials slider and a working contact form.

All personal information, projects, images and contact details in this project are
**dummy placeholder content** — no proprietary text, images, or assets were copied from
any reference site.

---

## Tech Stack

- Angular 18 (standalone components, `@if` / `@for` control flow)
- TypeScript
- SCSS with a CSS-variable based design system
- Bootstrap 5 (grid/utility helpers) + Bootstrap Icons
- Reactive Forms for the contact form
- IntersectionObserver-based scroll-reveal directive (no extra animation library)

## Project Structure

```text
portfolio/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── README.md
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss              # global design tokens & base styles
│   │
│   └── app/
│       ├── app.component.ts/html/scss   # assembles all sections
│       ├── app.config.ts
│       │
│       ├── components/
│       │   ├── navbar/          # sticky nav + mobile sidebar menu
│       │   ├── hero/            # fullscreen hero, typewriter, animated bg
│       │   ├── about/           # bio, info list, photo
│       │   ├── skills/          # animated stat counters + skill bars
│       │   ├── services/        # services grid
│       │   ├── portfolio/       # filterable project grid + modal
│       │   ├── experience/      # tabbed resume timeline
│       │   ├── testimonials/    # testimonial slider
│       │   ├── contact/         # reactive contact form
│       │   └── footer/
│       │
│       ├── models/               # Project, Skill, Experience, Testimonial types
│       └── shared/
│           └── reveal.directive.ts   # scroll-in-view animation directive
│
└── assets/
    ├── images/
    └── icons/
```

## Getting Started

```bash
npm install
ng serve
```

Then open **http://localhost:4200**.

To create a production build:

```bash
ng build
```

Output is written to `dist/portfolio`.

## Customizing

- **Colors / typography / spacing** — edit the CSS custom properties at the top of
  `src/styles.scss` (`--primary-color`, `--background-color`, `--font-heading`, etc.).
  Every component reuses these tokens, so changing them re-themes the whole site.
- **Content** — each section's data (projects, skills, experience, testimonials,
  services) lives directly in that component's `.ts` file as a typed array, so it's
  easy to replace with real content or wire up to an API later.
- **Images** — placeholder photography currently comes from Unsplash source URLs;
  swap the `image` / `avatar` fields for your own assets in `src/assets/images`.
- **Resume download** — the "Download CV" button in the About section points to
  `assets/documents/alex-morgan-resume.pdf`; add a PDF at that path (or update the
  link) to make it functional.
- **Contact form** — the form validates client-side with Angular Reactive Forms and
  currently simulates a successful submission. Wire `onSubmit()` in
  `contact.component.ts` to a real email/API endpoint when ready.

## Responsive Breakpoints

The layout has been tested down to mobile widths (375px) and up through large desktop
(1920px), with dedicated adjustments at 1200px, 991px, 767px and 575px for the
navigation, hero, grids and timeline.
