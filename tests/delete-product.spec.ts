import { expect } from "@playwright/test";
import test from "../fixtures/BasePage";
import { Product } from "../pageObjects/products/product.types";

const product: Product = {
  name: `CC Product ${Math.floor(Math.random() * 100000)}`,
  price: Math.floor(Math.random() * 100).toString(),
  dateStocked: "2023-04-01",
};

test("As a user I can add delete a product", async ({ productPage }) => {
  // Create the Product
  await productPage.goto();
  await productPage.addProduct(product);

  // Delete the Product
  await productPage.deleteProduct(product);

  // Validate that it is not visible in the products grid
  await expect(productPage.productRow(product)).not.toBeVisible();
});
