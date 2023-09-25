/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import { faker } from "@faker-js/faker";
import JobsPage from '../integration/Getters/jobsPage.js'


describe('Post a job with valid data ', () =>{
    beforeEach(() => {
        JobsPage.navigate();
    });
    it('Post a job with minumum data', () => {
        JobsPage.loginAndNavigateToJobs();
        JobsPage.postAJob();
    });
});
