import {test, expect} from '@playwright/test'
import { URL } from '../../helpers/url'
import { LoginPage } from '../../helpers/POM/loginPage'

test.beforeEach(async ({page})=>{
    const login = new LoginPage(page);

    await page.goto(URL)
    await login.Login('Admin', 'admin123')
})

test("Mock API response", async ({page})=>{

    await page.route('**/api/v2/dashboard/employees/time-at-work*', async route =>{
        const response = await route.fetch();
        const json = await response.json();

        if (!json.data){
            json.data = [];
        }
          await json.data.push({

            workDay:{
                id: 8,
                day: 'NewDay',
                date: '2025-12-09',
            },

            totalTime: {
                hours: 0,
                minutes: 0,
            }

        })

        await route.fulfill({response, json})
    })

})