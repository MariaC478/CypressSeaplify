/// <reference types="cypress" />

import RegisterPage from '../Getters/registerPage.js';

class RegisterPageFunctions extends RegisterPage {
    typeFirstName(firstName) {
        this.getFirstNameInput()
            .type(firstName)
            .should('have.value', firstName);
    }

    typeLastName(lastName) {
        this.getLastNameInput()
            .type(lastName)
            .should('have.value', lastName);
    }

    typeCompanyName(companyName) {
        this.getCompanyInput()
            .type(companyName)
            .should('have.value', companyName);
    }

    typeEmail(email) {
        this.getEmailInput()
            .type(email)
            .should('have.value', email);
    }

    typePassword(password) {
        this.getPasswordInput()
            .type(password)
            .should('have.value', password);
    }

    clickSignUpButton() {
        this.getSignUpButton()
            .click();
    }

    clickSignInButton() {
        this.getLinkToSignIn()
            .click();
    }

    checkFirstNameError() {
        this.getFirstNameError()
            .should('be.visible')
            .contains("Firstname is required");
    }

    checkLastNameError() {
        this.getLastNameError()
            .should('be.visible')
            .contains("Lastname is required",
                "Lastname is not a valid name");
    }

    checkCompanyNameError() {
        this.getCompanyNameError()
            .should('be.visible')
            .contains("Company name is required");
    }

    checkEmailError() {
        this.getEmailError()
            .should('be.visible')
            .contains("Email is required",
                "This is not a valid email");
    }

    checkPasswordError() {
        this.getPasswordError()
            .should('be.visible')
            .contains(
                'Password is required',
                'Password should be at least 8 characters long',
                'The password should contain at least one uppercase',
                'The password should contain at least one number',
                'The password should contain at least one special character');
    }

    checkInvalidCredentialsError() {
        this.getInvalidCredentialsError()
            .should('be.visible')
            .contains(
                "Invalid data provided. Please check the information and try again.",
                "The resource you are trying to create already exists.");
    }

    register(firstName, lastName, companyName, email, password) {
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typeCompanyName(companyName);
        this.typeEmail(email);
        this.typePassword(password);
        this.clickSignUpButton();
    }

    extremeValuesHandling(selectorFn, minLimit, maxLimit, withInValue, beyondValue) {
        const validInputWithinLimit = 'a'.repeat(withInValue);
        const invalidInputBeyondLimit = 'a'.repeat(beyondValue);

        selectorFn()
            .type(validInputWithinLimit)
            .should('have.value', validInputWithinLimit);

        selectorFn()
            .clear()
            .type(invalidInputBeyondLimit.substr(minLimit, maxLimit))
            .should('have.value', invalidInputBeyondLimit.substr(minLimit, maxLimit));

        selectorFn()
            .its('val')
            .should('have.length', maxLimit);
    }
}

export default new RegisterPageFunctions();