
import { expect } from "playwright/test";

export class DashboardPage {

    constructor(page){
        this.page = page;
        this.dashboardHeader = "//div//span//h6";

    }

    async widgetsOnScreen(number){

        await this.page.waitForSelector("//div[@class='oxd-grid-3 orangehrm-dashboard-grid']//div[@class='orangehrm-dashboard-widget-header']//p")
        const widgets = await this.page.$$("//div[@class='oxd-grid-3 orangehrm-dashboard-grid']//div[@class='orangehrm-dashboard-widget-header']//p");
        const numberOfWidgets = await this.page.locator("//div[@class='oxd-grid-3 orangehrm-dashboard-grid']//div[@class='orangehrm-dashboard-widget-header']//p")

        for (const widget of widgets){
            let widgetElement = await widget.textContent();
            console.log(widgetElement); 
        }
        
        await expect(numberOfWidgets).toHaveCount(number);
    }
}