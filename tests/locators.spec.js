const {test,expect}= require('@playwright/test')

test('Test Login page using locator', async ({page}) =>   // test annotation coming from playwright dependencies

{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// get title assertion
console.log(await page.title());

// two methods > type and fill >> type is deprecated so please use fill method
await page.locator("input#username").fill("Raj kumar");
await page.locator("input#password").fill("password");
await page.locator("input#signInBtn").click();

} );