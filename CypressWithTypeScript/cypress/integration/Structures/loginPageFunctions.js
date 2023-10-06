/// <reference types="cypress" />

import { loginImport } from '../Getters/loginPage.js';
import data from '../../fixtures/dataLogin.json';
import dataRegister from '../../fixtures/dataRegistration.json';


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

        //check
        cy.url().should('include', Cypress.env('dashboard_url'));
    }

    LoginWithValidDataForRegister() {
        loginImport.EmailInput
            .type(dataRegister.email)
            .should("have.value", dataRegister.email);
        loginImport.PasswordInput
            .type(dataRegister.password)
            .should("have.value", dataRegister.password);
        loginImport.LoginButton
            .should('be.visible')
            .click();

        //check
        cy.url().should('include', "https://dev.seaplify.com/verification");
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