import {Page, expect, Locator} from '@playwright/test';

export class HomePage{
    private readonly page:Page;
    //locators
        private readonly lnkMyAccount : Locator;
        private readonly lnkRegister :Locator;
        private readonly lnkLogin : Locator;
        private readonly txtSearchBox :Locator;
        private readonly btnSearch : Locator;

    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a').filter({ hasText: 'Register' }).first();
        this.lnkLogin = page.getByRole('link', {name:'Login'});
        this.txtSearchBox=page.getByPlaceholder('Search');
        this.btnSearch = page.locator('#search button[type="button"]');
    }

    //action methods
        async isHomePageExists(){
            let title:string = await this.page.title();
            if(title){
            return true;
            }
            return false;
    }

    // Click "My Account" link
    async clickMyAccount(){
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception occured while clicking 'My Account' : $(error)`);
            throw error;
        }
    }

    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }catch(error)
        {
            console.log(`Error occured while clicking on register link :  ${error}`);
        }
    }

    async clickLogin(){
        try{
            await this.lnkLogin.click()
        }catch(error)
        {
            console.log(`Expection occured while clicking 'Login' : $(error)`);
            throw error;
        }
    }

    async enterProductName(pName:string){
        try{
            await this.txtSearchBox.fill(pName);
        }catch(error)
        {
            console.log(`Exception ccured while entering product name : $(error)`);
            throw error;
        }
    }

    async clickSearch(){
        try{
            await this.btnSearch.click();
        }catch(error)
        {
            console.log(`Exception occured while clicking 'search`);
            throw error;
        }
    }
    



}