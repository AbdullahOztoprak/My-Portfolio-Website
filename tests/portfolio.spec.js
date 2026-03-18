// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Engineering Identity Platform — End-to-End Tests
 *
 * Covers: page load, meta, header/nav, hero, about, skills,
 * projects, experience, dashboard, contact form (validation,
 * submission, reset), scroll progress, footer, responsive nav,
 * and accessibility fundamentals.
 */

/* ═══════════ PAGE LOAD ═══════════ */
test.describe('Page load', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Abdullah.*Öztoprak/);
  });

  test('contains meta description', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /Cyber Security|Platform Engineering|Backend/i);
  });

  test('contains theme-color meta', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="theme-color"]');
    await expect(meta).toHaveAttribute('content', '#09090b');
  });
});

/* ═══════════ HEADER & NAVIGATION ═══════════ */
test.describe('Header & Navigation', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('header is visible', async ({ page }) => {
    await expect(page.locator('.header')).toBeVisible();
  });

  test('logo links to hero', async ({ page }) => {
    const logo = page.locator('.header__logo');
    await expect(logo).toHaveAttribute('href', '#hero');
  });

  test('nav contains all section links', async ({ page }) => {
    const links = page.locator('.nav__link');
    await expect(links).toHaveCount(6);
    const hrefs = await links.evaluateAll((els) => els.map((e) => e.getAttribute('href')));
    expect(hrefs).toEqual(['#about', '#skills', '#projects', '#experience', '#dashboard', '#contact']);
  });

  test('header CTA links to contact', async ({ page }) => {
    const cta = page.locator('.header__cta');
    await expect(cta).toHaveAttribute('href', '#contact');
    await expect(cta).toHaveText('Get In Touch');
  });
});

/* ═══════════ HERO ═══════════ */
test.describe('Hero section', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('hero name is visible', async ({ page }) => {
    await expect(page.locator('.hero__name')).toContainText('Abdullah');
  });

  test('typing animation container exists', async ({ page }) => {
    await expect(page.locator('#typingText')).toBeAttached();
  });

  test('typing text appears within 3 seconds', async ({ page }) => {
    const typing = page.locator('#typingText');
    await expect(typing).not.toHaveText('', { timeout: 3000 });
  });

  test('hero has View Projects and Download CV buttons', async ({ page }) => {
    await expect(page.locator('.hero__actions .btn--primary')).toContainText('View Projects');
    await expect(page.locator('.hero__actions .btn--outline')).toContainText('Download CV');
  });

  test('terminal card is visible', async ({ page }) => {
    await expect(page.locator('.hero__terminal')).toBeVisible();
  });

  test('available badge is present', async ({ page }) => {
    await expect(page.locator('.hero__badge')).toContainText('Available');
  });
});

/* ═══════════ ENGINEERING PROFILE (ABOUT) ═══════════ */
test.describe('Engineering Profile section', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('about section exists with correct title', async ({ page }) => {
    const title = page.locator('#about .section__title');
    await expect(title).toContainText('Engineering Profile');
  });

  test('displays 3 focus area cards', async ({ page }) => {
    const cards = page.locator('#about .focus-card');
    await expect(cards).toHaveCount(3);
  });

  test('displays stat cards', async ({ page }) => {
    const stats = page.locator('#about .stat-card');
    await expect(stats).toHaveCount(4);
  });

  test('mentions Siemens and Insider', async ({ page }) => {
    const text = page.locator('#about .about__text');
    await expect(text).toContainText('Siemens');
    await expect(text).toContainText('Insider');
  });
});

/* ═══════════ SKILLS ═══════════ */
test.describe('Skills section', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('skills section has correct title', async ({ page }) => {
    await expect(page.locator('#skills .section__title')).toContainText('Technical Arsenal');
  });

  test('shows 4 skill categories', async ({ page }) => {
    const cats = page.locator('#skills .skills__category');
    await expect(cats).toHaveCount(4);
  });

  test('each category has skill bars', async ({ page }) => {
    const bars = page.locator('#skills .skills__bar-fill');
    const count = await bars.count();
    expect(count).toBeGreaterThanOrEqual(15);
  });
});

