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
      await Actions.clickOn(this.addServices)
    }
     async addService(sername,serPrice)
    {
        await Actions.fillInput(this.serviceName,sername)
        await Actions.fillInput(this.priceOfService,serPrice)
        await Actions.clickOn(this.saveBtn)
    }
    
    async clickManageServices()
    {
        await Actions.clickOn(this.manageServices)
    }

    async updateServicePrice(updatedPrice)
    {
        await Actions.fillInput(this.editBtn.first())
        await Actions.fillInput(this.updatePrice,updatedPrice)
        await Actions.fillInput(this.updateLink)
    }

    async updateServiceName(serName)
    {
        await Actions.clickOn(this.editBtn.first())
        await Actions.fillInput(this.updateName,serName)
        await Actions(this.updateLink)
    }
   
}
