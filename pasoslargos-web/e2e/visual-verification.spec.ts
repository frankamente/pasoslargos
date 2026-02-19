import { test, expect } from '@playwright/test';

test.describe('Visual Verification', () => {
    test('homepage visual check', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('/');

        // Wait for the logo or some key element to be visible
        await expect(page.locator('.logo')).toBeVisible();

        // Take a screenshot of the homepage
        await page.screenshot({ path: 'e2e/screenshots/homepage.png', fullPage: true });

        // In a real visual regression test, we would compare with a baseline:
        // await expect(page).toHaveScreenshot('homepage.png');

        console.log('Screenshot saved to e2e/screenshots/homepage.png');
    });

    test('responsive check - mobile', async ({ page }) => {
        // Set viewport to mobile size
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Check if menu toggle is visible
        await expect(page.locator('.menu-toggle')).toBeVisible();

        await page.screenshot({ path: 'e2e/screenshots/mobile-homepage.png' });
    });
});