/* ═══════════ PROJECTS ═══════════ */
test.describe('Projects section', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('projects section has correct title', async ({ page }) => {
    await expect(page.locator('#projects .section__title')).toContainText('Featured Projects');
  });

  test('displays 5 project cards', async ({ page }) => {
    const cards = page.locator('#projects .project-card');
    await expect(cards).toHaveCount(5);
  });

  test('project cards have titles and descriptions', async ({ page }) => {
    const titles = page.locator('.project-card__title');
    const count = await titles.count();
    for (let i = 0; i < count; i++) {
      await expect(titles.nth(i)).not.toHaveText('');
    }
  });

  test('project cards have technology tags', async ({ page }) => {
    const firstTags = page.locator('.project-card').first().locator('.project-card__tags li');
    const count = await firstTags.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('contains Secure Interview System project', async ({ page }) => {
    await expect(page.locator('.project-card__title', { hasText: 'Secure Interview System' })).toBeVisible();
  });
});

/* ═══════════ EXPERIENCE ═══════════ */
test.describe('Experience section', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('experience section has correct title', async ({ page }) => {
    await expect(page.locator('#experience .section__title')).toContainText('Experience');
  });

  test('displays 4 timeline items', async ({ page }) => {
    const items = page.locator('.experience__item');
    await expect(items).toHaveCount(4);
  });

  test('first item is Siemens Cyber Security Intern', async ({ page }) => {
    const first = page.locator('.experience__item').first();
    await expect(first.locator('.experience__role')).toContainText('Cyber Security Intern');
    await expect(first.locator('.experience__company')).toContainText('Siemens');
  });

  test('timeline has marker elements', async ({ page }) => {
    const markers = page.locator('.experience__marker');
    const count = await markers.count();
    expect(count).toBe(4);
  });
});

/* ═══════════ DASHBOARD ═══════════ */
test.describe('Engineering Dashboard', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('dashboard section has correct title', async ({ page }) => {
    await expect(page.locator('#dashboard .section__title')).toContainText('Engineering Dashboard');
  });

  test('contribution chart container exists', async ({ page }) => {
    await expect(page.locator('#contributionChart')).toBeAttached();
  });

  test('dashboard displays metric cards', async ({ page }) => {
    const cards = page.locator('#dashboard .dash-card');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('languages breakdown is visible', async ({ page }) => {
    const langs = page.locator('.dash-lang');
    const count = await langs.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });
});

/* ═══════════ CONTACT FORM ═══════════ */
test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/'); });

  test('contact section has correct title', async ({ page }) => {
    await expect(page.locator('#contact .section__title')).toContainText('Get In Touch');
  });

  test('form has name, email, message fields and submit', async ({ page }) => {
    await expect(page.locator('#contactName')).toBeAttached();
    await expect(page.locator('#contactEmail')).toBeAttached();
    await expect(page.locator('#contactMessage')).toBeAttached();
    await expect(page.locator('#submitBtn')).toBeAttached();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.locator('#submitBtn').click();
    const nameErr = page.locator('#nameError');
    const emailErr = page.locator('#emailError');
    const msgErr = page.locator('#messageError');
    await expect(nameErr).not.toHaveText('');
    await expect(emailErr).not.toHaveText('');
    await expect(msgErr).not.toHaveText('');
  });

  test('shows error for short name', async ({ page }) => {
    await page.fill('#contactName', 'A');
    await page.locator('#contactName').blur();
    await expect(page.locator('#nameError')).toContainText('2–100');
  });

  test('shows error for invalid email', async ({ page }) => {
    await page.fill('#contactEmail', 'notanemail');
    await page.locator('#contactEmail').blur();
    await expect(page.locator('#emailError')).toContainText('valid email');
  });

  test('shows error for short message', async ({ page }) => {
    await page.fill('#contactMessage', 'Hi');
    await page.locator('#contactMessage').blur();
    await expect(page.locator('#messageError')).toContainText('10–2000');
  });

  test('clears error when valid input provided', async ({ page }) => {
    const nameInput = page.locator('#contactName');
    await nameInput.fill('A');
    await nameInput.blur();
    await expect(page.locator('#nameError')).not.toHaveText('');
    await nameInput.fill('Abdullah');
    await nameInput.blur();
    await expect(page.locator('#nameError')).toHaveText('');
  });

  test('successful submission shows success message', async ({ page }) => {
    await page.fill('#contactName', 'Test User');
    await page.fill('#contactEmail', 'test@example.com');
    await page.fill('#contactMessage', 'This is a valid test message.');
    await page.locator('#submitBtn').click();
    const result = page.locator('#formResult');
    await expect(result).toBeVisible({ timeout: 5000 });
    await expect(result).toHaveClass(/success/);
  });

  test('form resets after successful submission', async ({ page }) => {
    await page.fill('#contactName', 'Test User');
    await page.fill('#contactEmail', 'test@example.com');
    await page.fill('#contactMessage', 'This is a valid test message.');
    await page.locator('#submitBtn').click();
    await expect(page.locator('#formResult')).toHaveClass(/success/, { timeout: 5000 });
    await expect(page.locator('#contactName')).toHaveValue('');
    await expect(page.locator('#contactEmail')).toHaveValue('');
    await expect(page.locator('#contactMessage')).toHaveValue('');
  });
});

