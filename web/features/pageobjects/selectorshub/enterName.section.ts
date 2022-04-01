import { ChainablePromiseElement } from 'webdriverio';

/**
 * This Class are used only to practice.
 * We solve exercides with:
 * - Shadow dom
 * - iFrame
 * - Non inteactuable elements
*/
class EnterNameSection {

    public get inputFirstName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("input[placeholder='First Enter name']");
    }

    public get inputLastName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("input[placeholder='Enter Last name']");
    }

    public get btnEditFirsName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("(//*[name()='svg'])[1]");
    }

    public async enterFirstLastName(firstName: string, lastName: string): Promise<void> {
        await (await this.btnEditFirsName).click();
        await this.inputFirstName.setValue(firstName);
        await browser.execute(`document.querySelector("input[placeholder='Enter Last name']").disabled = false`);
        await this.inputLastName.setValue(lastName);
    }
}

export default new EnterNameSection();
