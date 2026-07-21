export async function logout(page){

    await page.getByRole('link',{name:'Logout'}).click();

}