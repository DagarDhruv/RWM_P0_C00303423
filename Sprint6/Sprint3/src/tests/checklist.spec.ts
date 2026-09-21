import { test, expect } from '@playwright/test';

test('checklist page renders the title', async ({ page }) => {
  await page.goto('/lab/checklist');
  await expect(page.getByTestId('title')).toHaveText('Progress Checklist');
});