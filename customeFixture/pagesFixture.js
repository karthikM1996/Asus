 import {test as base} from "@playwright/test"
import { expect } from "@playwright/test"
import { PageManager } from "../pageModules/PageManager.page"
import {login} from "../pageModules/login.page"
import { HomePage } from "../pageModules/HomePage.page"
import { service } from "../pageModules/service.page"

export const test=base.extend({

  loginPage: async({page},use)=>
  {
    const loginPage=new login(page)
    await use(loginPage)
  },
  homePage:async({page},use)=>
  {
    const homePage=new HomePage(page)
    await use(homePage)
  },
  servicePage:async({page},use)=>
  {
    const servicePage=new service(page)
    await use(servicePage)
  },

  
})
export {expect}