/// <reference types="cypress" />

import { companyImport } from '../Getters/companyPage.js';
import data from '../../fixtures/dataCompany.json';

class CompanyPageFunctions {
    UpdateACompany() {
        companyImport.WebsiteInput
            .click({ force: true })
            .clear()

            .type(data.website)
            .should('have.value', data.website);

        companyImport.PrefixDropdown
            .click({ force: true })
        companyImport.PrefixSearch
            .type(data.prefixOption)
        companyImport.PrefixFirstItemFromSearch
            .click({ force: true });

        companyImport.PhoneInput
            .click({ force: true })
            .clear()
            .type(data.phone)
            .should('have.value', data.phone);

        companyImport.DescriptionInput.clear();
        companyImport.DescriptionInput
            .click({ force: true })
            .type(data.description)
        cy.wait(1000);
        companyImport.DescriptionInputValue.should('contain', data.description);


        companyImport.StatementInput.clear();
        companyImport.StatementInput
            .click({ force: true })
            .type(data.missionStatement)
        cy.wait(1000);
        companyImport.StatementInputValue.should('contain', data.missionStatement);

        companyImport.JobTypesDrop
            .click({ force: true });
        companyImport.JobTypesItems
            .eq(data.jobTypeOption)
            .click({ force: true });

            cy.wait(1000);
        companyImport.FoundedInDropdown
            .click({ force: true });
        companyImport.FoundedItems
            .eq(data.foundedInOption)
            .click({ force: true });

        companyImport.LocationsDropdown
            .click({ force: true })
        companyImport.LocationsSearch
            .type(data.locationOption)
        companyImport.LocationsFirstItemFromSearch
            .click({ force: true });

        companyImport.UpdateButton
            .should('be.visible')
            .click();

        //check
        companyImport.ToastifyError
            .should('be.visible')
            .contains('Company profile updated successfully');
        cy.url().should('include', Cypress.env('company_profile_url'));
    }
}
export default new CompanyPageFunctions();