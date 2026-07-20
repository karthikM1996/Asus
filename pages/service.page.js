export class service
{
    constructor(page)
    {
        this.page=page
        this.addServices=page.getByRole("link",{name:" Add Services"})
        this.manageServices=page.getByRole("link",{name:"Manage Services"})
        this.serviceName=page.getByPlaceholder("Service Name")
        this.priceOfService=page.getByPlaceholder("Price of Service")
        this.saveBtn=page.getByRole("button",{name:"Save"})
        this.editBtn=page.locator("//td[text()='ComputerService']/ancestor::tr//a")
        this.updatePrice=page.locator("[name='price']")
        this.updateLink=page.getByRole("button",{name:"Update"})

    }

    async clickAddServices()
    {
      await this.addServices.click()
    }
     async addService(sername)
    {
        await this.serviceName.fill(sername)
        await this.priceOfService.fill("500")
        await this.saveBtn.click()
    }

    async clickManageServices()
    {
        await this.manageServices.click()
    }
    async editService()
    {
        await this.editBtn.first().click()
        //await this.updatePrice.click()
        await this.updatePrice.fill("700")
        await this.updateLink.click()
    }

   
}