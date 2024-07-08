import { Given, Then, When } from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the Registration page', async function (this: CustomWorld) {
  await this.pageManager.registrationPage.visitPage();

  console.log('console');
});

When('I fill First Name field with: {string}', async function (this: CustomWorld, firstName: string) {
  await this.pageManager.registrationPage.fillFirstName(firstName);
});
When('I fill Last Name field with: {string}', async function (this: CustomWorld, lastName: string) {
  await this.pageManager.registrationPage.fillLastName(lastName);
});
When('I fill Email field with: {string}', async function (this: CustomWorld, email: string) {
  await this.pageManager.registrationPage.fillEmail(email);
});
When('I fill Phone field with: {string}', async function (this: CustomWorld, phone: string) {
  await this.pageManager.registrationPage.fillPhoneNumber(phone);
});
When('I select item: {string} from Course drop-down list', async function (this: CustomWorld, course: string) {
  await this.pageManager.registrationPage.selectCourse(course);
});
When('I select item: {string} from Month drop-down list', async function (this: CustomWorld, month: string) {
  await this.pageManager.registrationPage.selectMonth(month);
});
When('I select item: {string} from How do you know about us list', async function (this: CustomWorld, social: string) {
  await this.pageManager.registrationPage.selectSocial(social);
});
When('I click {string} button', async function (this: CustomWorld, buttonText: string) {
  await this.pageManager.registrationPage.pressButtonByText(buttonText);
});

Then('I will get a message: {string}', async function (this: CustomWorld, month: string) {
  expect(await this.pageManager.registrationPage.getRegistrationCompletedMessage()).toEqual(month);
});
