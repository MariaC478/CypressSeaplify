/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import LoginPageFunctions from '../integration/Structures/loginPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Login with valid credentials', () => {
    beforeEach(() => {
        Preconditions.navigateToLogin();
    });
    it('Login using valid credentials', () => {
        LoginPageFunctions.LoginWithValidData();
        cy.url().should('include', Cypress.env('dashboard_url'));
    });
});

describe('Login users with invalid data', function () {
    beforeEach(() => {
        Preconditions.navigateToLogin();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Login with blank data', function () {
        LoginPageFunctions.LoginWithBlank();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with all invalid credentials', function () {
        LoginPageFunctions.LoginWithInvalidData();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with a valid email and an invalid password', function () {
        LoginPageFunctions.LoginWithInvalidData();
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with an invalid email and a valid password', function () {
        LoginPageFunctions.LoginWithInvalidData();
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
        Preconditions.navigateToLogin();
        LoginPageFunctions.clickSignUpButton();
        cy.url().should('include', Cypress.env('sign_up_url'));
    });
});