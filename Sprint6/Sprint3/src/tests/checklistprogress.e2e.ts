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

test('repeat submission reflects the new selection', async ({ page }) => {
  await page.goto('/lab/checklist');

  await page.getByRole('checkbox', { name: 'Step 1' }).click();
  await page.getByRole('checkbox', { name: 'Step 2' }).click();
  await page.getByRole('button', { name: 'Submit version' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('2/5 (40%)');

  // uncheck one, check two others, submit again
  await page.getByRole('checkbox', { name: 'Step 1' }).click(); // uncheck
  await page.getByRole('checkbox', { name: 'Step 3' }).click();
  await page.getByRole('checkbox', { name: 'Step 4' }).click();
  await page.getByRole('button', { name: 'Submit version' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('3/5 (60%)');
});

test('all checked submits to 100%', async ({ page }) => {
  await page.goto('/lab/checklist');

  for (const label of ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']) {
    await page.getByRole('checkbox', { name: label }).click();
  }
  await page.getByRole('button', { name: 'Submit version' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('5/5 (100%)');
});

test('none checked submits to 0%', async ({ page }) => {
  await page.goto('/lab/checklist');

  await page.getByRole('button', { name: 'Submit version' }).click();
  await expect(page.getByTestId('progress-label')).toHaveText('0/5 (0%)');
});