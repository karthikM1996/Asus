import login from"../pages/login.page"
import {HomePage} from "../pages/HomePage.page"
import {service} from "../pages/service.page"
import {JavascriptUtility} from "../utils/JavascriptUtility"

export class PageManager
{
    constructor(page)
    {
        this.page=page
        this.loginPage=null
        this.homePage=null
        this.servicePage=null
        this.javascriptUtility=JavascriptUtility
    }

    getLogin()
    {
     if(!this.loginPage)
      {
       this.loginPage=new login(this.page)
      }
      return this.loginPage
    }

     getHomePage()
    {
     if(!this.homePage)
      {
       this.homePage=new HomePage(this.page)
      }
      return this.homePage
    }

     getServicePage()
    {
     if(!this.servicePage)
      {
       this.servicePage=new service(this.page)
      }
      return this.servicePage
    }

     getjavascriptUtility()
    {
     if(!this.javascriptUtility)
      {
       this.javascriptUtility=JavascriptUtility
      }
      return this.javascriptUtility
    }

   
  
}
