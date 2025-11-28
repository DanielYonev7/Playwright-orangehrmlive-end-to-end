import { expect } from '@playwright/test'
import { test } from '../../helpers/POM/Application/baseFixture'
import { credentials } from '../../helpers/credentials';



    test("Navigate to 'Admin' page", async ({page, app})=>{


        console.log(process.env.NODE_ENV)
        console.log(process.env.usernameCredentials)
        console.log(process.env.passwordCredentials)
    const adminHeader = page.locator("//div[@class='oxd-topbar-header-title']//span//h6[contains(., 'Admin')]");

    await app.loginPage.Login(process.env.username, process.env.password);
    await page.click(app.navigationBar.admin_Page);
    await expect(adminHeader).toBeVisible();
})