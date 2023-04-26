import { test as base } from "@playwright/test";

import AddProduct from "../pageObjects/products/addProduct.page";

const test = base.extend<{
  addProductPage: AddProduct;
}>({
  addProductPage: async ({ page }, use) => {
    await use(new AddProduct(page));
  },
});

export default test;
