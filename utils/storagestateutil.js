import { ClientLoginPage } from "../pages/clientloginpage";

export async function createClientStorage(page,client){

    const login=new ClientLoginPage(page);

    await login.login(client.username,client.password);

    await page.context().storageState({

        path:'auth/client.json'

    });

}