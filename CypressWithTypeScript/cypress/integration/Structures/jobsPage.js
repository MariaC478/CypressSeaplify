/// <reference types="cypress" />

import JobsPage from '../integration/Getters/jobsPage.js';

// loginAndNavigateToJobs() {
//     LoginPage.navigate();
//     LoginPage.login();
//     JobsPage.navigate();
// }

postAJob(title); {
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
