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
    }

    async clickAddServices()
    {
      await this.addServices.click()
    }
    async clickManageServices()
    {
        await this.manageServices.click()
    }

    async addService()
    {
        await this.serviceName.fill("ComputerService")
        await this.priceOfService.fill("500")
        await this.saveBtn.click()
    }
}