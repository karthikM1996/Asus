import {test,expect} from "../customeFixture/pagesFixture"
import data from "../testData/jsonData.json"

test("addservices",async({page,pages})=>
{
    const homePage=pages.getHomePage()
    const servicePage=pages.getServicePage()

    await page.goto(process.env.HOMEPAGE_URL)
    await homePage.servicesLink.click()
    await servicePage.clickAddServices()
    let rdmNo=pages.javascriptUtility.getRandomNumber()
    let serviceName=(data.serviceName)+rdmNo
    let servicePrice=data.servicePrice
    await servicePage.addService(serviceName,servicePrice)
})