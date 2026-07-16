export class HomePage
{
    constructor(page)
    {
        this.page=page
        this.servicesLink=page.locator(" //span[text()=' Services']")
        
    }
}