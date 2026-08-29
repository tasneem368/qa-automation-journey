import {test, expect} from '@playwright/test';
// open sau website and login
test('login to sau website', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// wait to take screenshot
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'login-successful.png'});
   console.log('Test passed - login to sau website');
});