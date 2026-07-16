import login from"../pages/login.page"

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

    getHome()
    {
        if(!this.HomePage)
        {
            this.HomePage=new this.HomePage(this.page)
        }
    }
  
}