 import {test as base} from "@playwright/test"
import { expect } from "@playwright/test"
import { PageManager } from "../Pages/PageManager"

export const test=base.extend({
  pages: async({page},use)=>
  {
    const pageManagerObj=new PageManager(page)
    await use(pages)
  }
  
})
export {expect}