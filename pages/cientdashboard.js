import {expect} from '@playwright/test';

export class ClientDashboardPage{

    constructor(page){

        this.page=page;

    }

    async verifyLogin(username){

        await expect(this.page.getByText("Welcome to Client Panel !!")).toBeVisible();

        //await expect(this.page.getByText(username)).toBeVisible();

    }

}