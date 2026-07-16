import {test} from '@playwright/test'
test('view clients', async ({page}) => {
    await page.goto('http://49.249.29.4:8081/TestServer/Build/Client_Management_System/admin/manage-client.php')
    const row = page.locator("table tbody tr").filter({
  has: page.locator("td", { hasText: "699145729" })
});

await page.getByRole('Link',{name:'Edit'}).click()
  })


