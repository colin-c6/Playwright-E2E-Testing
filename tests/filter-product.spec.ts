import { expect } from "@playwright/test";
import test from "../fixtures/BasePage";
import { Product } from "../pageObjects/products/product.types";

const product: Product = {
  name: `CC Product ${Math.floor(Math.random() * 100000)}`,
  price: Math.floor(Math.random() * 100).toString(),
  dateStocked: "2023-04-01",
};

test("As a user I can filter for my product", async ({ productPage }) => {
  // Create the Product
  await productPage.goto();
  await productPage.addProduct(product);

  // Filter By Product name
  await productPage.filterForProduct(product);

  // Validate that the product is the only visible product in the grid
  await expect(productPage.productRow(product)).toBeVisible();
  await expect(productPage.productRows()).toHaveCount(1);
});

test("As a user I can reset my filters", async ({ productPage }) => {
  // Create the Product
  await productPage.goto();
  await productPage.addProduct(product);

  // Filter By Product name
  await productPage.filterForProduct(product);

  // Reset the filters
  await productPage.resetFilters();

  // Validate other products are disaplyed in the grid.
  expect(await productPage.productRows().count()).toBeGreaterThan(1);
});
