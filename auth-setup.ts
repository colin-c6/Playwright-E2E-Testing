import { chromium, FullConfig } from "@playwright/test";
import LoginPage from "./pageObjects/login.page";

const USERNAME = "test";
const PASSWORD = "test";

async function globalSetup(config: FullConfig): Promise<void> {
  const { baseURL, storageState } = config.projects[0].use;

  if (typeof baseURL !== "string") {
    throw new Error("Please define baseURL in the playwright config");
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.context().clearCookies();
  await page.goto(`${baseURL}/login`);

  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);

  // Save the cookies to a file
  await page.context().storageState({ path: storageState as string });
}

export default globalSetup;
