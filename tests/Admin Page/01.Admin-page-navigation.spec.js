import { expect } from '@playwright/test'
import { test } from '../../helpers/POM/Application/baseFixture'



    test("Navigate to 'Admin' page", async ({page, app})=>{

    const adminHeader = page.locator("//div[@class='oxd-topbar-header-title']//span//h6[contains(., 'Admin')]");

    await app.loginPage.Login('Admin', 'admin123');
    await page.click(app.navigationBar.admin_Page);
    await expect(adminHeader).toBeVisible();

})