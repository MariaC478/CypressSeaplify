/// <reference types="cypress" />


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
}

export default new JobsPage();
