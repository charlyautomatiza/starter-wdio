import { ChainablePromiseElement } from 'webdriverio';

/**
 * This Class are used only to practice.
 * We solve exercides with:
 * - Shadow dom
 * - iFrame
 * - Non inteactuable elements
*/
class LoginSection {

    public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("#userId");
    }

    public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("#pass");
    }

    public get inputCompany(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("(//input[@placeholder='Enter your company'])[1]");
    }

    public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("input[value='Submit']");
    }

    public async login(username: string, password: string, company: string): Promise<void> {
        await (await this.inputUsername).click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputCompany.setValue(company);
        await this.btnSubmit.click();
    }
}

export default new LoginSection();
