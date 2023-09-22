/// <reference types="cypress" />

import LoginPage from "./loginPage";
import { faker } from "@faker-js/faker";


class JobsPage {
    navigate() {
        cy.visit("https://dev.seaplify.com/jobs");
    }

    getNewJobButton() {
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    getJobTitleInput() {
        return cy.get("input[name='title']");
    }


    getJobCategoryDropDown() {
        return cy.get("select[name='jobCategory']");
    }

    getJobPositionDropDown() {
        return cy.get("select[name='position']");
    }

    getGenerateWithAiButton() {
        return cy.get(".sc-7c932303-0.iKMKGB.mt-2.mr-auto");
    }

    getPublishButton() {
        return cy.get("button[class='sc-7c932303-0 fgigjA']").first();
    }

    loginAndNavigateToJobs() {
        LoginPage.navigate();
        LoginPage.login();
        this.navigate();
    }

    postAJob(title) {
        this.getNewJobButton().click();
        this.getJobTitleInput()
            .type(title)
            .should('have.value', title);
        this.getJobCategoryDropDown().select("1");
        this.getJobPositionDropDown().select("1");
        this.getGenerateWithAiButton();
        cy.wait(1000);
        this.getPublishButton()
            .click();
    }
}

export default new JobsPage();
