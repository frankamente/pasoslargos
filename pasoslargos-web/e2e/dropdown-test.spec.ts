import { test, expect } from '@playwright/test';

test.describe('Navigation Interaction', () => {
    test('dropdown hover state', async ({ page }) => {
        await page.goto('/');

        // Find the 'Actividades' link
        const actividadesLink = page.getByRole('link', { name: 'Actividades', exact: true });

        // Hover over the link
        await actividadesLink.hover();

        // Wait for the dropdown to be visible
        const dropdown = page.locator('.dropdown:has-text("Actividades") .dropdown-content');
        await expect(dropdown).toBeVisible();

        // Move mouse slowly towards the dropdown
        const box = await actividadesLink.boundingBox();
        const dropdownBox = await dropdown.boundingBox();

        if (box && dropdownBox) {
            // Move from bottom of link to middle of first dropdown item
            const startX = box.x + box.width / 2;
            const startY = box.y + box.height - 2;
            const endY = dropdownBox.y + 20;

            console.log(`Moving mouse from ${startX},${startY} to ${startX},${endY}`);

            await page.mouse.move(startX, startY);
            // Smaller steps to ensure we don't skip the "bridge"
            await page.mouse.move(startX, startY + 5);
            await page.mouse.move(startX, startY + 10);
            await page.mouse.move(startX, startY + 15);

            // At this point we should be in the padding area. Dropdown must stay visible.
            await expect(dropdown).toBeVisible();
            await page.screenshot({ path: 'e2e/screenshots/dropdown-hover-gap.png' });

            await page.mouse.move(startX, endY);
            await expect(dropdown).toBeVisible();
        }
    });

    test('dropdown item clickability', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Actividades', exact: true }).hover();

        const proximasRutas = page.getByRole('link', { name: 'Próximas Rutas' });
        await expect(proximasRutas).toBeVisible();

        // Check if it's clickable (this verifies it's not covered by something else)
        await proximasRutas.click();
        await expect(page).toHaveURL(/.*actividades.*/);
    });
});
