import { Locator, Page } from "@playwright/test";
import { Product } from "./product.types";

class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  productRow = (product: Product): Locator =>
    this.page
      .locator("tr")
      .filter({ has: this.page.getByText(`${product.name}`) })
      .filter({ has: this.page.getByText(`${product.price}`) })
      .filter({ has: this.page.getByText(`${product.dateStocked}`) });

  // Actions
  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}

export default ProductPage;
