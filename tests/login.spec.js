import {test,expect} from "../customeFixture/pagesFixture.js"

test("test",async({page,loginPage})=>
{
    await loginPage.navigate()
    await page.waitForTimeout(5000)
    
})