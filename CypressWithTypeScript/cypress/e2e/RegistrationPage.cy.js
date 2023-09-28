/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import data from '../fixtures/dataRegistration.json';
import { faker } from "@faker-js/faker";
import RegisterPageFunctions from '../integration/Structures/registerPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';

// ***********************************************

describe('Registration Page - Register users with valid data', function () {
  beforeEach(() => {
    Preconditions.navigateToRegister();
  });

  it.skip('Registration with valid data', function () {
    RegisterPageFunctions.register(faker.person.firstName(), faker.person.lastName(), faker.company.name(), faker.internet.email(), faker.internet.password());
    cy.url().should('include', Cypress.env('login_url'));
  });
});


describe('Registration Page - Register users with invalid data', function () {
  beforeEach(() => {
    Preconditions.navigateToRegister();
  });

  it('Registration with blank data', () => {
    RegisterPageFunctions.clickSignUpButton();
    RegisterPageFunctions.checkFirstNameError();
    RegisterPageFunctions.checkLastNameError();
    RegisterPageFunctions.checkCompanyNameError();
    RegisterPageFunctions.checkEmailError();
    RegisterPageFunctions.checkPasswordError();
    cy.url().should('include', Cypress.env('sign_up_url'));
  });

  it('Registration with all invalid data', function () {
    RegisterPageFunctions.register(faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int());
    RegisterPageFunctions.checkInvalidCredentialsError();
    RegisterPageFunctions.checkFirstNameError();
    RegisterPageFunctions.checkLastNameError();
    //RegisterPageFunctions.checkRequiredCompanyNameError();
    RegisterPageFunctions.checkEmailError();
    RegisterPageFunctions.checkPasswordError();
    cy.url().should('include', Cypress.env('sign_up_url'));
  });

  it('Registration with an already existing email', function () {
    RegisterPageFunctions.register(data.firstName, data.lastName, data.companyName, data.email, data.password);
    RegisterPageFunctions.checkInvalidCredentialsError();
    cy.url().should('include', Cypress.env('sign_up_url'));
  });
});


// describe('Registration Page - Limit Value Test', () => {
//   beforeEach(() => {
//     RegisterPage.navigate();
//   });

//   it('should handle extreme values for last name length', () => {
//     RegisterPage.extremeValuesHandling(() => RegisterPage.getLastNameInput());
//   });

//   it('should handle extreme values for first name length', () => {
//     RegisterPage.extremeValuesHandling(() => RegisterPage.getFirstNameInput());
//   });

//   it('should handle extreme values for company name length', () => {
//     RegisterPage.extremeValuesHandling(() => RegisterPage.getCompanyInput());
//   });

//   it('should handle extreme values for email length', () => {
//     RegisterPage.extremeValuesHandling(() => RegisterPage.getEmailInput());
//   });

//   it('should handle extreme values for password length', () => {
//     RegisterPage.extremeValuesHandling(() => RegisterPage.getPasswordInput());
//   });
// });


describe('Navigation', () => {
  it('Navigate to the login page', () => {
    Preconditions.navigateToRegister();
    RegisterPageFunctions.clickSignInButton();
    cy.url().should('include', Cypress.env('login_url'));

  });
})
