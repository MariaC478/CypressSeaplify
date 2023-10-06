/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import JobsPage from '../integration/Structures/jobsPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Post a job with valid data ', () =>{
    beforeEach(() => {
        cy.viewport(1920, 1080);
       Preconditions.loginAndNavigateToJobs();
    });
    it('Post a job with valid data', () => {
        JobsPage.CreateAJob();
    });
});
