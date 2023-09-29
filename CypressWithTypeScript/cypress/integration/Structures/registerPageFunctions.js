/// <reference types="cypress" />

import { registerImport } from '../Getters/registerPage.js';
import data from '../../fixtures/dataRegistration.json';

class RegisterPageFunctions {

    RegisterWithValidData() {
        registerImport.FirstNameInput
            .type(data.firstName)
            .should('have.value', data.firstName);
        registerImport.LastNameInput
            .type(data.lastName)
            .should('have.value', data.lastName);
        registerImport.CompanyInput
            .type(data.companyName)
            .should('have.value', data.companyName);
        registerImport.EmailInput
            .type(data.email)
            .should('have.value', data.email);
        registerImport.PasswordInput
            .type(data.password)
            .should('have.value', data.password);
        registerImport.SignUpButton
            .should('be.visible')
            .click();

        //check
        cy.url().should('include', Cypress.env('login_url'));
    }

    RegisterWithBlank() {
        registerImport.SignUpButton
            .should('be.visible')
            .click();

        //check
        registerImport.FirstNameErrorRequired
            .should('be.visible')
            .contains("Firstname is required");
        registerImport.LastNameErrorRequired
            .should('be.visible')
            .contains("Lastname is required");
        registerImport.CompanyNameErrorRequired
            .should('be.visible')
            .contains("Company name is required");
        registerImport.EmailErrorRequired
            .should('be.visible')
            .contains("Email is required");
        registerImport.PasswordErrorRequired
            .should('be.visible')
            .contains("Password is required");
        cy.url().should('include', Cypress.env('sign_up_url'));
    }

    RegisterWithInvalidData() {
        registerImport.FirstNameInput
            .type(data.firstNameInvalid)
            .should('have.value', data.firstNameInvalid);
        registerImport.LastNameInput
            .type(data.lastNameInvalid)
            .should('have.value', data.lastNameInvalid);
        registerImport.CompanyInput
            .type(data.companyNameInvalid)
            .should('have.value', data.companyNameInvalid);
        registerImport.EmailInput
            .type(data.emailInvalid)
            .should('have.value', data.emailInvalid);
        registerImport.PasswordInput
            .type(data.passwordInvalid)
            .should('have.value', data.passwordInvalid);
        registerImport.SignUpButton
            .should('be.visible')
            .click();

        //check
        registerImport.FirstNameErrorNotValid
            .should('be.visible')
            .contains("Firstname is not a valid name");
        registerImport.LastNameErrorNotValid
            .should('be.visible')
            .contains("Lastname is not a valid name");
        registerImport.CompanyNameErrorNotValid
            .should('be.visible')
            .contains("Company name is not a valid name");
        registerImport.EmailErrorNotValid
            .should('be.visible')
            .contains("This is not a valid email");
        registerImport.PasswordErrorSpecialCharacter
            .should('be.visible')
            .contains("The password should contain at least one special character");
        cy.url().should('include', Cypress.env('sign_up_url'));

    }

    RedirectToLogin() {
        registerImport.LinkToSignIn
            .should('be.visible')
            .click();

        //check
        cy.url().should('include', Cypress.env('login_url'));
    }

    // extremeValuesHandling(selectorFn, minLimit, maxLimit, withInValue, beyondValue) {
    //     const validInputWithinLimit = 'a'.repeat(withInValue);
    //     const invalidInputBeyondLimit = 'a'.repeat(beyondValue);

    //     selectorFn()
    //         .type(validInputWithinLimit)
    //         .should('have.value', validInputWithinLimit);

    //     selectorFn()
    //         .clear()
    //         .type(invalidInputBeyondLimit.substr(minLimit, maxLimit))
    //         .should('have.value', invalidInputBeyondLimit.substr(minLimit, maxLimit));

    //     selectorFn()
    //         .its('val')
    //         .should('have.length', maxLimit);
    // }
}

export default new RegisterPageFunctions();