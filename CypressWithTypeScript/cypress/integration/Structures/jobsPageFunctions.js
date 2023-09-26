/// <reference types="cypress" />

import JobsPage from '../Getters/jobsPage.js';

class JobsPageFunctions extends JobsPage {
    // loginAndNavigateToJobs() {
    //     LoginPage.navigate();
    //     LoginPage.login();
    //     JobsPage.navigate();
    // }

    navigate() {
        cy.visit("https://dev.seaplify.com/jobs");
    }

    postAJob(title) {
        JobsPage.getNewJobButton().click();
        JobsPage.getJobTitleInput()
            .type(title)
            .should('have.value', title);
        JobsPage.getJobCategoryDropDown().select("1");
        JobsPage.getJobPositionDropDown().select("1");
        JobsPage.getGenerateWithAiButton();
        cy.wait(1000);
        JobsPage.getPublishButton()
            .click();
    }

}

export default new JobsPageFunctions();