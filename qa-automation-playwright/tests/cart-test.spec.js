import { test, expect } from '@playwright/test';

const username = 'standard_user';
const password = 'secret_sauce';

test('add item to cart', async ({ page }) => {
  // Login first
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  // Add first item to cart
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
// Go to cart

await page.locator('[data-test="shopping-cart-link"]').click();

  // Verify cart badge shows 1
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  // Take screenshot
  await page.screenshot({ path: 'cart-added.png' });

  console.log('✅ Item added to cart successfully');
});



test('verify cart item details', async ({ page }) => {
  // Login first
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

// Add first item to cart
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

// Go to cart

await page.locator('[data-test="shopping-cart-link"]').click();

  // Verify cart page loaded
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Verify item is in cart
  await expect(page.locator('.cart_item')).toHaveCount(1);

  console.log('✅ Cart item verified successfully');
});