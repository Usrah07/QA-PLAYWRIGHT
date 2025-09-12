const { test } = require('@playwright/test');

test('Verify download & upload functionality', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');
  await page.waitForTimeout(2000);

  // Download file
  await page.click('#downloadButton');
  await page.waitForTimeout(2000);

  // Upload file
  const handle = page.locator("//input[@id='uploadFile']");
  await handle.setInputFiles("C:/Users/DBA/Downloads/sampleFile.jpeg");
  await page.pause();
  await page.waitForTimeout(2000);
});