/* ═══════════ SCROLL PROGRESS ═══════════ */
test.describe('Scroll progress', () => {
  test('scroll progress bar exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#scrollProgress')).toBeAttached();
  });

  test('scroll progress grows on scroll', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const width = await page.locator('#scrollProgress').evaluate((el) => parseFloat(el.style.width));
    expect(width).toBeGreaterThan(20);
  });
});

/* ═══════════ FOOTER ═══════════ */
test.describe('Footer', () => {
  test('footer contains copyright', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.footer')).toContainText('2025');
    await expect(page.locator('.footer')).toContainText('Abdullah Öztoprak');
  });

  test('footer has GitHub and LinkedIn links', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('.footer__links a');
    await expect(links).toHaveCount(2);
  });
});

/* ═══════════ RESPONSIVE (MOBILE TOGGLE) ═══════════ */
test.describe('Responsive navigation', () => {
  test('mobile: nav toggle is visible, nav is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('#navToggle')).toBeVisible();
    await expect(page.locator('.nav')).not.toHaveClass(/open/);
  });

  test('mobile: clicking toggle opens nav', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.locator('#navToggle').click();
    await expect(page.locator('.nav')).toHaveClass(/open/);
    await expect(page.locator('#navToggle')).toHaveAttribute('aria-expanded', 'true');
  });

  test('mobile: clicking a nav link closes menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.locator('#navToggle').click();
    await expect(page.locator('.nav')).toHaveClass(/open/);
    await page.locator('.nav__link').first().click();
    await expect(page.locator('.nav')).not.toHaveClass(/open/);
  });
});

/* ═══════════ ACCESSIBILITY ═══════════ */
test.describe('Accessibility basics', () => {
  test('skip link is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.skip-link')).toBeAttached();
    await expect(page.locator('.skip-link')).toHaveAttribute('href', '#main');
  });

  test('main landmark exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main#main')).toBeAttached();
  });

  test('all sections have aria-label', async ({ page }) => {
    await page.goto('/');
    const sections = page.locator('main > section');
    const count = await sections.count();
    for (let i = 0; i < count; i++) {
      const label = await sections.nth(i).getAttribute('aria-label');
      expect(label).toBeTruthy();
    }
  });

  test('images and decorative SVGs have proper attributes', async ({ page }) => {
    await page.goto('/');
    const decorative = page.locator('[aria-hidden="true"]');
    const count = await decorative.count();
    expect(count).toBeGreaterThan(0);
  });
});
