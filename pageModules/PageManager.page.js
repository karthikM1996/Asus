import login from "../pageModules/login.page"

export class PageManager
{
    constructor(page)
    {
        this.loginPage=null
        this.HomePage=null
        this.ServicePage=null
    }

    getLogin()
    {
     if(!this.loginPage)
      {
       this.loginPage=new login(this.page)
      }
    }

   
  
}