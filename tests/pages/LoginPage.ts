import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private usernameInput = this.page.locator("#user_login");
    private passwordInput = this.page.locator("#user_pass");
    private loginButton = this.page.locator("#wp-submit");

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }

    async verifyLoginSuccess() {

        await expect(
            this.page.getByRole("heading", {
                name: "Dashboard"
            })
        ).toBeVisible();

    }
}