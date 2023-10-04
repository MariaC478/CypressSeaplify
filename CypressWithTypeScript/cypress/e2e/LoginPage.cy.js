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
    it('Login using valid credentials', function () {
        LoginPageFunctions.LoginWithValidData();
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
    });

    it('Login with all invalid credentials', function () {
        LoginPageFunctions.LoginWithInvalidData();
    });

    it('Login with a valid email and an invalid password', function () {
        LoginPageFunctions.LoginWithInvalidData();
    });

    it('Login with an invalid email and a valid password', function () {
        LoginPageFunctions.LoginWithInvalidData();
    });
});

describe('Navigation', () => {
    it('Navigate to the registration page', () => {
        Preconditions.navigateToLogin();
        LoginPageFunctions.RedirectToRegister();
    });
});