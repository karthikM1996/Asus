export class LocatorUtils
{
    static   locateByPartialText(page,text)
    { 
    return page.getByText(text) 
    }
    static   locateByText(page,text)
   { 
    return page.getByText(text,{exact:true}) 
   }
   static   locateByRole(page,role,text)
   {
    return page.getByRole(role,{name:text})
   }
   static   locateByPlaceholder(page,selector) {
    return page.getByPlaceholder(selector)
   }
   static   locateByLabel(page,selector) {
    return page.getByLabel(selector)
    }
    static   locateByLocator(page,selector) {
    return page.locator(selector)
    }
   static   locateBytestId(page,testId) {
    return page.getByTestId(testId)
   }
}