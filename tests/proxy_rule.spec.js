import { test, expect } from '@playwright/test';

test('Create Proxy or Callout Rule in Beeceptor', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://app.beeceptor.com/login');
  await page.getByPlaceholder('Email').fill('sayandas004s@gmail.com');
  await page.getByPlaceholder('Password').fill('Demo@new');
  await page.getByRole('button', { name: ' Sign In' }).click();

  // Step 2: Create a New Mock Server
  await page.getByPlaceholder('Project Name').fill('sayan00');
  await page.getByRole('button', { name: ' Create Mock Server' }).click();

  // Step 3: Navigate to Mocking Rules
  // Wait for the button with 'Mocking Rules' text to be visible
  await page.locator('.minimize-button > .fa').click();
  await page.waitForSelector('a[data-toggle="modal"][data-target=".allRules"]', { state: 'visible', timeout: 10000 });
  
  // Click the button
  await page.click('a[data-toggle="modal"][data-target=".allRules"]');

  // Step 4: Add a Proxy or Callout Rule
  await page.getByRole('button', { name: 'Additional Rule Types' }).click();
  await page.getByRole('link', { name: 'Create Proxy or Callout' }).click();

  // Step 5: Configure Proxy Rule
  await page.getByRole('textbox', { name: 'e.g: /api/path' }).fill('/demo');
  await page.getByPlaceholder('https://your-webhook-endpoint').fill('https://jsonplaceholder.typicode.com/posts');

  // Step 6: Save Proxy Rule
  await page.getByRole('button', { name: ' Save Proxy' }).click();

  // Step 7: Close the Configuration
  await page.getByRole('button', { name: 'Close' }).click();

  // Debugging: Verify Successful Rule Creation
  await page.screenshot({ path: 'proxy-rule-created.png' });
  console.log('Proxy Rule Created Successfully!');
});
