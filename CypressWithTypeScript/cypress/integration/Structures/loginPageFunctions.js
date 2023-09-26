/// <reference types="cypress" />

import LoginPage from '../Getters/loginPage.js';

class LoginPageFunctions extends LoginPage {
    navigate() {
        cy.visit("https://dev.seaplify.com/login");
    }

    typeEmail(email) {
        this.getEmailInput()
            .type(email)
            .should("have.value", email);
    }

    typePassword(password) {
        this.getPasswordInput()
            .type(password)
            .should("have.value", password);
    }

    clickLoginButton() {
        this.getLoginButton()
            .click();
    }

    clickSignUpButton() {
        this.getLinkToSignUp().click();
    }

    checkTheInvalidCredentialError() {
        cy.wait(1500);
        this.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
    }

    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLoginButton();
    }
}

export default new LoginPageFunctions();