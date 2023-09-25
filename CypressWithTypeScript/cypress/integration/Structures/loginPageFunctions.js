/// <reference types="cypress" />

import {LoginPage} from '../Getters/loginPage.js';

class LoginPageFunctions extends LoginPage {
    navigate() {
        cy.visit("https://dev.seaplify.com/login");
    }

    typeEmail(email) {
        LoginPage.getEmailInput()
            .type(email)
            .should("have.value", email);
    }

    typePassword(password) {
        LoginPage.getPasswordInput()
            .type(password)
            .should("have.value", password);
    }

    clickLoginButton() {
        LoginPage.getLoginButton()
            .click();
    }

    login(email, password) {
        typeEmail(email);
        typePassword(password);
        clickLoginButton();
    }
}

export default new LoginPageFunctions();