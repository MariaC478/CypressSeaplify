/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import LoginPage from "../integration/PageObject/loginPage";
// ***********************************************

describe('Login with valid credentials', function () {
    beforeEach(() => {
        LoginPage.navigate();
        cy.fixture('dataLogin').then(function (data) {
            this.data = data;
        })
    });

    it('Login using valid credentials', () => {
        LoginPage.login("intern.maria.cotofrec@assist.ro", "TryItOut1234!"); /////get them from "dataLogin" does not work, will look into it.
        cy.url().should('include', "https://dev.seaplify.com/dashboard"); ////Cypress.env('baseUrl') + Cypress.env('dashboard') Tried does not work why?
    });
});

describe('Login Page - Login users with invalid data', function () {
    beforeEach(() => {
        LoginPage.navigate();
        cy.fixture('dataLogin').then(function (data) {
            this.data = data;
        });
    });

    it('Login with blank data', () => {
        LoginPage.getLoginButton().click();
        LoginPage.getUpCornerError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', "https://dev.seaplify.com/login");
    });

    it('Login with all invalid credentials', function () {
        LoginPage.login(this.data.emailInvalid, this.data.passwordInvalid);
        LoginPage.getUpCornerError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', "https://dev.seaplify.com/login");
    });

    it('Login with a valid email and an invalid password', function () {
        LoginPage.login(this.data.email, this.data.passwordInvalid);
        LoginPage.getUpCornerError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', "https://dev.seaplify.com/login");
    });

    it('Login with an invalid email and a valid password', function () {
        LoginPage.login(this.data.emailInvalid, this.data.password);
        LoginPage.getUpCornerError()
            .should('be.visible')
            .contains("Invalid Email or Password");
        cy.url().should('include', "https://dev.seaplify.com/login");
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
        cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('sign_up'));
    });
});