/// <reference types="cypress" />

class LoginPage {
    getEmailInput() {
        return cy.get("input[name='email']");
    }

    getPasswordInput() {
        return cy.get("input[name='password']");
    }

    getLoginButton() {
        return cy.get("button[type='submit'][data-cy='login-button-sign-in']");
    }

    getInvalidCredentialsError() {
        return cy.get(".Toastify__toast-body");
    }

    getLinkToLogin() {
        return cy.get(".secondary_100");
    }
}

export default new LoginPage();
