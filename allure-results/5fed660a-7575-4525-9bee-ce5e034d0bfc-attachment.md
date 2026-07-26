# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
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
  71  |     await registrationPage.setLastName(RandomDataUtil.getLastName());
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
  84  |     const confirmationMsg = await registrationPage.getConfirmatonMsg();
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
> 119 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
      |                                                         ^ Error: expect(received).toBeTruthy()
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
  162 |     console.log("🛒 .Navigated to shopping cart!");
  163 | 
  164 |     const config = new TestConfig();
  165 |     
  166 |     // Validate that total price is correct (based on config)
  167 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  168 | }
  169 | 
  170 | 
  171 | // Function to perform checkout (disabled for demo site)
  172 | async function performCheckout(page: Page) {
  173 |     // Checkout feature is not implemented since it's a demo site.
  174 |     // Place your checkout flow logic here if backend is available.
  175 | }
  176 | 
```