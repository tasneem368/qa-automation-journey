import {test, expect} from '@playwright/test';
const username = 'standard_user';
const password = 'secret_sauce';
// open sau website and login
test('login to sau website', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// wait to take screenshot
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'login-successful.png'});
   console.log('Test passed - login to sau website');
});

// Test 2: Verify error message for invalid username
test('login to sau website with invalid username', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    console.log('Test passed - login to sau website with invalid username');
}); 

// Test 3: Verify products page after login
test('login to sau website with valid credentials', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('Test passed - login to sau website with products page after login');
   
});