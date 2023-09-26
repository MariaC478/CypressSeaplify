/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import data from '../fixtures/dataLogin.json';
import LoginPageFunctions from '../integration/Structures/loginPageFunctions.js'
// ***********************************************

describe('Login with valid credentials', () => {
    beforeEach(() => {
        LoginPageFunctions.navigate();
    });
    it('Login using valid credentials', () => {
        LoginPageFunctions.login(data.email, data.password);
        cy.url().should('include', Cypress.env('dashboard_url'));
    });
});

describe('Login Page - Login users with invalid data', function () {
    beforeEach(() => {
        LoginPageFunctions.navigate();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Login with blank data', function () {
        LoginPageFunctions.clickLoginButton();
        LoginPageFunctions.checkTheInvalidCredentialError();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with all invalid credentials', function () {
        LoginPageFunctions.login(data.emailInvalid, data.passwordInvalid);
        LoginPageFunctions.checkTheInvalidCredentialError();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with a valid email and an invalid password', function () {
        LoginPageFunctions.login(data.email, data.passwordInvalid);
        LoginPageFunctions.checkTheInvalidCredentialError();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with an invalid email and a valid password', function () {
        LoginPageFunctions.login(data.emailInvalid, data.password);
        LoginPageFunctions.checkTheInvalidCredentialError();
        cy.url().should('include', Cypress.env('login_url'));
    });
});

// describe('Login Page - Limit Value Test', () => {
//     beforeEach(() => {
//         LoginPageFunctions.navigate();
//     });

//     it('should handle extreme values for email length', () => {
//         LoginPageFunctions.extremeValuesHandling(() => LoginPageFunctions.getEmailInput());
//     });

//     it('should handle extreme values for password length', () => {
//         LoginPageFunctions.extremeValuesHandling(() => LoginPageFunctions.getPasswordInput());
//     });
// });

describe('Navigation', () => {
    it('Navigate to the registration page', () => {
        LoginPageFunctions.navigate();
        LoginPageFunctions.clickSignUpButton();
        cy.url().should('include', Cypress.env('sign_up_url'));
    });
});