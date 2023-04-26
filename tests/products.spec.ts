import { expect } from "@playwright/test";

import test from "../fixtures/BasePage";

import { Product } from "../pageObjects/products/product.types";

const product: Product = {
  name: "Colin Product",
  price: "99",
  dateStocked: "2023-04-01",
};

test("As a user I can add a product", async ({ addProductPage }) => {
  await addProductPage.goto();
  await addProductPage.createProduct(product);
});
