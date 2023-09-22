/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import '../fixtures/dataLogin.json';
import LoginPage from "../integration/PageObject/loginPage.js";
// ***********************************************

describe('Login with valid credentials', () =>{
    beforeEach(() => {
        LoginPage.navigate();
        cy.fixture('dataLogin').then(function (data) {
            this.data1 = data;
        });
    });
    it('Login using valid credentials', () => {
        LoginPage.login(this.data1.email, this.data1.password);
        cy.url().should('include', Cypress.env('dashboard_url'));
    });
});

describe('Login Page - Login users with invalid data', function () {
    beforeEach(() => {
        LoginPage.navigate();
        cy.fixture('dataLogin').then(function (data) {
            this.data = data;
        });
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('Login with blank data', () => {
        LoginPage.getLoginButton().click();
        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with all invalid credentials', function () {
        LoginPage.login(this.data.emailInvalid, this.data.passwordInvalid);

        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");

        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with a valid email and an invalid password', function () {
        LoginPage.login(this.data.email, this.data.passwordInvalid);
        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));
    });

    it('Login with an invalid email and a valid password', function () {
        LoginPage.login(this.data.emailInvalid, this.data.password);
        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', Cypress.env('login_url'));
    });
});

describe('Login Page - Limit Value Test', () => {
    beforeEach(() => {
        LoginPage.navigate();
    });

    it('should handle extreme values for email length', () => {
        LoginPage.extremeValuesHandling(() => LoginPage.getEmailInput());
    });

    it('should handle extreme values for password length', () => {
        LoginPage.extremeValuesHandling(() => LoginPage.getPasswordInput());
    });
});

describe('Navigation', () => {
    it('Navigate to the registration page', () => {
        LoginPage.navigate();
        LoginPage.getLinkToLogin()
            .click();
        cy.url().should('include', Cypress.env('sign_up_url'));
    });
});