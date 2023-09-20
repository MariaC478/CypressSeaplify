/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import { faker } from "@faker-js/faker";
import RegisterPage from '../integration/PageObject/registerPage';
// ***********************************************

describe('Registration Page - Register users with valid data', function () {
  beforeEach(() => {
    RegisterPage.navigate();
  });

  it('Registration with valid data', function () {
    RegisterPage.register(faker.person.firstName(), faker.person.lastName(), faker.company.name(), faker.internet.email(), faker.internet.password());
    cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('login_url'));
  });
});


describe('Registration Page - Register users with invalid data', function () {
  beforeEach(() => {
    RegisterPage.navigate();
    cy.fixture('dataRegistration').then(function (data) {
      this.data = data;
    })
  });

  it('Registration with blank data', () => {
    RegisterPage.getSignInButton()
      .click();
    cy.get("Firstname is required")
      .should('be.visible')
      .contains("Firstname is required");
    cy.get("Lastname is required")
      .should('be.visible')
      .contains("Lastname is required");
    cy.get("Company name is required")
      .should('be.visible')
      .contains("Company name is required");
    cy.get("Email is required")
      .should('be.visible')
      .contains("Email is required");
    cy.get("Password is required")
      .should('be.visible')
      .contains("Password is required");
    cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('sign_up'));
  });

  it('Registration with all invalid data', function () {
    RegisterPage.register(faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int());
    RegisterPage.getUpCornerError()
      .should('be.visible')
      .contains("Invalid data provided. Please check the information and try again.");
    cy.get("Firstname is not a valid name")
      .should('be.visible')
      .contains("Firstname is not a valid name");
    cy.get("Lastname is not a valid name")
      .should('be.visible')
      .contains("Lastname is not a valid name");
    cy.get("This is not a valid email")
      .should('be.visible')
      .contains("This is not a valid email");

    const errorMessages = ['Password should be at least 8 characters long',
      'The password should contain at least one uppercase',
      'The password should contain at least one number',
      'The password should contain at least one special character',];

    cy.get("The password should contain at least one uppercase").invoke('text').should((text) => {
      expect(errorMessages.some((message) => text.includes(message))).to.be.true;
    });

    cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('sign_up'));
  });

  it('Registration with an already existing email', function () {
    RegisterPage.register(faker.person.firstName(), faker.person.lastName(), faker.company.name(), faker.internet.email(), faker.internet.password());
    RegisterPage.getUpCornerError()
      .should('be.visible')
      .contains("The resource you are trying to create already exists.");
    cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('sign_up'));
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
    cy.url().should('include', Cypress.env('baseUrl') + Cypress.env('login_url'));

  });
})
