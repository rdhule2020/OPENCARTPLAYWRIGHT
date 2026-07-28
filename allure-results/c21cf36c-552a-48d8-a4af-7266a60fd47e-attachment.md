# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | 
  14 | 
  15 | import { test, expect } from "@playwright/test";
  16 | import { HomePage } from "../pages/HomePage";
  17 | import { RegistrationPage } from "../pages/RegistrationPage";
  18 | import { RandomDataUtil } from "../utils/randomDataGenerator";
  19 | import { TestConfig } from "../test.config";
  20 | 
  21 | let homePage: HomePage;
  22 | let registrationPage: RegistrationPage;
  23 | 
> 24 | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  25 |     const config = new TestConfig();
  26 |     await page.goto(config.appUrl); //Navigate to Application URL
  27 |     homePage = new HomePage(page);
  28 |     registrationPage = new RegistrationPage(page);
  29 | });
  30 | 
  31 | test.afterEach(async ({ page }) => {
  32 |     await page.close();
  33 | });
  34 | 
  35 | test('User registration test @master @sanity @regression', async () => {
  36 | 
  37 |     await homePage.clickMyAccount();
  38 |     await homePage.clickRegister();
  39 | 
  40 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  41 |     await registrationPage.setLastName(RandomDataUtil.getLastName());
  42 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  43 |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  44 |     const password = RandomDataUtil.getPassword();
  45 |     await registrationPage.setPassword(password);
  46 |     await registrationPage.setConfirmPassword(password);
  47 | 
  48 |     await registrationPage.setPrivacyPolicy();
  49 |     await registrationPage.clickContinue();
  50 | 
  51 |     //validate confirmation message
  52 |     const confirmationMsg = await registrationPage.getConfirmatonMsg();
  53 |     expect(confirmationMsg).toContain("Your Account Has Been Created!");
  54 | 
  55 | });
```