import {chromium} from "@playwright/test"
import path from "path"

async function globalsetup(params)
{  
    const browser= await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
     await page.goto(process.env.URL)
     await page.locator("[name='username']").fill(process.env.USER_NAME)
     await page.locator("[name='password']").fill(process.env.PASSWORD)
    await page.locator("[value='Login']").click()
    await context.storageState({path:'./auth.json'})

    await page.waitForURL("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
}

export default globalsetup
