const { test, expect } = require('@playwright/test');

test.describe('Portfolio Website', () => {
  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Abdullah ÖzToprak/);
    await expect(page.locator('h1')).toHaveText('Abdullah ÖzToprak');
  });

  test('Contact form submits and shows thank you message', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message.');
    await page.click('button[type="submit"]');
    await expect(page.locator('#formResult')).toContainText('Thank you for your message');
  });
});
