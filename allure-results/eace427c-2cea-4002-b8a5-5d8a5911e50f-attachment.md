# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
TypeError: _randomDataGenerator.RandomDataUtil.getlastName is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Register Account" [level=1] [ref=e76]
        - paragraph [ref=e77]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e78] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - text: .
        - generic [ref=e79]:
          - group "Your Personal Details" [ref=e80]:
            - generic [ref=e81]: Your Personal Details
            - text: "*"
            - generic [ref=e82]:
              - generic [ref=e83]: "* First Name"
              - textbox "* First Name" [active] [ref=e85]:
                - /placeholder: First Name
                - text: Elenora
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - textbox "* E-Mail" [ref=e93]:
                - /placeholder: E-Mail
            - generic [ref=e94]:
              - generic [ref=e95]: "* Telephone"
              - textbox "* Telephone" [ref=e97]:
                - /placeholder: Telephone
          - group "Your Password" [ref=e98]:
            - generic [ref=e99]: Your Password
            - generic [ref=e100]:
              - generic [ref=e101]: "* Password"
              - textbox "* Password" [ref=e103]:
                - /placeholder: Password
            - generic [ref=e104]:
              - generic [ref=e105]: "* Password Confirm"
              - textbox "* Password Confirm" [ref=e107]:
                - /placeholder: Password Confirm
          - group "Newsletter" [ref=e108]:
            - generic [ref=e109]: Newsletter
            - generic [ref=e110]:
              - generic [ref=e111]: Subscribe
              - generic [ref=e112]:
                - generic [ref=e113] [cursor=pointer]:
                  - radio "Yes" [ref=e114]
                  - text: "Yes"
                - generic [ref=e115] [cursor=pointer]:
                  - radio "No" [checked] [ref=e116]
                  - text: "No"
          - generic [ref=e117]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e118] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=information/information/agree&information_id=3
            - checkbox [ref=e119]
            - button "Continue" [ref=e120] [cursor=pointer]
      - complementary [ref=e121]:
        - generic [ref=e122]:
          - link "Login" [ref=e123] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=e124] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=e125] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=e126] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=e127] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e128] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e129] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e130] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e131] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e132] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e133] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e134] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e135] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=e136]:
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - heading "Information" [level=5] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "About Us" [ref=e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e144]:
              - link "Delivery Information" [ref=e145] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e146]:
              - link "Privacy Policy" [ref=e147] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e148]:
              - link "Terms & Conditions" [ref=e149] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e150]:
          - heading "Customer Service" [level=5] [ref=e151]
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Contact Us" [ref=e154] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e155]:
              - link "Returns" [ref=e156] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e157]:
              - link "Site Map" [ref=e158] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e159]:
          - heading "Extras" [level=5] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Brands" [ref=e163] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e164]:
              - link "Gift Certificates" [ref=e165] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e166]:
              - link "Affiliate" [ref=e167] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e168]:
              - link "Specials" [ref=e169] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e170]:
          - heading "My Account" [level=5] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "My Account" [ref=e174] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e175]:
              - link "Order History" [ref=e176] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e177]:
              - link "Wish List" [ref=e178] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e179]:
              - link "Newsletter" [ref=e180] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e181]
      - paragraph [ref=e182]:
        - text: Powered By
        - link "OpenCart" [ref=e183] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Test on Demo E-commerce Application
  3   |  *
  4   |  * Purpose:
  5   |  * This test simulates a complete user flow on an e-commerce site.
  6   |  * 
  7   |  * Steps:
  8   |  * 1) Register a new account
  9   |  * 2) Logout after registration
  10  |  * 3) Login with the same account
  11  |  * 4) Search for a product and add it to the shopping cart
  12  |  * 5) Verify cart contents
  13  |  * 6) Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | 
  16  | import { test, expect, Page } from '@playwright/test';
  17  | import { RegistrationPage } from '../pages/RegistrationPage';
  18  | import { HomePage } from '../pages/HomePage';
  19  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  20  | import { TestConfig } from '../test.config';
  21  | import { LogoutPage } from '../pages/LogoutPage';
  22  | import { LoginPage } from '../pages/LoginPage';
  23  | import { MyAccountPage } from '../pages/MyAccountPage';
  24  | import { SearchResultsPage } from '../pages/SearchResultsPage';
  25  | import { ProductPage } from '../pages/ProductPage';
  26  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  27  | import { CheckoutPage } from '../pages/CheckoutPage';
  28  | 
  29  | // This is the main test block that runs the entire flow
  30  | test('execute end-to-end test flow @end-to-end', async ({ page }) => {
  31  |     const config = new TestConfig();
  32  | 
  33  |     // Navigate to the application's home page
  34  |     await page.goto(config.appUrl);
  35  | 
  36  |     // Step 1: Register a new account and capture the generated email
  37  |     let registeredEmail: string = await performRegistration(page);
  38  |     console.log("✅ Registration is completed!");
  39  | 
  40  |     // Step 2: Logout after successful registration
  41  |     await performLogout(page);
  42  |     console.log("✅ Logout is completed!");
  43  | 
  44  |     // Step 3: Login with the registered email
  45  |     await performLogin(page, registeredEmail);
  46  |     console.log("✅ Login is completed!");
  47  | 
  48  |     // Step 4: Search for a product and add it to the cart
  49  |     await addProductToCart(page);
  50  |     console.log("✅ Product added to cart!");
  51  | 
  52  |     // Step 5: Verify the contents of the shopping cart
  53  |     await verifyShoppingCart(page);
  54  |     console.log("✅ Shopping cart verification completed!");
  55  | 
  56  |     // Step 6: Perform checkout (skipped for demo site)
  57  |     // await performCheckout(page);
  58  | });
  59  | 
  60  | 
  61  | // Function to register a new user account
  62  | async function performRegistration(page: Page): Promise<string> {
  63  |     const homePage = new HomePage(page);
  64  |     await homePage.clickMyAccount();       // Click "My Account" link
  65  |     await homePage.clickRegister();        // Click "Register" option
  66  | 
  67  |     const registrationPage = new RegistrationPage(page);
  68  | 
  69  |     // Fill in random user details
  70  |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
> 71  |     await registrationPage.setLastName(RandomDataUtil.getlastName());
      |                                                       ^ TypeError: _randomDataGenerator.RandomDataUtil.getlastName is not a function
  72  | 
  73  |     let email: string = RandomDataUtil.getEmail();
  74  |     await registrationPage.setEmail(email);
  75  |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  76  | 
  77  |     await registrationPage.setPassword("test123");
  78  |     await registrationPage.setConfirmPassword("test123");
  79  | 
  80  |     await registrationPage.setPrivacyPolicy();  // Accept the privacy policy
  81  |     await registrationPage.clickContinue();     // Submit the registration form
  82  | 
  83  |     // Validate that the registration was successful
  84  |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  85  |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  86  | 
  87  |     return email; // Return the email for later use in login
  88  | }
  89  | 
  90  | 
  91  | // Function to log out the current user
  92  | async function performLogout(page: Page) {
  93  |     const myAccountPage = new MyAccountPage(page);
  94  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  95  | 
  96  |     // Ensure the "Continue" button is visible
  97  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  98  | 
  99  |     // Click "Continue" and verify redirection to HomePage
  100 |     const homePage = await logoutPage.clickContinue();
  101 |     expect(await homePage.isHomePageExists()).toBe(true);
  102 | }
  103 | 
  104 | 
  105 | // Function to log in using the registered email
  106 | async function performLogin(page: Page, email: string) {
  107 |     const config = new TestConfig();
  108 |     await page.goto(config.appUrl);  // Reload home page
  109 | 
  110 |     const homePage = new HomePage(page);
  111 |     await homePage.clickMyAccount();
  112 |     await homePage.clickLogin();
  113 | 
  114 |     const loginPage = new LoginPage(page);
  115 |     await loginPage.login(email, "test123");  // Use the registered credentials
  116 | 
  117 |     // Verify login by checking My Account page
  118 |     const myAccountPage = new MyAccountPage(page);
  119 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  120 | }
  121 | 
  122 | 
  123 | // Function to search for a product and add it to cart
  124 | async function addProductToCart(page: Page) {
  125 |     const homePage = new HomePage(page);
  126 | 
  127 |     const config = new TestConfig();
  128 |     const productName: string = config.productName;
  129 |     const productQuantity: string = config.productQuantity;
  130 | 
  131 |     await homePage.enterProductName(productName);
  132 |     await homePage.clickSearch();  // Click on search button
  133 | 
  134 |     const searchResultsPage = new SearchResultsPage(page);
  135 | 
  136 |     // Validate search results page
  137 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  138 | 
  139 |     // Validate that the desired product exists in the results
  140 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  141 | 
  142 |     // Select product and set quantity
  143 |     const productPage = await searchResultsPage.selectProduct(productName);
  144 |     await productPage?.setQuantity(productQuantity);
  145 |     await productPage?.addToCart();  // Add product to shopping cart
  146 | 
  147 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  148 | 
  149 |     // Confirm product was added
  150 |     expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  151 | }
  152 | 
  153 | 
  154 | // Function to verify the shopping cart details
  155 | async function verifyShoppingCart(page: Page) {
  156 |     const productPage = new ProductPage(page);
  157 | 
  158 |     // Navigate to shopping cart from product page
  159 |     await productPage.clickItemsToNavigateToCart();
  160 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  161 | 
  162 |     console.log("🛒 Navigated to shopping cart!");
  163 | 
  164 |     const config = new TestConfig();
  165 |     
  166 |     // Validate that total price is correct (based on config)
  167 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  168 | }
  169 | 
  170 | 
  171 | // Function to perform checkout (disabled for demo site)
```