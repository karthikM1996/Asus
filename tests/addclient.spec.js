import {test} from '@playwright/test'
test('add client', async ({page}) => {
  await page.goto('http://localhost:3000/clients')
 })
  