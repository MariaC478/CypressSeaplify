/// <reference types="cypress" />

class LoginPage {
    get EmailInput() {
        return cy.get("input[name='email']");
    }

    get PasswordInput() {
        return cy.get("input[name='password']");
    }

    get LoginButton() {
        return cy.get("button[type='submit'][data-cy='login-button-sign-in']");
    }

    get InvalidCredentialsError() {
        return cy.get(".Toastify__toast-body");
    }

    get LinkToSignUp() {
        return cy.get(".secondary_100");
    }
}
export const loginImport = new LoginPage();