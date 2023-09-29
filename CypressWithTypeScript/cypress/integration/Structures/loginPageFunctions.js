/// <reference types="cypress" />

import { loginImport } from '../Getters/loginPage.js';
import data from '../../fixtures/dataLogin.json';

class LoginPageFunctions {
    LoginWithValidData() {
        loginImport.EmailInput
            .type(data.email)
            .should("have.value", data.email);
        loginImport.PasswordInput
            .type(data.password)
            .should("have.value", data.password);
        loginImport.LoginButton
            .should('be.visible')
            .click();
        loginImport.LoginButton
            .should('be.visible')
            .click();

        //check
        cy.url().should('include', Cypress.env('dashboard_url'));
    }

    LoginWithBlank() {
        loginImport.LoginButton
            .should('be.visible')
            .click();

        //check
        loginImport.InvalidCredentialsError
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));

    }

    LoginWithInvalidData() {
        loginImport.EmailInput
            .type(data.emailInvalid)
            .should("have.value", data.emailInvalid);
        loginImport.PasswordInput
            .type(data.passwordInvalid)
            .should("have.value", data.passwordInvalid);
        loginImport.LoginButton
            .should('be.visible')
            .click();
        loginImport.LoginButton
            .should('be.visible')
            .click();

        //check
        loginImport.InvalidCredentialsError
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));

    }

    RedirectToRegister() {
        loginImport.LinkToSignUp
            .should('be.visible')
            .click();

        //check
        cy.url().should('include', Cypress.env('sign_up_url'));
    }

}
export default new LoginPageFunctions();