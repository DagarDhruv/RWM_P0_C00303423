import { test, expect } from '@playwright/test';

test('progress only updates on submit', async ({ page }) => {
  await page.goto('/lab/checklist');

  await expect(page.getByTestId('progress-label')).toHaveText('0/5 (0%)');
  await page.getByRole('checkbox', { name: 'Step 1' }).click();
  await page.getByRole('checkbox', { name: 'Step 2' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('0/5 (0%)');
  await page.getByRole('button', { name: 'Submit version' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('2/5 (40%)');
});