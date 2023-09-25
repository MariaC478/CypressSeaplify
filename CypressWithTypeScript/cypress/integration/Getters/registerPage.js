/// <reference types="cypress" />

class RegisterPage {
    navigate() {
        cy.visit("https://dev.seaplify.com/sign-up");
    }

    getFirstNameInput() {
        return cy.get("input[name='firstName']");
    }

    getLastNameInput() {
        return cy.get("input[name='lastName']");
    }

    getCompanyInput() {
        return cy.get("input[name='companyName']");
    }

    getEmailInput() {
        return cy.get("input[placeholder='Type here'][name='email']");
    }

    getPasswordInput() {
        return cy.get("input[name='password']");
    }

    getSignInButton() {
        return cy.get("button[type='submit'][data-cy='sign-up-button-submit']");
    }

    getUpCornerError() {
        return cy.get("div[role='alert']");
    }

    getPasswordError() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > small:nth-child(1)");
    }

    getRequiredFirstNameError()
    {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > small:nth-child(1)")
    }

    getRequiredLastNameError()
    {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > small:nth-child(1)")
    }

    getRequiredCompanyNameError()
    {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > small:nth-child(1)")
    }

    getRequiredEmailError()
    {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > small:nth-child(1)")
    }

    getRequiredPasswordError()
    {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > small:nth-child(1)")
    }

    getLinkToLogin() {
        return cy.get(".secondary_100");
    }

    register(firstName, lastName, companyName, email, password) {
        this.getFirstNameInput()
            .type(firstName)
            .should('have.value', firstName);
        this.getLastNameInput()
            .type(lastName)
            .should('have.value', lastName);
        this.getCompanyInput()
            .type(companyName)
            .should('have.value', companyName);
        this.getEmailInput()
            .type(email)
            .should('have.value', email);
        this.getPasswordInput()
            .type(password)
            .should('have.value', password);
        this.getSignInButton()
            .click();
    }

    extremeValuesHandling(selectorFn) {
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

}

export default new RegisterPage();
