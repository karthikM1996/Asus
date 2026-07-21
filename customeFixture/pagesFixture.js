 import {test as base} from "@playwright/test"
import { expect } from "@playwright/test"
import { PageManager } from "../Pages/PageManager"
import { login } from "../pages/login.page"
import {HomePage, homePage} from "../pages/HomePage.page"
import {service} from "../pages/service.page"

export const test=base.extend({
  pages: async({page},use)=>
  {
    const pageManagerObj=new PageManager(page)
    await use(pages)
  },
  loginPage: async({page},use)=>
  {
    const loginPage=new login(page)
    await use(loginPage)
  },
  homePage: async({page},use)=>
  {
    const homePage=new HomePage(page)
    await use(homePage)
  }
  ,
  servicePage: async({page},use)=>
  {
    const servicePage=new service(page)
    await use(servicePage)
  }
  
})
export {expect}