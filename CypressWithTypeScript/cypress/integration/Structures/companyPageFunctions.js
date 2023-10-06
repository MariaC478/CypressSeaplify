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
            .eq(0)
            .click({ force: true })
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
        cy.wait(500);
        companyImport.ToastifyError
            .should('be.visible')
            .contains('Company profile updated successfully');

        cy.url().should('include', Cypress.env('company_profile_url'));

        companyImport.WebsiteInput
            .should('have.value', data.website);
        companyImport.PrefixSelected.should('contain', data.prefixOption);
        companyImport.PhoneInput
            .should('have.value', data.phone);

        companyImport.DescriptionInputValue.should('contain', data.description);
        companyImport.StatementInputValue.should('contain', data.missionStatement);

        this.checkJobType();

        companyImport.FoundedValue
            .should('contain', "2020");

        companyImport.LocationsDropdown
            .click({ force: true })
        companyImport.LocationsSearch
            .clear()
            .type(data.locationOption)

        companyImport.LocationSelected.should('contain', data.locationOption);
        companyImport.LocationHighlighted.should("be.visible");
    }

    checkJobType() {
        if (data.jobTypeOption == "1") {
            companyImport.JobTypeOffshore.should('be.visible');

        }
        else if (data.jobTypeOption == "2") {
            companyImport.JobTypeShoreBased.should('be.visible');

        }
        else if (data.jobTypeOption == "3") {
            companyImport.JobTypeCommercial.should('be.visible');

        }
    }
}
export default new CompanyPageFunctions();