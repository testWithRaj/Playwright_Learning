const {test,expect}= require('@playwright/test')

test('Test Login page using locator', async ({page}) =>   // test annotation coming from playwright dependencies

{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// get title assertion
console.log(await page.title());

// two methods > type and fill >> type is deprecated so please use fill method
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("Learning@830$3mK2");
await page.locator("input#signInBtn").click();

//console.log(await page.locator("[style*='block']").textContent()); // this line is for extracting error message 
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(1).textContent());

// adding insertion
//await expect(page.locator("[style*='block']")).toContainText('Incorrect');


// how to grab all the products from the web page?

const allTitles =await page.locator(".card-body a").allTextContents()
console.log(allTitles);

} );