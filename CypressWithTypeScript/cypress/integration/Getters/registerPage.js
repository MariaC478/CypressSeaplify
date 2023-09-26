/// <reference types="cypress" />

class RegisterPage {
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

    getSignUpButton() {
        return cy.get("button[type='submit'][data-cy='sign-up-button-submit']");
    }

    getInvalidCredentialsError() {
        return cy.get(".Toastify__toast-body");
    }

    getPasswordError() {
        return cy.get("class='p-error block text-sm'")
            .contains("Password is required",
                "Password should be at least 8 characters long",
                "The password should contain at least one uppercase",
                "The password should contain at least one number",
                "The password should contain at least one special character");
    }

    getFirstNameError() {
        return cy.get(".helper-text")
            .contains("Firstname is required",
                "Firstname is not a valid name");
    }

    getLastNameError() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Lastname is required",
                "Lastname is not a valid name");
    }

    getCompanyNameError() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Company name is required");
    }

    getEmailError() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Email is required",
                "This is not a valid email");
    }

    getLinkToSignIn() {
        return cy.get(".secondary_100");
    }

}

export default RegisterPage;
//module.exports = RegisterPage;