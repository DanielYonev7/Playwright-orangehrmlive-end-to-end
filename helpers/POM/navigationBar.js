

export class NavigationBar{

    constructor(page){

        this.page = page;
        this.admin_Page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Admin')]";
        this.PIM_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'PIM')]";
        this.leave_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Leave')]";
        this.time_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Time')]";
        this.recruitment_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Recruitment')]";
        this.myInfo_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'My Info')]";
        this.performance_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Performance')]";
        this.dashboard_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Dashboard')]";
        this.directory_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Directory')]";
        this.maintenance_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Maintenance')]";
        this.claim_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Claim')]";
        this.buzz_page = "//ul//li[@class='oxd-main-menu-item-wrapper']//span[contains(.,'Buzz')]";

    }

}