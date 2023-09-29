/// <reference types="cypress" />

class RegisterPage {
    get FirstNameInput() {
        return cy.get("input[name='firstName']");
    }

    get LastNameInput() {
        return cy.get("input[name='lastName']");
    }

    get CompanyInput() {
        return cy.get("input[name='companyName']");
    }

    get EmailInput() {
        return cy.get("input[placeholder='Type here'][name='email']");
    }

    get PasswordInput() {
        return cy.get("input[name='password']");
    }

    get SignUpButton() {
        return cy.get("button[type='submit'][data-cy='sign-up-button-submit']");
    }

    get InvalidCredentialsError() {
        return cy.get(".Toastify__toast-body");
    }

    get PasswordErrorRequired() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Password is required");
    }

    get PasswordErrorEightCharacters() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Password should be at least 8 characters long");
    }

    get PasswordErrorUppercase() {
        return cy.get("small.p-error.block.text-sm")
            .contains("The password should contain at least one uppercase");
    }

    get PasswordErrorOneNumber() {
        return cy.get("small.p-error.block.text-sm")
            .contains("The password should contain at least one number");
    }

    get PasswordErrorSpecialCharacter() {
        return cy.get("small.p-error.block.text-sm")
            .contains("The password should contain at least one special character");
    }

    get FirstNameErrorRequired() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Firstname is required");
    }

    get FirstNameErrorNotValid() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Firstname is not a valid name");
    }

    get LastNameErrorRequired() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Lastname is required");
    }

    get LastNameErrorNotValid() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Lastname is not a valid name");
    }

    get CompanyNameErrorRequired() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Company name is required");
    }

    get CompanyNameErrorNotValid() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Company name is not a valid name");
    }

    get EmailErrorRequired() {
        return cy.get("small.p-error.block.text-sm")
            .contains("Email is required");
    }

    get EmailErrorNotValid() {
        return cy.get("small.p-error.block.text-sm")
            .contains("This is not a valid email");
    }

    get LinkToSignIn() {
        return cy.get(".secondary_100");
    }

}

export const registerImport = new RegisterPage();