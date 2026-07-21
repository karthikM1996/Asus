import {test,expect} from "../customeFixture/pagesFixture"
import data from "../testData/jsonData.json"
import { JavascriptUtility } from "../utils/JavascriptUtility"

test("addservices",async({page,pages})=>
{
    //await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
    await page.goto(process.env.HOMEPAGE_URL)
    await pages.getHomePage().servicesLink.click()
    await pages.getServicePage().clickAddServices()
    let rdmNo=JavascriptUtility.getRandomNumber()
    let serviceName=(data.serviceName)+rdmNo
    let servicePrice=data.servicePrice
    await pages.getServicePage().addService(serviceName,servicePrice)

})