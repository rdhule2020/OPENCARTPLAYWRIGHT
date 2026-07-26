import {Page, Locator} from "@playwright/test";

export class LoginPage{

    private readonly page:Page;

    //Locators
    private readonly txtEmailAddress:Locator;
    private readonly txtPassword :Locator;
    private readonly btnLogin : Locator;
    private readonly txtErrorMessage : Locator;

    //constructor
    constructor(page:Page)
    {
        this.page = page;
        this.txtEmailAddress = page.getByPlaceholder('E-Mail Address');
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.locator('input[type="submit"]');
        this.txtErrorMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.',{exact:true});
    }

    //action Methods
    async setEmail(email:string):Promise<void>
    {
        await this.txtEmailAddress.fill(email);
    }

    async setPassword(password:string):Promise<void>
    {
        await this.txtPassword.fill(password);
    }

    async clickLogin():Promise<void>
    {
        try{
            await this.btnLogin.click();
        }catch(error)
        {
            console.log(`Exception occured by clicking on login button : ${error}`);
            throw error;
        }
        
    }

    async getLoginErrorMessage(): Promise<null |String>
    {
            return(this.txtErrorMessage.textContent()); 
    }

    async login(email:string, password:string)
    {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }


}