import {test} from '@playwright/test'
test('add client', async ({page}) => {
  await page.goto('http://localhost:3000/clients')
  await page.getByRole('link', {name: 'Add Client'}).click()
  await page.getByLabel('Name').fill('Test Client')
  await page.getByLabel('Email').fill('')})
  