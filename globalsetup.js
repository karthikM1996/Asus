import {chromium} from "@playwright/test"
import path from "path"
import { login } from "./pages/login.page"

async function globalsetup(params)
{  
    const browser= await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    const loginPage=new login(page)
    
     await page.goto(process.env.URL)
     loginPage.navigate(process.env.USER_NAME,process.env.PASSWORD)
    
    await context.storageState({path:'./auth.json'})

    await page.waitForURL("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
}

export default globalsetup
