# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('First Name')

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
  27 |         this.txtPassword = page.getByPlaceholder('Password',{exact : true});
  28 |         this.txtConfirmPassword =  page.getByRole('textbox', { name: 'Password Confirm' });
  29 |         this.chkPolicy = page.getByRole('checkbox');
  30 |         this.btnContinue = page.locator('input[type="submit"]');
  31 |         this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  32 | 
  33 |     }
  34 | 
  35 |     //action methods
  36 | 
  37 |     async setFirstName(fname:string):Promise<void>{
> 38 |         await this.txtFirstName.fill(fname);
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
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
  54 |         await this.txtPassword.fill(pwd);
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
  69 |     async getConfirmatonMsg(): Promise<string | null>{
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