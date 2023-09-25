/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import data from '../fixtures/dataLogin.json';
import LoginPageFunctions from '../integration/Structures/loginPageFunctions.js'
// ***********************************************

// describe('Login with valid credentials', () =>{
//     beforeEach(() => {
//         LoginPage.navigate();
//     });
//     it('Login using valid credentials', () => {
//         LoginPage.login(data.email, data.password);
//         cy.url().should('include', Cypress.env('dashboard_url'));
//     });
// });

describe('Login Page - Login users with invalid data', function () {
    beforeEach(() => {
        LoginPageFunctions.navigate();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('Login with blank data', function () {
        LoginPageFunctions.clickLoginButton();
        // LoginPageFunctions.getInvalidCredentialsError()
        //     .should('be.visible')
        //     .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));
    });

    // it('Login with all invalid credentials', function () {
    //     LoginPageFunctions.clickLoginButton();
    //     LoginPage.login(data.emailInvalid, data.passwordInvalid);
    //     LoginPage.getInvalidCredentialsError()
    //         .should('be.visible')
    //         .contains("Invalid Email or Password");

    //     cy.url().should('include', Cypress.env('login_url'));
    // });

    // it('Login with a valid email and an invalid password', function () {
    //     LoginPage.login(data.email, data.passwordInvalid);
    //     LoginPage.getInvalidCredentialsError()
    //         .should('be.visible')
    //         .contains("Invalid Email or Password");
    //     cy.url().should('include', Cypress.env('login_url'));
    // });

    // it('Login with an invalid email and a valid password', function () {
    //     LoginPage.login(data.emailInvalid, data.password);
    //     LoginPage.getInvalidCredentialsError()
    //         .should('be.visible')
    //         .contains("Invalid Email or Password");
    //     cy.url().should('include', Cypress.env('login_url'));
    // });
});

// describe('Login Page - Limit Value Test', () => {
//     beforeEach(() => {
//         LoginPage.navigate();
//     });

//     it('should handle extreme values for email length', () => {
//         LoginPage.extremeValuesHandling(() => LoginPage.getEmailInput());
//     });

//     it('should handle extreme values for password length', () => {
//         LoginPage.extremeValuesHandling(() => LoginPage.getPasswordInput());
//     });
// });

// describe('Navigation', () => {
//     it('Navigate to the registration page', () => {
//         LoginPage.navigate();
//         LoginPage.getLinkToLogin()
//             .click();
//         cy.url().should('include', Cypress.env('sign_up_url'));
//     });
// });