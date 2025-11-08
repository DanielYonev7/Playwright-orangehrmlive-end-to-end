import {test, expect} from '@playwright/test'
import { AdminPage } from '../../helpers/POM/adminPage'
import { LoginPage } from '../../helpers/POM/loginPage'
import { NavigationBar } from '../../helpers/POM/navigationBar'

    let loginPage;
    let navigationBar;
    let adminPage;

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    navigationBar = new NavigationBar(page);

    await loginPage.Login('Admin', 'admin123');
    await page.click(navigationBar.admin_Page);
})

test("02.01 Navigation bar - header - visible elements", async ({page})=>{
    adminPage = new AdminPage(page);

    await adminPage.numberOfElements(adminPage.navigation_bar_top_elements, 5);

    await expect(page.locator(adminPage.user_management_button)).toBeVisible();

    await page.click(adminPage.user_management_button);
    await expect(page.locator(adminPage.user_management_dropdown.users)).toBeVisible()

})

test.skip("02.02 System users - visible elements", async ({page})=>{

})

