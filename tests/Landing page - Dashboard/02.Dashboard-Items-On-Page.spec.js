import { test } from '@playwright/test'
import { LoginPage } from '../../helpers/POM/loginPage.js';
import { DashboardPage } from '../../helpers/POM/dashboardPage.js';


test("Assert number of widgets visible on the 'Dashboard' page", async ({page})=>{

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    
    await loginPage.Login('Admin', 'admin123');

    //expect a number of widggets on the home page
    await dashboardPage.widgetsOnScreen(7);

})