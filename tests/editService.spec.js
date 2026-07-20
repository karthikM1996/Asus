import {test,expect} from "../customeFixture/pagesFixture"


test("editservices",async({page,loginPage,homePage,servicePage})=>
{
    await  page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/index.php")
    await loginPage.navigate()
    await homePage.servicesLink.click()
    await servicePage.clickManageServices()
    
    await servicePage.editService()

})