import { expect } from "playwright/test";

export class AdminPage {

    constructor(page){

        this.page = page;

        //Page section elements
        this.navigation_bar_top_elements = "//div[@class='oxd-topbar-body']//nav[@role='navigation']//ul//li//span";
        this.system_user_elements = "//form[@class='oxd-form']//div[@class='oxd-form-row']//div[@class='oxd-grid-item oxd-grid-item--gutters']";
        this.record_table_elements = "//div[@class='oxd-table-body']//div[@class='oxd-table-card']";
    
        //User management
        this.user_management_button = "//div[@class='oxd-topbar-body']//nav[@role='navigation']//ul//li//span[contains(.,'User Management')]"
        this.user_management_dropdown = {
            
            users: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Users')]"
        }

        //Job
        this.job_dropdown = {

            job_titles: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Job Titles')]",
            pay_grades: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Pay Grades')]",
            employment_status: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Employment Status')]",
            job_categories: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Job Categories')]",
            work_shifts: "//ul[@class='oxd-dropdown-menu']//a[contains(.,'Work Shifts')]",

        }
    }

    async numberOfElements(locator ,number){
        await this.page.waitForSelector(locator)
        const elements = await this.page.$$(locator);
        let numberOfEelements = elements.length;
        expect(numberOfEelements).toBe(number)
    }

 
}


