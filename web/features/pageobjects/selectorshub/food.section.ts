import { ChainablePromiseElement } from 'webdriverio';

/**
 * This Class are used only to practice.
 * We solve exercides with:
 * - Shadow dom
 * - iFrame
 * - Non inteactuable elements
*/
class FoodSection {

    public get inputTea(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.snackTime.shadow$("#tea");
    }

    public get snackTime(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("#snacktime");
    }

    public async enterTea(tea: string): Promise<void> {
        await browser.switchToFrame(0);
        await this.inputTea.setValue(tea);
    }
}

export default new FoodSection();
