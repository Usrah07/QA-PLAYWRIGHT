const { test, expect } = require('@playwright/test');

test('Verify Elements-Radio Button Functionality', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.click("//h5[text()='Elements']");
  await page.click("//span[text()='Radio Button']");
  await page.waitForTimeout(2000);

  await page.check("//label[@for='yesRadio']");
  await expect(page.locator("//label[@for='yesRadio']")).toBeChecked();
  await page.waitForTimeout(2000);

  await page.check("//label[normalize-space()='Impressive']");
  await expect(page.locator("//label[normalize-space()='Impressive']")).toBeChecked();
});

