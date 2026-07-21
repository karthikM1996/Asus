import {test,expect} from "../customeFixture/pagesFixture"
import data from "../testData/jsonData.json"

test("updateSeriveName",async({page,pages})=>
{
    //await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
    const homePage=pages.getHomePage()
    const servicePage=pages.getServicePage()
    
    await page.goto(process.env.HOMEPAGE_URL)
    await homePage.servicesLink.click()
    await servicePage.clickManageServices()
    let serName=data.updateServiceName
    await servicePage.updateServiceName(serName)

})