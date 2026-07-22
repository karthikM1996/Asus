import { Actions } from "../utils/Actions"

export class service
{
    constructor(page)
    {
        this.page=page
        this.addServices=page.getByRole("link",{name:" Add Services"})
        this.addserviceTitle=page.locator(".inner-tittle")
        this.manageServices=page.getByRole("link",{name:"Manage Services"})
        this.serviceName=page.getByPlaceholder("Service Name")
        this.priceOfService=page.getByPlaceholder("Price of Service")
        this.saveBtn=page.getByRole("button",{name:"Save"})
        this.editBtn=page.locator("//td[text()='ComputerService']/ancestor::tr//a")
        this.updateName=page.locator("[name='sname']")
        this.updatePrice=page.locator("[name='price']")
        this.updateLink=page.getByRole("button",{name:"Update"})

    }

    async clickAddServices()
    {
      await this.addServices.click()
    }
     async addService(sername,serPrice)
    {
        await Actions.fillInput(this.serviceName,sername)
        await Actions.fillInput(this.priceOfService,serPrice)
        await Actions.clickOn(this.saveBtn)
    }

    async clickManageServices()
    {
        await this.manageServices.click()
    }
    async updateServicePrice(updatedPrice)
    {
        await this.editBtn.first().click()
        await this.updatePrice.fill(updatedPrice)
        await this.updateLink.click()
    }

    async updateServiceName(serName)
    {
        await this.editBtn.first().click()
        //await this.updatePrice.click()
        await this.updateName.fill(serName)
        await this.updateLink.click()
    }

   
}
