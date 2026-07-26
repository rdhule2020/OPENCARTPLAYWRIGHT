# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User Login Test @master @sanity @regression
- Location: tests\Login.spec.ts:43:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | 
  14 | import { test, expect} from "@playwright/test";
  15 | import { TestConfig } from "../test.config";
  16 | import { HomePage } from "../pages/HomePage";
  17 | import { LoginPage } from "../pages/LoginPage";
  18 | import { MyAccountPage } from "../pages/MyAccountPage";
  19 | 
  20 | 
  21 | 
  22 | let config:TestConfig;
  23 | let homePage: HomePage;
  24 | let loginPage : LoginPage;
  25 | let myAccountPage : MyAccountPage;
  26 | 
  27 | //This hook runs before each test
  28 | test.beforeEach(async ({page})=>{
  29 | config = new TestConfig();
  30 | await page.goto(config.appUrl);
  31 | 
  32 | homePage = new HomePage(page);
  33 | loginPage = new LoginPage(page);
  34 | myAccountPage = new MyAccountPage(page);
  35 | 
  36 | });
  37 | 
  38 | test.afterEach(async({page})=>
  39 | {
  40 |     await page.close();
  41 | });
  42 | 
  43 | test('User Login Test @master @sanity @regression', async()=>{
  44 |     await homePage.clickMyAccount();
  45 |     await homePage.clickLogin();
  46 | 
  47 |     await loginPage.setEmail(config.email);
  48 |     await loginPage.setPassword(config.password);
  49 |     await loginPage.clickLogin();
  50 | 
  51 |     const isLoggedIn=await myAccountPage.isMyAccountPageExists();
> 52 |     expect(isLoggedIn).toBeTruthy();
     |                        ^ Error: expect(received).toBeTruthy()
  53 | });
```