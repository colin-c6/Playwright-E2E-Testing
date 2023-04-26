import { Locator, Page } from "@playwright/test";

import { Product } from "./product.types";

class AddProductPage {
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
  async goto(): Promise<void> {
    await this.page.goto("/add-product");
  }

  async createProduct(product: Product): Promise<void> {
    await this.productNameInput().fill(product.name);
    await this.priceInput().fill(product.price);
    await this.dateStockedInput().fill(product.dateStocked);
    await this.submitButton().click();
  }
}

export default AddProductPage;
