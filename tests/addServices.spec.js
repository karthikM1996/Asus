import {test,expect} from "../customeFixture/pagesFixture"


test("addservices",async({page,pages})=>
{
    //await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
    await page.goto(process.env.HOMEPAGE_URL)
    await pages.getHomePage().servicesLink.click()
    await pages.getServicePage().clickAddServices()
    let serviceName="ComputerService"
    await pages.getServicePage().addService(serviceName)

})