/// <reference types="cypress" />

class CompanyPage {
    getWebsiteInput() {
        return cy.get("data-cy='input-text-website'");
    }

    getPrefixDropdown() {
        return cy.get("select[name='selectedPrefix']");
    }

    getPhoneInput() {
        return cy.get("data-cy='input-phone-phone'");
    }

    getDescriptionInput() {
        return cy.get("data-cy='text-editor-description'");
    }

    getStatementInput() {
        return cy.get("data-cy='text-editor-mission_statement'");
    }

    getJobTypesDrop() {
        return cy.get("data-cy='input-multiple-select-jobCategories'");
    }

    getInvalidCredentialsError() {
        return cy.get();
    }

    getFoundedInDropdown() {
        return cy.get("data-cy='input-select-founded_in'");
    }

    getLocationsDropdown() {
        return cy.get("data-cy='input-multiple-select-locations'");
    }
}

export default CompanyPage;
