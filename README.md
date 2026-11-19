# Elham Shojaei — Frontend Engineer Portfolio

A responsive portfolio website showcasing Elham Shojaei's frontend engineering experience, skills, selected projects, and contact information. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Portfolio sections for projects, about, skills, experience, and contact
- Individual project detail pages
- Responsive layout with motion-based reveal effects
- Downloadable resume at [`public/resume.pdf`](public/resume.pdf)
- Direct email, LinkedIn, and GitHub links

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animation
- [Lucide](https://lucide.dev/) icons

## Getting started

### Requirements

- Node.js (current LTS recommended)
- npm (a `package-lock.json` is included)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page refreshes as you edit source files.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── app/                   # App Router pages, layout, and global styles
├── components/
│   ├── layout/             # Navbar and footer
│   ├── sections/           # Portfolio page sections
│   └── ui/                 # Shared presentation components
└── data/projects.ts        # Project portfolio content
public/
└── resume.pdf              # Downloadable resume
```

## Updating portfolio content

- Edit section copy and experience in `src/components/sections/`.
- Update the project list in `src/data/projects.ts`.
- Replace `public/resume.pdf` to publish an updated resume.
- Update social and contact URLs in the Hero and Contact components when profiles change.

## Production

Build and run the production site with:

```bash
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js. See the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
