const {test,expect}= require('@playwright/test')

test('UI Controls', async ({page}) =>   // test annotation coming from playwright dependencies

{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

// two methods > type and fill >> type is deprecated so please use fill method
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("Learning@830$3mK224");
const dropdown=await page.locator("select.form-control");
await dropdown.selectOption("consult");
await page.pause();


} )