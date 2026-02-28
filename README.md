# Abdullah ÖzToprak — Portfolio Website

A modern, responsive personal portfolio website built with Node.js, Express, and vanilla JavaScript. Features smooth animations, contact form with server-side validation, and comprehensive Playwright E2E tests.

## Features

- **Semantic HTML5** with full accessibility support (ARIA labels, keyboard navigation, skip links)
- **Modern CSS** using custom properties, Flexbox, Grid, and responsive design (mobile-first)
- **Smooth UX** — scroll progress bar, active nav highlighting, fade-in animations, sticky header
- **Contact form** — client-side + server-side validation with real-time feedback
- **Node.js Express backend** — REST API architecture with proper error handling
- **Playwright E2E tests** — 20+ tests covering navigation, forms, responsiveness, and accessibility

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | HTML5, CSS3, Vanilla JS (ES6+)|
| Backend   | Node.js, Express              |
| Testing   | Playwright                    |

## Project Structure

```
├── public/
│   ├── index.html          # Semantic HTML with all sections
│   ├── style.css           # Design system with CSS custom properties
│   └── script.js           # Modular vanilla JavaScript
├── server/
│   ├── index.js            # Express app configuration
│   ├── routes/
│   │   └── contact.js      # Contact API route
│   └── controllers/
│       └── contactController.js  # Validation & processing
├── tests/
│   └── portfolio.spec.js   # Playwright E2E test suite
├── index.js                # Server entry point
├── package.json
├── playwright.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```sh
git clone https://github.com/AbdullahOztoprak/My-Portfolio-Website.git
cd My-Portfolio-Website
npm install
```

### Start the Server

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Tests

1. Start the server in one terminal: `npm start`
2. In another terminal:

```sh
npm test
```

Run tests in headed mode:

```sh
npm run test:headed
```

## Sections

| Section     | Description                                      |
|-------------|--------------------------------------------------|
| Hero        | Name, title, intro, and CTA buttons              |
| About       | Bio and highlight cards (experience, projects)    |
| Skills      | Categorized technical skills                      |
| Projects    | Featured project cards with tech tags and links   |
| Experience  | Timeline-style work and education history         |
| Contact     | Validated contact form with server-side processing|

## Design Principles

- **Minimal & professional** — clean typography, consistent spacing, subtle animations
- **Responsive** — mobile-first design that works on all screen sizes
- **Accessible** — semantic HTML, ARIA attributes, keyboard navigation, reduced-motion support
- **Fast** — no external JS dependencies, optimized CSS, minimal payload

---

© 2025 Abdullah ÖzToprak
