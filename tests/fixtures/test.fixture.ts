import {
    test as base
} from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { UserPage } from "../pages/AddUserPage";
import { BasePage } from "../pages/BasePage";

type Fixtures = {
  loginPage: LoginPage;
  userPage:  UserPage;
  basePage: BasePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await use(userPage);
  },
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});