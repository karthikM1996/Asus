 export class waitUntil{
   static async waitUntilLoadState(page,state="load") {
    await page.waitForLoadState(state)
}
   static async waitUntilTextVisible(page,selector,text) {
    await page.locator(selector,{hasText:text}).waitFor({state:"visible"})
}
  static async waitUntilTime(page,time) {
    await page.waitForTimeout(time)
}
  static async waitUntilElementState(locator,state="visible") {
    await locator.waitFor({state})
}
  static async waitUntilSelector(page,locator) {
    await page.waitForSelector(locator)
}
  static async waitUntilNavigate(page,locator) {
    await Promise.all([
        page.waitForNavigation(),
        locator.click()
    ])
}
  static async waitUntilEvent(page,event) {
    return await page.waitForEvent(event)
}
    
}