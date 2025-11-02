import { test, expect } from '@playwright/test'
import { LoginPage } from '../../helpers/POM/loginPage.js';
import { DashboardPage } from '../../helpers/POM/dashboardPage.js';



test("Dashboard visible after login", async({page})=>{
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.Login('Admin', 'admin123');
    await expect(page.locator(dashboardPage.dashboardHeader)).toBeVisible();
})
