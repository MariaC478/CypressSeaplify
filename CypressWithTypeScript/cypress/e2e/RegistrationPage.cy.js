/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import RegisterPageFunctions from '../integration/Structures/registerPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Register users with valid data', function () {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    Preconditions.navigateToRegister();
  });

  it.skip('Registration with valid data', function () {
    RegisterPageFunctions.RegisterWithValidData();
    Preconditions.loginAfterRegisterAndNavigateToCompanyProfile();
    RegisterPageFunctions.CheckCompanyNameIsRegistered();
  });
});


describe('Register users with invalid data', function () {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    Preconditions.navigateToRegister();
  });

  it('Registration with blank data', () => {
    RegisterPageFunctions.RegisterWithBlank();
  });

  it('Registration with all invalid data', function () {
    RegisterPageFunctions.RegisterWithInvalidData();
  });

  it('Registration with an already existing email', function () {
    RegisterPageFunctions.RegisterWithInvalidData();
  });
});

describe('Navigation', () => {
  it('Navigate to the login page', () => {
    cy.viewport(1920, 1080);
    Preconditions.navigateToRegister();
    RegisterPageFunctions.RedirectToLogin();
  });
})
