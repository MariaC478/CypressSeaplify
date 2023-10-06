/// <reference types="cypress" />

import LoginPageFunctions from './loginPageFunctions.js';

class Preconditions {
    navigateToLogin() {
        cy.visit("https://dev.seaplify.com/login");
    }

    navigateToJobs() {
        cy.visit("https://dev.seaplify.com/jobs");
    }

    navigateToCompany() {
        cy.visit("https://dev.seaplify.com/company-profile");
    }

    navigateToRegister() {
        cy.visit("https://dev.seaplify.com/sign-up");
    }

    loginAndNavigateToJobs() {
        this.navigateToLogin();
        LoginPageFunctions.LoginWithValidData();
        this.navigateToJobs();
        cy.wait(3000);
    }

    loginAndNavigateToCompanyProfile() {
        this.navigateToLogin();
        LoginPageFunctions.LoginWithValidData();
        this.navigateToCompany();
        cy.wait(3000);
    }

    loginAfterRegisterAndNavigateToCompanyProfile() {
        this.navigateToLogin();
        LoginPageFunctions.LoginWithValidDataForRegister();
        this.navigateToCompany();
        cy.wait(3000);
    }
}

export default new Preconditions();