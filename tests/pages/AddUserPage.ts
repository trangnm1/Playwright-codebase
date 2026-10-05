import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class UserPage extends BasePage {

    private addNewButton =
        this.page.getByRole("link", {
            name: "Add New"
        });

    private usernameInput =
        this.page.locator("#user_login");

    private emailInput =
        this.page.locator("#email");

    private passwordInput =
        this.page.locator("#pass1");

    private roleDropdown =
        this.page.locator("#role");

    private addUserButton =
        this.page.getByRole("button", {
            name: "Add New User"
        });

    constructor(page: Page) {
        super(page);
    }

    async clickAddNew() {

        await this.addNewButton.click();

    }

    async fillUsername(username: string) {

        await this.usernameInput.fill(username);

    }

    async fillEmail(email: string) {

        await this.emailInput.fill(email);

    }

    async fillPassword(password: string) {

        await this.passwordInput.fill(password);

    }

    async selectRole(role: string) {

        await this.roleDropdown.selectOption({
            label: role
        });

    }

    async clickAddUser() {

        await this.addUserButton.click();

    }

    async createUser(
        username: string,
        email: string,
        password: string,
        role: string
    ) {

        await this.clickAddNew();

        await this.fillUsername(username);

        await this.fillEmail(email);

        await this.fillPassword(password);

        await this.selectRole(role);

        await this.clickAddUser();

    }
}