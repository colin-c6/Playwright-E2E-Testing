import { expect } from "@playwright/test";
import test from "../fixtures/BasePage";
import { Product } from "../pageObjects/products/product.types";

const product: Product = {
  name: `CC Product ${Math.floor(Math.random() * 100000)}`,
  price: Math.floor(Math.random() * 100).toString(),
  dateStocked: "2023-04-01",
};

const updatedProduct: Product = {
  name: `CC Product ${Math.floor(Math.random() * 100000)}`,
  price: Math.floor(Math.random() * 100).toString(),
  dateStocked: "2023-04-01",
};

test("As a user I can add edit a product", async ({ productPage }) => {
  // Create the Product
  await productPage.goto();
  await productPage.addProduct(product);

  // Update the Product
  await productPage.editProduct(product, updatedProduct);

  // Validate that the updated product is visible in the products grid
  await expect(productPage.productRow(updatedProduct)).toBeVisible();
});
