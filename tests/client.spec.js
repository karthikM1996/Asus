import {test} from '@playwright/test';

import {clientLogin} from '../utils/login';

import {logout} from '../utils/logout';

import {ClientDashboardPage} from '../pages/cientdashboard';

import {getClientData} from '../testData/clientdata';

const client=getClientData();
console.log(client)

test('Client Login',async({page})=>{

    await clientLogin(page,client);

    const dashboard=new ClientDashboardPage(page);

    await dashboard.verifyLogin(client.username);

    await logout(page);

});