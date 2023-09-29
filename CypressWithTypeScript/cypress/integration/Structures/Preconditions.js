/// <reference types="cypress" />

import LoginPageFunctions from './loginPageFunctions.js';

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
        LoginPageFunctions.LoginWithValidData();
        cy.get("a[href='/jobs']").click();
    }

    loginAndNavigateToCompanyProfile() {
        this.navigateToLogin();
        LoginPageFunctions.LoginWithValidData();
        cy.get("a[href='/company-profile']").click();
    }
}

export default new Preconditions();