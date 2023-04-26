import { Locator, Page } from "@playwright/test";

import { Product } from "./product.types";

class EnterProductInfoSection {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private productNameInput = (): Locator =>
    this.page.getByTestId("product-textbox");
  private priceInput = (): Locator => this.page.getByTestId("price-textbox");
  private dateStockedInput = (): Locator =>
    this.page.getByTestId("date-stocked");
  private submitButton = (): Locator => this.page.getByTestId("submit-form");

  // Actions
  async submitProductInformation(product: Product): Promise<void> {
    await this.productNameInput().fill(product.name);
    await this.priceInput().fill(product.price);
    await this.dateStockedInput().fill(product.dateStocked);
    await this.submitButton().click();
  }
}

export default EnterProductInfoSection;
