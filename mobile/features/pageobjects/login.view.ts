import { ChainablePromiseElement } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }

    public get btnLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
