import { test, expect } from '@playwright/test'
import { LoginPage } from '../../helpers/POM/loginPage.js';



test("Successful log out", async ({page})=>{
    const loginPage = new LoginPage(page);


    await loginPage.Login('Admin', 'admin123');
    const user = page.getByAltText('profile picture');
    await user.click();

    const logOutButton = page.locator("//header//li//a[contains(text(), 'Logout')]");
    await logOutButton.click();
    
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();

})