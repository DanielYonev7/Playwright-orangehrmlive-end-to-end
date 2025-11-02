import { test, expect } from '@playwright/test'
import { LoginPage } from '../../helpers/POM/loginPage.js';


test('Assert navigation bar item count', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.Login('Admin', 'admin123');

    await page.waitForSelector("//ul//li[@class='oxd-main-menu-item-wrapper']")
    const navigationBarItems = page.locator("//ul//li[@class='oxd-main-menu-item-wrapper']");
    
    const items = await page.$$("//ul//li[@class='oxd-main-menu-item-wrapper']")

    //print the items in the navigation bar
    for(let item of items){
        const itemText = await item.textContent();
        console.log(itemText);
    }
    //expect number of items to be 12
    await expect(navigationBarItems).toHaveCount(12);
}) 
