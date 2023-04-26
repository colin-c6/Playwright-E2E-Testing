import { Locator, Page } from "@playwright/test";
import { Product } from "./product.types";

import EnterProductInfoSection from "./addEditProduct.section";

class ProductPage {
  private readonly page: Page;
  private enterProductInfoSection: EnterProductInfoSection;

  constructor(page: Page) {
    this.page = page;
    this.enterProductInfoSection = new EnterProductInfoSection(this.page);
  }

  // Locators
  private filterProductsInput = (): Locator =>
    this.page.getByPlaceholder("Filter by product name");
  private filterProductsButton = (): Locator =>
    this.page.getByTestId("filter-button");
  productRows = () => this.page.locator("tbody > tr");
  productRow = (product: Product): Locator =>
    this.page
      .getByRole("row")
      .filter({ has: this.page.getByText(`${product.name}`) })
      .filter({ has: this.page.getByText(`${product.price}`) })
      .filter({ has: this.page.getByText(`${product.dateStocked}`) });

  private productEditButton = (product: Product) =>
    this.productRow(product).getByTestId("edit-button");
  private productDeleteButton = (product: Product) =>
    this.productRow(product).getByTestId("delete-button");
  private addProductButton = (): Locator =>
    this.page.getByTestId("add-a-product-button");

  // Actions
  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async addProduct(product: Product) {
    await this.addProductButton().click();
    await this.enterProductInfoSection.submitProductInformation(product);
  }

  async editProduct(originalProduct: Product, updatedProduct: Product) {
    await this.productEditButton(originalProduct).click();
    await this.enterProductInfoSection.submitProductInformation(updatedProduct);
  }

  async deleteProduct(product: Product) {
    await this.productDeleteButton(product).click();
  }

  async filterForProduct(product: Product) {
    await this.filterProductsInput().fill(product.name);
    await this.filterProductsButton().click();
  }
}

export default ProductPage;
