# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test 
- Location: tests\AccountRegistration.spec.ts:22:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Password') resolved to 2 elements:
    1) <input value="" type="password" name="password" id="input-password" class="form-control" placeholder="Password"/> aka getByRole('textbox', { name: '* Password', exact: true })
    2) <input value="" name="confirm" type="password" id="input-confirm" class="form-control" placeholder="Password Confirm"/> aka getByRole('textbox', { name: '* Password Confirm' })

Call log:
  - waiting for getByPlaceholder('Password')

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
              - textbox "* First Name" [ref=e85]:
                - /placeholder: First Name
                - text: Jasen
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
                - text: Schaefer
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - textbox "* E-Mail" [ref=e93]:
                - /placeholder: E-Mail
                - text: Virginia_Dietrich@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: "* Telephone"
              - textbox "* Telephone" [active] [ref=e97]:
                - /placeholder: Telephone
                - text: (798) 320-9163 x641
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
  1  | import {Page, Locator, expect} from '@playwright/test';
  2  | 
  3  | export class RegistrationPage
  4  | {
  5  |     private readonly page:Page;
  6  |     // locaors
  7  |     private readonly txtFirstName:Locator;
  8  |     private readonly txtLastName:Locator;
  9  |     private readonly txtEmail:Locator;
  10 |     private readonly txtTelephone:Locator;
  11 |     private readonly txtPassword:Locator;
  12 |     private readonly txtConfirmPassword:Locator;
  13 |     private readonly chkPolicy : Locator;
  14 |     private readonly btnContinue : Locator;
  15 |     private readonly msgConfirmation : Locator;
  16 | 
  17 |     //constructortxtFirstName;
  18 |     constructor(page:Page)
  19 |     {
  20 |         this.page=page;
  21 |         
  22 |         //initialize locators
  23 |         this.txtFirstName= page.getByPlaceholder('First Name');
  24 |         this.txtLastName= page.getByPlaceholder('Last Name');
  25 |         this.txtEmail= page.getByPlaceholder('E-Mail');
  26 |         this.txtTelephone = page.getByPlaceholder('Telephone');
  27 |         this.txtPassword = page.getByPlaceholder('Password');
  28 |         this.txtConfirmPassword = page.getByPlaceholder('Password Confirm');
  29 |         this.chkPolicy = page.getByRole('checkbox');
  30 |         this.btnContinue = page.locator('input[type="submit"]');
  31 |         this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  32 | 
  33 |     }
  34 | 
  35 |     //action methods
  36 | 
  37 |     async setFirstName(fname:string):Promise<void>{
  38 |         await this.txtFirstName.fill(fname);
  39 |     }
  40 | 
  41 |     async setLastName(lname:string):Promise<void>{
  42 |         await this.txtLastName.fill(lname);
  43 |     }
  44 | 
  45 |     async setEmail(email:string):Promise<void>{
  46 |         await this.txtEmail.fill(email);
  47 |     }
  48 | 
  49 |     async setTelephone(tel:string):Promise<void>{
  50 |         await this.txtTelephone.fill(tel);
  51 |     }
  52 | 
  53 |     async setPassword(pwd:string):Promise<void>{
> 54 |         await this.txtPassword.fill(pwd);
     |                                ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Password') resolved to 2 elements:
  55 |     }
  56 | 
  57 |     async setConfirmPassword(pwd: string):Promise<void>{
  58 |         await this.txtConfirmPassword.fill(pwd);
  59 |     }
  60 | 
  61 |     async setPrivacyPolicy():Promise<void>{
  62 |         await this.chkPolicy.check();
  63 |     }
  64 | 
  65 |     async clickContinue(): Promise<void>{
  66 |         await this.btnContinue.click();
  67 |     }
  68 | 
  69 |     async getConfirmatonMsg(): Promise<string>{
  70 |        return await this.msgConfirmation.textContent() ?? '';
  71 |     }
  72 | 
  73 | 
  74 |     // 
  75 |     // complete registration workflow
  76 |     // 
  77 |     async completeRegistration(userData:{
  78 |         firstName:string;
  79 |         lastName:string;
  80 |         email:string;
  81 |         telephone:string,
  82 |         password:string;
  83 |     }): Promise<void> {
  84 |         await this.setFirstName(userData.firstName);
  85 |         await this.setLastName(userData.lastName);
  86 |         await this.setEmail(userData.email);
  87 |         await this.setTelephone(userData.telephone);
  88 |         await this.setPassword(userData.password);
  89 |         await this.setConfirmPassword(userData.password);
  90 |         await this.setPrivacyPolicy();
  91 |     }
  92 | 
  93 | 
  94 | 
  95 | 
  96 | }
```