const { test, expect } = require('@playwright/test');

test.describe('Portfolio Website', () => {

  test('Homepage loads successfully and all main sections are present', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Abdullah ÖzToprak/);
    await expect(page.locator('h1')).toHaveText('Abdullah ÖzToprak');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('section#experience')).toBeVisible();
    await expect(page.locator('section#education')).toBeVisible();
    await expect(page.locator('section#projects')).toBeVisible();
    await expect(page.locator('section#contact')).toBeVisible();
  });


  test('Contact form submits and shows thank you message, disables button during submit', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message.');
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    // Button should be disabled right after click
    await expect(submitBtn).toBeDisabled();
    // Wait for thank you message
    await expect(page.locator('#formResult')).toContainText('Thank you for your message');
    // Button should be enabled again
    await expect(submitBtn).toBeEnabled();
  });
  
  test('Footer is visible on the homepage', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Abdullah ÖzToprak');
  });
  
  test('Navigation links scroll to correct section', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('nav a[href="#projects"]');
    await expect(page.locator('h2', { hasText: 'Projects' })).toBeVisible();
    await page.click('nav a[href="#education"]');
    await expect(page.locator('h2', { hasText: 'Education' })).toBeVisible();
  });


  test('Contact form shows error on empty submit and instant validation works', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    await expect(page.locator('#formResult')).toContainText('Please fill in all fields');
    // Fill name, error should disappear
    await page.fill('input[name="name"]', 'A');
    await expect(page.locator('input[name="name"]')).toHaveCSS('border-color', 'rgb(204, 204, 204)');
    // Fill email with invalid, error remains
    await page.fill('input[name="email"]', 'invalid');
    await submitBtn.click();
    await expect(page.locator('#formResult')).toContainText('Please fill in all fields');
    // Fill email with valid, error should disappear
    await page.fill('input[name="email"]', 'a@a.com');
    await page.fill('textarea[name="message"]', 'msg');
    await submitBtn.click();
    await expect(page.locator('#formResult')).not.toContainText('Please fill in all fields');
  });

  test('Project section is visible and lists projects', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const projectsSection = page.locator('section#projects');
    await expect(projectsSection).toBeVisible();
    await expect(projectsSection.locator('li')).toHaveCountGreaterThan(0);
  });
});
