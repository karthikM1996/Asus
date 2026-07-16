export class Actions{
     
    static async  fillInput(locator,text) {
     await locator.fill(text)
    }
    static async  clickOn(locator)
   {
   await locator.click()
   }
   static async  scrollAndClick(locator)
   {
     await locator.scrollIntoViewIfNeeded()
     await locator.click()
   } 
   static   frameByLocator(page,selector)
{
   return  page.frameLocator(selector)
  
}
static async  frameByURL(page,URL)
{
   return page.frame({url:URL})
}
static async  frameByName(page,frameName)
{
   return page.frame({url:frameName})
   
}
static async  handleWindows(page,selector)
{
  let [window]=await Promise.all([
    page.waitForEvent("popup"),
    locatoer.click()
  ])
}
static  async  selectDropDownByText(locator,text)
{  await locator.selectOption({label:text})}

static async  selectDropDownByValue(locator,text)
{  await locator.selectOption(text)}

static async  selectDropDownByIndex(locator,index)
{  await locator.selectOption({index:index})}

static async  handleDailog(page,message)
{
   page.on("dialog",async(dialog)=>
{
    if(dialog.type==='arelrt')
    {
        await dialog.accept;
    }
    else if(dialog.type==='confirm')
    {
        await  dialog.accept;
    }
    else if(dailog==='prompt')
    {
        if(dialog.defaultMessage===message)
        {
            await dialog.accept;
        }else{
            await  dialog.accept(message)
        }
    }
})  
}
static async  takeScreenshot(page,name)
{
   await page.screenShot({
    path:`test-Results/screenShots/${name}-${Date.now()}.png`,
    fullPage:true
  })  
}
}