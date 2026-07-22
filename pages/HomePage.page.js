export class HomePage
{
    constructor(page)
    {
        this.page=page
        this.servicesLink=page.locator(" //span[text()=' Services']")
        this.addClientLink=page.locator("//span[text()='Add Clients']")
    }
}