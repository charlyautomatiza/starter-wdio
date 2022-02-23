import Page from './page';
import { ChainablePromiseElement } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#flash');
    }
}

export default new SecurePage();
