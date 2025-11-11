
import { URL } from '../url';

export class LoginPage {

    
    constructor(page){

        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{type: "submit"});

        }
        
        async Login(username, password){
            
            await this.page.goto(URL);
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
    }
}