import { test, expect } from '@playwright/test';

test('home loads and main sections render', async ({ page }) => {
  // baseURL in playwright config exists
  await page.goto('/');

  // The page actually loaded (basic check)
  await expect(page.locator('body')).toBeVisible();

  // Make sure sections exist
  await expect(page.locator('#journey')).toBeVisible();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();

  // Scroll to projects so buttons are clickable
  await page.locator('#projects').scrollIntoViewIfNeeded();

  // Click "More" for the timeline portfolio project using CSS selector
  const moreBtn = page.locator(
    '#projects [data-testid="project-more-timeline-portfolio"]',
  );

  await expect(moreBtn).toBeVisible();
  await moreBtn.click();

  // Drawer should show close button
  const closeBtn = page.locator('[data-testid="project-drawer-close"]');
  await expect(closeBtn).toBeVisible();
});
