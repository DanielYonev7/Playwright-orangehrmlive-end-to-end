import { AdminPage } from "../Admin page/adminPage";
import { DashboardPage } from "../dashboardPage";
import { LoginPage } from "../loginPage";
import { NavigationBar } from "../navigationBar";

    export class Application {

        constructor(page){
            this.page = page;
            this.loginPage = new LoginPage(this.page);
            this.navigationBar = new NavigationBar(this.page);
            this.dashboardPage = new DashboardPage(this.page);
            this.adminPage = new AdminPage(this.page);
        }
    }   