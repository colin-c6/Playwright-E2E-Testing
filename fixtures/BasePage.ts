import { test as base } from "@playwright/test";
import ProductPage from "../pageObjects/products/products.page";

const test = base.extend<{
  productPage: ProductPage;
}>({
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export default test;
