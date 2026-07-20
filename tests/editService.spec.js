import {test,expect} from "../customeFixture/pagesFixture"


test("editservices",async({page,loginPage,homePage,servicePage})=>
{
    //await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
    await page.goto(process.env.HOMEPAGE_URL)
    await homePage.servicesLink.click()
    await servicePage.clickManageServices()
    
    await servicePage.editService()

})