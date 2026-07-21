export class login
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("[name='username']")
        this.pwd=page.locator("[name='password']")
        this.loginBtn=page.locator("[value='Login']")
        //this.userName
    }

    async navigate(userName,pwd)
    { 
      await this.userName.fill(userName)
      await this.pwd.fill(pwd)
      await this.loginBtn.click()
    }
}