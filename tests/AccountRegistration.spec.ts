/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */


import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let homePage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to Application URL
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('User registration test @master @sanity @regression', async () => {

    await homePage.clickMyAccount();
    await homePage.clickRegister();

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //validate confirmation message
    const confirmationMsg = await registrationPage.getConfirmatonMsg();
    expect(confirmationMsg).toContain("Your Account Has Been Created!");

});