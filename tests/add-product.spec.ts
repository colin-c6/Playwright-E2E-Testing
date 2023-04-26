import { expect } from "@playwright/test";
import test from "../fixtures/BasePage";
import { Product } from "../pageObjects/products/product.types";

const product: Product = {
  name: `CC Product ${Math.floor(Math.random() * 100000)}`,
  price: Math.floor(Math.random() * 100).toString(),
  dateStocked: "2023-04-01",
};

test("As a user I can add a product", async ({ productPage }) => {
  // Create the Product
  await productPage.goto();
  await productPage.addProduct(product);

  // Validate that it is visible in the products grid
  await expect(productPage.productRow(product)).toBeVisible();
});
