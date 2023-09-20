/// <reference types="cypress" />

class LoginPage {
    navigate() {
        cy.visit("https://dev.seaplify.com/login");
    }

    getEmailInput() {
        return cy.get("input[name='email']");
    }

    getPasswordInput() {
        return cy.get("input[name='password']");
    }

    getLoginButton() {
        return cy.get("button[type='submit']");
    }

    getUpCornerError() {
        return cy.get("div[role='alert'] div:nth-child(2)");
    }

    getLinkToLogin() {
        return cy.get(".secondary_100");
    }

    login(email:string, password:string) {
        this.getEmailInput()
            .type(email)
            .should("have.value", email);
        this.getPasswordInput()
            .type(password)
            .should("have.value", password);
        this.getLoginButton()
            .click();
    }

    extremeValuesHandling(selectorFn:any) {
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

export default new LoginPage();
