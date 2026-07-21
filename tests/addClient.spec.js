
import {test,expect} from "../customeFixture/pagesFixture"
import data from "../TEST DATA/clientdata.json"

test("editservices",async({page})=>
{
    //await page.goto("http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/dashboard.php")
    await page.goto(process.env.HOMEPAGE_URL)


/*
"contactName":"sunitha",
"companyName":"sunitha organization",
"address":"#23. 14 th cross, vega city mall, Bangalore",
"city":"Bangalore",
"state":"karnataka",
"zipcode":560072,
"workPhoneNumber":8867495147,
"cellPhoneNumber":8867495147,
"otherPhoneNumber":8867495147,
"emailAddress":"sunitha",
"domainName":"@gmail.com",
"password":"admin",
"websiteAddress":"www.suni.com",
"notes":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
*/

})
