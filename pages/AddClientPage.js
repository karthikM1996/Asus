export class AddClientPage
{
    constructor(page)
    {   this.page=page
        this.accountType=page.locator("//select[@name='accounttype']")
        this.contactName=page.getByPlaceholder("Contact Name")
        this.companyName=page.getByPlaceholder("Company Name")
        this.address=page.locator("//textarea[@name='address']")
        this.city=page.locator("//input[@name='city']")
        this.state=page.locator("//input[@placeholder='State']")
        this.zipcode=page.locator("//input[@placeholder='Zip Code']")
        this.workPhoneNumber=page.locator("//input[@name='wphnumber']")
        this.cellPhoneNumber=page.locator("//input[@name='cellphnumber']")
        this.otherPhoneNumber=page.locator("//input[@name='ophnumber']")
        this.emailAddress=page.locator("//input[@name='email']")
        this.password=page.locator("//input[@id='password']")
        this.websiteAddress=page.locator("//input[@name='websiteadd']")
        this.notes=page.locator("//textarea[@name='notes']")
        this.saveButton=page.getByRole("button",{name:'submit'})
    }
    async addClientBusinessMethod()
    {
        await accountType.selectOption(0)

    }



}