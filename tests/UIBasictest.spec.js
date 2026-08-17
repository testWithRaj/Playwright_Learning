const {test,expect}= require('@playwright/test')



//javascript is asyncronus that means here the code wont be executed in sequential manner 
test('First Playwright Test', async ({browser}) =>   // test annotation coming from playwright dependencies
{

    //chrome - plugins/cookies
const context =await browser.newContext(); // till now only browser instance is open
const page =await context.newPage();  // which creates new page to automate
await page.goto("https://rahulshettyacademy.com/practice");
console.log(await page.title());
} );

test('Page Playwright Test', async ({page}) =>   // test annotation coming from playwright dependencies

{

await page.goto("https://facebook.com");
// get title assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google");

} );
