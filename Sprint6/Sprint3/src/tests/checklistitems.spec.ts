import {test , expect } from '@playwright/test'

test('item toggle and update the state', async ({ page }) =>  
{
  await page.goto('/lab/checklist');
  const checkbox = page.getByRole('checkbox', { name: 'Step 1' });
  await expect(checkbox).not.toBeChecked();
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await expect(page.getByTestId('temp-counter')).toHaveText('1');
})