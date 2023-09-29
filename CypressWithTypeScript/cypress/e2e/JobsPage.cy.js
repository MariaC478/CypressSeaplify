/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import JobsPage from '../integration/Structures/jobsPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Post a job with valid data ', () =>{
    beforeEach(() => {
       Preconditions.loginAndNavigateToJobs();
    });
    it('Post a job with only the required data', () => {
        JobsPage.CreateAJob();
    });

    it('Post a job with all details', () => {
        JobsPage.CreateAJob();
    });
});
