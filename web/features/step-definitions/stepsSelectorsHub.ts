/**
 * This steps are used only to practice.
 * We solve exercides with:
 * - Shadow dom
 * - iFrame
 * - Non inteactuable elements
*/
import { Given, When } from '@wdio/cucumber-framework';

import LoginSection from '../pageobjects/selectorshub/login.section';
import EnterNameSection from '../pageobjects/selectorshub/enterName.section';
import FoodSection from '../pageobjects/selectorshub/food.section';

Given(/^I am on the selectors hub practice page$/, async () => {
    await browser.url('https://selectorshub.com/xpath-practice-page/');
});

When(/^I login with username and password$/, async () => {
    await LoginSection.login('username@mail.com', 'password', 'company');
});

When(/^I complete first and lastname$/, async () => {
    await EnterNameSection.enterFirstLastName('firstname', 'lastname');
});

When(/^I complete tea name$/, async () => {
    await FoodSection.enterTea('tea');
});
