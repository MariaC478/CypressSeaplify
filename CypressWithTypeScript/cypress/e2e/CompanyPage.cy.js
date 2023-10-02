/// <reference types="cypress" />
// ***********************************************
import '../support/commands.js';
import CompanyPage from '../integration/Structures/companyPageFunctions.js';
import Preconditions from '../integration/Structures/Preconditions.js';
// ***********************************************

describe('Update a company with valid data ', () =>{
    beforeEach(() => {
       Preconditions.loginAndNavigateToCompanyProfile();
    });
    it('Update a company', () => {
        CompanyPage.UpdateACompany();
    });
});
