/// <reference types="cypress" />

import {LoginPage} from '../Getters/loginPage.js';
import data from '../../fixtures/dataLogin.json';

class LoginPageFunctions{
    LoginWithValidData() {
        LoginPage.getEmailInput()
            .type(data.email)
            .should("have.value", data.email);

        LoginPage.getPasswordInput()
            .type(data.password)
            .should("have.value", data.password);

        LoginPage.getLoginButton()
            .click();

        LoginPage.getLinkToSignUp().click();
    }

    LoginWithBlank()
    {
        LoginPage.getLinkToSignUp().click();
        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
    }

    LoginWithInvalidData() {
        LoginPage.getEmailInput()
            .type(data.emailInvalid)
            .should("have.value", data.emailInvalid);

        LoginPage.getPasswordInput()
            .type(data.passwordInvalid)
            .should("have.value", data.passwordInvalid);

        LoginPage.getLoginButton()
            .click();

        LoginPage.getLinkToSignUp().click();

        LoginPage.getInvalidCredentialsError()
            .should('be.visible')
            .contains("Invalid Email or Password");
    }

}
export const login = new LoginPageFunctions();