/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import '../fixtures/dataRegistration.json';
import { faker } from "@faker-js/faker";
import RegisterPage from '../integration/PageObject/registerPage.js';
// ***********************************************

describe('Registration Page - Register users with valid data', function () {
  beforeEach(() => {
    RegisterPage.navigate();
  });

  it.skip('Registration with valid data', function () {
    RegisterPage.register(faker.person.firstName(), faker.person.lastName(), faker.company.name(), faker.internet.email(), faker.internet.password());
    cy.url().should('include', Cypress.env('login_url'));
  });
});


describe('Registration Page - Register users with invalid data', function () {
  beforeEach(() => {
    RegisterPage.navigate();
    cy.fixture('dataRegistration').then(function (data) {
      this.data = data;
  });
  });

  it('Registration with blank data', () => {
    RegisterPage.getSignInButton()
      .click();
    RegisterPage.getRequiredFirstNameError()
      .should('be.visible')
      .contains("Firstname is required");
    RegisterPage.getRequiredLastNameError()
      .should('be.visible')
      .contains("Lastname is required");
    RegisterPage.getRequiredCompanyNameError()
      .should('be.visible')
      .contains("Company name is required");
    RegisterPage.getRequiredEmailError()
      .should('be.visible')
      .contains("Email is required");
    RegisterPage.getRequiredPasswordError()
      .should('be.visible')
      .contains("Password is required");
    cy.url().should('include', Cypress.env('sign_up_url'));
  });

  it('Registration with all invalid data', function () {
    RegisterPage.register(faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int());
    RegisterPage.getUpCornerError()
      .should('be.visible')
      .contains("Invalid data provided. Please check the information and try again.");
      RegisterPage.getRequiredFirstNameError()
      .should('be.visible')
      .contains("Firstname is not a valid name");
      RegisterPage.getRequiredLastNameError()
      .should('be.visible')
      .contains("Lastname is not a valid name");
      RegisterPage.getRequiredEmailError()
      .should('be.visible')
      .contains("This is not a valid email");

    const errorMessages = ['Password should be at least 8 characters long',
      'The password should contain at least one uppercase',
      'The password should contain at least one number',
      'The password should contain at least one special character',];

      RegisterPage.getRequiredPasswordError()
      .invoke('text').should((text) => {
      expect(errorMessages.some((message) => text.includes(message))).to.be.true;
    });

    cy.url().should('include', Cypress.env('sign_up_url'));
  });

  it('Registration with an already existing email', function () {
    RegisterPage.register(this.data.firstName,this.data.lastName,this.data.companyName,this.data.email,this.data.password);
    RegisterPage.getUpCornerError()
      .should('be.visible')
      .contains("The resource you are trying to create already exists.");
    cy.url().should('include', Cypress.env('sign_up_url'));
  });
});


describe('Registration Page - Limit Value Test', () => {
  beforeEach(() => {
    RegisterPage.navigate();
  });

  it('should handle extreme values for last name length', () => {
    RegisterPage.extremeValuesHandling(() => RegisterPage.getLastNameInput());
  });

  it('should handle extreme values for first name length', () => {
    RegisterPage.extremeValuesHandling(() => RegisterPage.getFirstNameInput());
  });

  it('should handle extreme values for company name length', () => {
    RegisterPage.extremeValuesHandling(() => RegisterPage.getCompanyInput());
  });

  it('should handle extreme values for email length', () => {
    RegisterPage.extremeValuesHandling(() => RegisterPage.getEmailInput());
  });

  it('should handle extreme values for password length', () => {
    RegisterPage.extremeValuesHandling(() => RegisterPage.getPasswordInput());
  });
});


describe('Navigation', () => {
  it('Navigate to the login page', () => {
    RegisterPage.navigate();
    RegisterPage.getLinkToLogin()
      .click();
    cy.url().should('include', Cypress.env('login_url'));

  });
})
