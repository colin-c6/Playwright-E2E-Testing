import { expect, test } from "@playwright/test";

test("As a user I can verify the logout button is present", async ({
  page,
}) => {
  await page.goto("https://commitquality.com/add-product");
  await expect(page.getByTestId("navbar-logout")).toBeVisible();
});
