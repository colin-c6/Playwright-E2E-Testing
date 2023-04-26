import { test as base } from "@playwright/test";

import AddProduct from "../pageObjects/products/addProduct.page";
import ProductPage from "../pageObjects/products/products.page";

const test = base.extend<{
  addProductPage: AddProduct;
  productPage: ProductPage;
}>({
  addProductPage: async ({ page }, use) => {
    await use(new AddProduct(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export default test;
