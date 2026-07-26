import {Page, Locator, expect} from '@playwright/test';

export class RegistrationPage
{
    private readonly page:Page;
    // locaors
    private readonly txtFirstName:Locator;
    private readonly txtLastName:Locator;
    private readonly txtEmail:Locator;
    private readonly txtTelephone:Locator;
    private readonly txtPassword:Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkPolicy : Locator;
    private readonly btnContinue : Locator;
    private readonly msgConfirmation : Locator;

    //constructortxtFirstName;
    constructor(page:Page)
    {
        this.page=page;
        
        //initialize locators
        this.txtFirstName= page.getByPlaceholder('First Name');
        this.txtLastName= page.getByPlaceholder('Last Name');
        this.txtEmail= page.getByPlaceholder('E-Mail');
        this.txtTelephone = page.getByPlaceholder('Telephone');
        this.txtPassword = page.getByPlaceholder('Password',{exact : true});
        this.txtConfirmPassword =  page.getByRole('textbox', { name: 'Password Confirm' });
        this.chkPolicy = page.getByRole('checkbox');
        this.btnContinue = page.locator('input[type="submit"]');
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');

    }

    //action methods

    async setFirstName(fname:string):Promise<void>{
        await this.txtFirstName.fill(fname);
    }

    async setLastName(lname:string):Promise<void>{
        await this.txtLastName.fill(lname);
    }

    async setEmail(email:string):Promise<void>{
        await this.txtEmail.fill(email);
    }

    async setTelephone(tel:string):Promise<void>{
        await this.txtTelephone.fill(tel);
    }

    async setPassword(pwd:string):Promise<void>{
        await this.txtPassword.fill(pwd);
    }

    async setConfirmPassword(pwd: string):Promise<void>{
        await this.txtConfirmPassword.fill(pwd);
    }

    async setPrivacyPolicy():Promise<void>{
        await this.chkPolicy.check();
    }

    async clickContinue(): Promise<void>{
        await this.btnContinue.click();
    }

    async getConfirmatonMsg(): Promise<string | null>{
       return await this.msgConfirmation.textContent() ?? '';
    }


    // 
    // complete registration workflow
    // 
    async completeRegistration(userData:{
        firstName:string;
        lastName:string;
        email:string;
        telephone:string,
        password:string;
    }): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
    }




}