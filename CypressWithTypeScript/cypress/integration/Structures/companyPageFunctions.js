/// <reference types="cypress" />

import { companyImport } from '../Getters/companyPage.js';
import data from '../../fixtures/dataCompany.json';

class CompanyPageFunctions {
    UpdateACompany()
    {
        companyImport.WebsiteInput
            .type(data.website)
            .should('have.value', data.website);

            companyImport.PrefixDropdown
            .select(data.prefixOption)
            .should('have.value', data.prefixOption);

            companyImport.PhoneInput
            .type(data.phone)
            .should('have.value', data.phone);

            companyImport.DescriptionInput
            .type(data.description)
            .should('have.value', data.description);

            companyImport.DescriptionInput
            .type(data.missionStatement)
            .should('have.value', data.missionStatement);

            companyImport.JobTypesDrop
            .select(data.jobTypeOption)
            .should('have.value', data.jobTypeOption);

            companyImport.FoundedInDropdown
            .select(data.foundedInOption)
            .should('have.value', data.foundedInOption);

            companyImport.LocationsDropdown
            .select(data.locationOption)
            .should('have.value', data.locationOption);

            companyImport.PublishButton
            .should('be.visible')
            .click();

            //check
    }
}
export default new CompanyPageFunctions();