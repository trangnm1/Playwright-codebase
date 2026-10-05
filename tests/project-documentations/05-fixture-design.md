**Custom Fixture**

type Fixtures = {

    loginPage: LoginPage;

    dashboardPage: DashboardPage;

    usersPage: UsersPage;

};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    dashboardPage: async ({ page }, use) => {

        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage);

    },

    usersPage: async ({ page }, use) => {

        const usersPage = new UsersPage(page);

        await use(usersPage);

    }

});
