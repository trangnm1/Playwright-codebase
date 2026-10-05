import {test} from "../fixtures/test.fixture";

test("Login successfully", async ({
    loginPage,
    basePage
}) => {

    await basePage.goto(
        "https://pw-practice-dev.playwrightvn.com/wp-admin/"
    );

    await loginPage.login(
        "betterbytes.academy.admin",
        "StrongPass@BetterBytesAcademy"
    );

});