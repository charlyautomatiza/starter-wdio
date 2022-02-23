import { ChainablePromiseElement } from 'webdriverio';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertWiew {
    /**
     * define selectors using getter methods
     */
    public get messageAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//*[@resource-id="android:id/message"]');
    }
}

export default new AlertWiew();
