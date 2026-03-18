# Engineering Identity Platform

> A modern, dark-themed portfolio platform for **Abdullah Öztoprak** — Computer Engineering student focused on Cyber Security, Platform Engineering, and Backend Systems.

Inspired by Vercel, Stripe, Linear, and GitHub — this isn't a typical portfolio. It's a hybrid of LinkedIn, GitHub, and a personal engineering dashboard.

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, typing animation (roles cycle), terminal card, CTA buttons |
| 02 | **Engineering Profile** | About text, focus area cards, stat counters |
| 03 | **Technical Arsenal** | Skill categories with animated progress bars |
| 04 | **Featured Projects** | GitHub-style project cards (5 projects) |
| 05 | **Experience** | Animated timeline — Siemens, Insider, FIRST Robotics, Tutor |
| 06 | **Engineering Dashboard** | Mock contribution chart, repo count, language breakdown |
| 07 | **Contact** | Validated form + email, LinkedIn, GitHub links |

## Tech Stack

- **Frontend** — Semantic HTML5, CSS3 (custom properties, grid, flexbox), Vanilla ES6+ JavaScript
- **Backend** — Node.js / Express with security headers, input sanitization, XSS prevention
- **Testing** — Playwright E2E (30+ tests), parallel execution, cross-browser
- **Design** — Dark mode, Inter + JetBrains Mono, CSS animations, IntersectionObserver reveals

## Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium

# Start the server
npm start
# → http://localhost:3000

# Run tests
npm test

# Run tests with browser visible
npm run test:headed
```

## Project Structure

```
├── index.js                 # Entry point — starts Express server
├── server/
│   ├── index.js             # Express app, middleware, static serving
│   ├── routes/contact.js    # POST /api/contact route
│   └── controllers/
│       └── contactController.js  # Validation & sanitization
├── public/
│   ├── index.html           # Full platform UI (7 sections)
│   ├── style.css            # Design system — dark theme, animations
│   └── script.js            # Typing engine, counters, forms, reveals
├── tests/
│   └── portfolio.spec.js    # 30+ Playwright E2E tests
├── playwright.config.js     # Playwright configuration
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server on port 3000 |
| `npm run dev` | Start with `--watch` flag (auto-restart) |
| `npm test` | Run all Playwright tests headless |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Open Playwright UI runner |

## License

MIT © 2025 Abdullah Öztoprak
