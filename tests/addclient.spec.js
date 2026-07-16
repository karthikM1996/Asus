import {test} from '@playwright/test'
test('add client', async ({page}) => {
<<<<<<<<< Temporary merge branch 1
  await page.goto('http://localhost:3000/clients');})
=========
  await page.goto('http://localhost:3000/clients')
})
  
>>>>>>>>> Temporary merge branch 2
