export class ClientLoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.locator('//input[@value="Email"]');
        this.password = page.locator('//input[@value="Password"]');
        this.loginBtn = page.locator('//input[@name="login"]');
    }

    async login(username, password) {
        await this.page.goto('http://49.249.29.4:8081/TestServer/Build/Client_Management_System/client/index.php');
        console.log(username)
        console.log(password)

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}