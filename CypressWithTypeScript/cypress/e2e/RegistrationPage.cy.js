/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import RegisterPageFunctions from '../integration/Structures/registerPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Register users with valid data', function () {
  beforeEach(() => {
    Preconditions.navigateToRegister();
  });

  it.skip('Registration with valid data', function () {
    RegisterPageFunctions.RegisterWithValidData();
  });
});


describe('Register users with invalid data', function () {
  beforeEach(() => {
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
    RegisterPageFunctions.RedirectToLogin();
  });
})
