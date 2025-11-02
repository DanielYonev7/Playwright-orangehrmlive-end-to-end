import { test, expect } from '@playwright/test'
import { LoginPage } from '../../helpers/POM/loginPage'
import { NavigationBar } from '../../helpers/POM/navigationBar';


test("Navigate to 'Admin' page", async ({page})=>{
    const loginPage = new LoginPage(page);
    const navigationBar = new NavigationBar(page);

    const adminHeader = page.locator("//div[@class='oxd-topbar-header-title']//span//h6[contains(., 'Admin')]");

    await loginPage.Login('Admin', 'admin123');
    await page.click(navigationBar.admin_Page);
    await expect(adminHeader).toBeVisible();

})