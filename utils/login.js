import { ClientLoginPage } from "../pages/clientloginpage";

export async function clientLogin(page,client){

    const loginPage=new ClientLoginPage(page);

    await loginPage.login(client.username,client.password);

}