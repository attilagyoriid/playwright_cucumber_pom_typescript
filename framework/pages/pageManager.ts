import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { RegistrationPage } from './registrationPage';

export class PageManager extends BasePage {
  private readonly _registrationPage: RegistrationPage;

  constructor(page: Page) {
    super(page);

    this._registrationPage = new RegistrationPage(this.page);
  }

  get registrationPage() {
    return this._registrationPage;
  }
}
