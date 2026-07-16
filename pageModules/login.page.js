import locatorUtil from "../utils/LocatorUtils"
import actionUtil from "../utils/Actions"
export class login
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("[name='username']")
        this.pwd=page.locator("[name='password']")
        this.loginBtn=page.locator("[name='login']")
        //this.userName
    }

    async navigate()
    {
        
      await this.userName.fill("admin")
      await this.pwd.fill("admin")
        await this.loginBtn.click()
    }
}