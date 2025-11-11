import {test, expect} from '@playwright/test'
import { AdminPage } from '../../helpers/POM/Admin page/adminPage'
import { LoginPage } from '../../helpers/POM/loginPage'
import { NavigationBar } from '../../helpers/POM/navigationBar'
import { credentials } from '../../helpers/credentials'

    const loginPage = (page) => new LoginPage(page);
    const navigationBar = (page) => new NavigationBar(page);
    const adminPage = (page) => new AdminPage(page);

    
test.beforeEach(async ({page})=>{
    await loginPage(page).Login(credentials.username, credentials.password);
    await page.click(navigationBar(page).admin_Page);
})


test.skip("02.01 Navigation bar - header - visible elements", async ({page})=>{

    await adminPage(page).numberOfElements(adminPage(page).navigation_bar_top_elements, 5);

    await expect(page.locator(adminPage(page).user_management_button)).toBeVisible();

    await page.click(adminPage(page).user_management_button);
    await expect(page.locator(adminPage(page).user_management_dropdown.users)).toBeVisible()
})


test("02.02 System users - visible elements", async ({page})=>{
    await page.click(adminPage(page).user_management_button);
    await adminPage(page).checkItemsInDropdown(adminPage(page).user_management_dropdown)
})

