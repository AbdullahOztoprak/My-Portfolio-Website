const { test, expect } = require('@playwright/test');

test('homepage has main nav with buttons', async ({ page }) => {
  // Use baseURL from config to allow using relative paths
  await page.goto('/');

  const nav = page.locator('.main-nav');
  await expect(nav).toBeVisible();

  const buttons = nav.locator('a');
  const count = await buttons.count();
  expect(count).toBeGreaterThan(0);

  // check first button is visible and has reasonable padding/border-radius
  if (count > 0) {
    const first = buttons.nth(0);
    await expect(first).toBeVisible();
    // basic style checks (existence) - not strict pixel checks
    const br = await first.evaluate(el => getComputedStyle(el).borderRadius);
    expect(br).not.toBe('0px');
  }
});
