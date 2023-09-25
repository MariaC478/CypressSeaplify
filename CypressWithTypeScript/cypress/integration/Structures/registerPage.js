/// <reference types="cypress" />

import RegisterPage from '../integration/Getters/registerPage.js';


register(firstName, lastName, companyName, email, password); {
    RegisterPage.getFirstNameInput()
        .type(firstName)
        .should('have.value', firstName);
        RegisterPage.getLastNameInput()
        .type(lastName)
        .should('have.value', lastName);
        RegisterPage.getCompanyInput()
        .type(companyName)
        .should('have.value', companyName);
        RegisterPage.getEmailInput()
        .type(email)
        .should('have.value', email);
        RegisterPage.getPasswordInput()
        .type(password)
        .should('have.value', password);
        RegisterPage.getSignInButton()
        .click();
}

extremeValuesHandling(selectorFn); {
    const validInputWithinLimit = 'a'.repeat(100);
    const invalidInputBeyondLimit = 'a'.repeat(256);

    selectorFn()
        .type(validInputWithinLimit)
        .should('have.value', validInputWithinLimit);

    selectorFn()
        .clear()
        .type(invalidInputBeyondLimit.substr(0, 255))
        .should('have.value', invalidInputBeyondLimit.substr(0, 255));

    selectorFn()
        .its('val')
        .should('have.length', 255);
}