/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import { faker } from "@faker-js/faker";
import JobsPage from '../integration/Structures/jobsPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';



describe('Post a job with valid data ', () =>{
    beforeEach(() => {
       Preconditions.loginAndNavigateToJobs();
    });
    it('Post a job with only the required data', () => {
        JobsPage.postAJobWithRequired(faker.company.name,'1','1');
    });

    it('Post a job with only the required data', () => {
        JobsPage.postAJob(faker.company.name,'1','1',14,237,478,3);
    });
});
