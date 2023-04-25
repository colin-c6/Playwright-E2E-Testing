import { Locator, Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Locators
  private usernameInput = (): Locator =>
    this.page.getByTestId("username-textbox");
  private passwordInput = (): Locator =>
    this.page.getByTestId("password-textbox");
  private signInButton = (): Locator => this.page.getByTestId("login-button");

  //Actions
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput().type(username, { delay: 10 });
    await this.passwordInput().type(password, { delay: 10 });
    await this.signInButton().click();
  }
}

export default LoginPage;
