/// <reference types="cypress" />

import LoginPageFunctions from './loginPageFunctions.js';
import data from '../../fixtures/dataLogin.json';

class Preconditions {
    navigateToLogin() {
        cy.visit("https://dev.seaplify.com/login");
    }

    navigateToJobs() {
        cy.visit("https://dev.seaplify.com/jobs");
    }

    navigateToRegister() {
        cy.visit("https://dev.seaplify.com/sign-up");
    }

    loginAndNavigateToJobs() {
        this.navigateToLogin();
        LoginPageFunctions.login(data.email,data.password);
        cy.wait(1500);
        cy.get("a[href='/jobs']").click();
        cy.wait(3000);
    }
}

export default new Preconditions();