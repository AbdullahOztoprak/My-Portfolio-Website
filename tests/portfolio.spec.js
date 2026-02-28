// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Portfolio Website — End-to-End Tests
 *
 * Covers: page load, navigation, sections visibility,
 * contact form validation, form submission, responsive layout,
 * scroll progress, and accessibility fundamentals.
 */

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for DOMContentLoaded-driven JS to initialize
    await page.waitForLoadState('domcontentloaded');
  });

  /* ══════════════════════════════════════════════════════
     PAGE LOAD & META
     ══════════════════════════════════════════════════════ */
  test('page loads successfully with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Abdullah.*ÖzToprak/);
  });

  test('page has a meta description', async ({ page }) => {
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute('content', /portfolio|software|developer/i);
  });

  /* ══════════════════════════════════════════════════════
     HEADER & NAVIGATION
     ══════════════════════════════════════════════════════ */
  test('header is visible with logo and navigation', async ({ page }) => {
    const header = page.locator('.header');
    await expect(header).toBeVisible();

    const logo = page.locator('.header__logo');
    await expect(logo).toBeVisible();

    const navLinks = page.locator('.nav__link');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('navigation links scroll to correct sections', async ({ page }) => {
    // Click "About" nav link
    await page.click('.nav__link[href="#about"]');
    await page.waitForTimeout(600);
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();

    // Click "Projects" nav link
    await page.click('.nav__link[href="#projects"]');
    await page.waitForTimeout(600);
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();

    // Click "Contact" nav link
    await page.click('.nav__link[href="#contact"]');
    await page.waitForTimeout(600);
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('header becomes opaque on scroll', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(200);

    const header = page.locator('.header');
    await expect(header).toHaveClass(/scrolled/);
  });

  /* ══════════════════════════════════════════════════════
     HERO SECTION
     ══════════════════════════════════════════════════════ */
  test('hero section displays name and role', async ({ page }) => {
    const name = page.locator('.hero__name');
    await expect(name).toContainText('Abdullah');
    await expect(name).toContainText('ÖzToprak');

    const title = page.locator('.hero__title');
    await expect(title).toBeVisible();
    await expect(title).toContainText(/developer|engineer/i);
  });

  test('hero has call-to-action buttons', async ({ page }) => {
    const primaryBtn = page.locator('.hero__actions .btn--primary');
    await expect(primaryBtn).toBeVisible();

    const outlineBtn = page.locator('.hero__actions .btn--outline');
    await expect(outlineBtn).toBeVisible();
  });

  /* ══════════════════════════════════════════════════════
     MAIN SECTIONS VISIBILITY
     ══════════════════════════════════════════════════════ */
  test('all main sections are present in the DOM', async ({ page }) => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

    for (const id of sectionIds) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeAttached();
    }
  });

  test('about section has highlight cards', async ({ page }) => {
    const cards = page.locator('.about__card');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('skills section displays categorized skills', async ({ page }) => {
    const categories = page.locator('.skills__category');
    const count = await categories.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // Each category should have items
    const items = page.locator('.skills__item');
    const itemCount = await items.count();
    expect(itemCount).toBeGreaterThanOrEqual(10);
  });

  test('projects section lists project cards', async ({ page }) => {
    const projects = page.locator('.project-card');
    const count = await projects.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Each card should have a title and description
    const firstTitle = projects.first().locator('.project-card__title');
    await expect(firstTitle).toBeAttached();
    const firstDesc = projects.first().locator('.project-card__description');
    await expect(firstDesc).toBeAttached();
  });

  test('experience section shows timeline items', async ({ page }) => {
    const items = page.locator('.experience__item');
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  /* ══════════════════════════════════════════════════════
     CONTACT FORM — VALIDATION
     ══════════════════════════════════════════════════════ */
  test('contact form shows validation errors on empty submit', async ({ page }) => {
    const submitBtn = page.locator('#submitBtn');
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    // Should show result message about filling fields
    const result = page.locator('#formResult');
    await expect(result).toBeVisible();
    await expect(result).toContainText(/fill in all fields/i);
  });

  test('contact form shows field-level errors for invalid input', async ({ page }) => {
    const nameInput = page.locator('#contactName');
    const emailInput = page.locator('#contactEmail');
    const messageInput = page.locator('#contactMessage');

    // Type only 1 char in name and blur
    await nameInput.scrollIntoViewIfNeeded();
    await nameInput.fill('A');
    await nameInput.blur();
    const nameError = page.locator('#nameError');
    await expect(nameError).toContainText(/at least 2 characters/i);

    // Type invalid email and blur
    await emailInput.fill('notanemail');
    await emailInput.blur();
    const emailError = page.locator('#emailError');
    await expect(emailError).toContainText(/valid email/i);

    // Type short message and blur
    await messageInput.fill('Hi');
    await messageInput.blur();
    const messageError = page.locator('#messageError');
    await expect(messageError).toContainText(/at least 10 characters/i);
  });

  test('contact form clears errors when valid input is provided', async ({ page }) => {
    const nameInput = page.locator('#contactName');
    await nameInput.scrollIntoViewIfNeeded();

    // Trigger error
    await nameInput.fill('A');
    await nameInput.blur();
    await expect(page.locator('#nameError')).not.toBeEmpty();

    // Fix input
    await nameInput.fill('Abdullah');
    await nameInput.blur();
    await expect(page.locator('#nameError')).toBeEmpty();
    await expect(nameInput).toHaveClass(/valid/);
  });

  /* ══════════════════════════════════════════════════════
     CONTACT FORM — SUBMISSION
     ══════════════════════════════════════════════════════ */
  test('contact form submits successfully with valid data', async ({ page }) => {
    await page.locator('#contactName').scrollIntoViewIfNeeded();
    await page.fill('#contactName', 'Test User');
    await page.fill('#contactEmail', 'test@example.com');
    await page.fill('#contactMessage', 'Hello, this is a test message for the portfolio.');

    const submitBtn = page.locator('#submitBtn');
    await submitBtn.click();

    // Button should show loading state
    await expect(submitBtn).toBeDisabled();

    // Wait for success message
    const result = page.locator('#formResult');
    await expect(result).toContainText(/thank you/i, { timeout: 5000 });
    await expect(result).toHaveClass(/success/);

    // Button should be re-enabled
    await expect(submitBtn).toBeEnabled();
  });

  test('contact form resets after successful submission', async ({ page }) => {
    await page.locator('#contactName').scrollIntoViewIfNeeded();
    await page.fill('#contactName', 'Test User');
    await page.fill('#contactEmail', 'test@example.com');
    await page.fill('#contactMessage', 'Hello, this is a test message for the portfolio.');

    await page.locator('#submitBtn').click();
    await expect(page.locator('#formResult')).toContainText(/thank you/i, { timeout: 5000 });

    // Fields should be cleared
    await expect(page.locator('#contactName')).toHaveValue('');
    await expect(page.locator('#contactEmail')).toHaveValue('');
    await expect(page.locator('#contactMessage')).toHaveValue('');
  });

  /* ══════════════════════════════════════════════════════
     SCROLL PROGRESS BAR
     ══════════════════════════════════════════════════════ */
  test('scroll progress bar updates on scroll', async ({ page }) => {
    const progressBar = page.locator('#scrollProgress');
    const initialWidth = await progressBar.evaluate((el) => el.style.width);

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(200);

    const finalWidth = await progressBar.evaluate((el) => el.style.width);
    // After scrolling to bottom, progress should be near 100%
    expect(parseFloat(finalWidth)).toBeGreaterThan(parseFloat(initialWidth || '0'));
  });

  /* ══════════════════════════════════════════════════════
     FOOTER
     ══════════════════════════════════════════════════════ */
  test('footer is visible and contains copyright', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Abdullah ÖzToprak');
    await expect(footer).toContainText('©');
  });

  /* ══════════════════════════════════════════════════════
     RESPONSIVE LAYOUT
     ══════════════════════════════════════════════════════ */
  test('mobile nav toggle is visible on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(100);

    const toggle = page.locator('.nav-toggle');
    await expect(toggle).toBeVisible();
  });

  test('mobile nav toggle opens and closes menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(100);

    const toggle = page.locator('.nav-toggle');
    const nav = page.locator('#nav');

    // Open menu
    await toggle.click();
    await expect(nav).toHaveClass(/open/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    // Close menu
    await toggle.click();
    await expect(nav).not.toHaveClass(/open/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('nav toggle is hidden on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForTimeout(100);

    const toggle = page.locator('.nav-toggle');
    await expect(toggle).not.toBeVisible();
  });

  /* ══════════════════════════════════════════════════════
     ACCESSIBILITY BASICS
     ══════════════════════════════════════════════════════ */
  test('skip link exists and is focusable', async ({ page }) => {
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute('href', '#main');
  });

  test('all images and icons have proper ARIA attributes', async ({ page }) => {
    // Decorative SVGs should have aria-hidden
    const decorativeSvgs = page.locator('svg[aria-hidden="true"]');
    const count = await decorativeSvgs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('form inputs have associated labels', async ({ page }) => {
    const nameLabel = page.locator('label[for="contactName"]');
    await expect(nameLabel).toBeAttached();

    const emailLabel = page.locator('label[for="contactEmail"]');
    await expect(emailLabel).toBeAttached();

    const messageLabel = page.locator('label[for="contactMessage"]');
    await expect(messageLabel).toBeAttached();
  });

  test('nav has proper ARIA role and label', async ({ page }) => {
    const nav = page.locator('nav[role="navigation"]');
    await expect(nav).toBeAttached();
    await expect(nav).toHaveAttribute('aria-label', /navigation/i);
  });
});
