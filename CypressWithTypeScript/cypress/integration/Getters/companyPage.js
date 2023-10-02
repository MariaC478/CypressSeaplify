/// <reference types="cypress" />

class CompanyPage {
    get WebsiteInput() {
        return cy.get("data-cy='input-text-website'");
    }

    get PrefixDropdown() {
        return cy.get("select[name='selectedPrefix']");
    }

    get PhoneInput() {
        return cy.get("data-cy='input-phone-phone'");
    }

    get DescriptionInput() {
        return cy.get("data-cy='text-editor-description'");
    }

    get StatementInput() {
        return cy.get("data-cy='text-editor-mission_statement'");
    }

    get JobTypesDrop() {
        return cy.get("data-cy='input-multiple-select-jobCategories'");
    }

    get InvalidCredentialsError() {
        return cy.get();
    }

    get FoundedInDropdown() {
        return cy.get("data-cy='input-select-founded_in'");
    }

    get LocationsDropdown() {
        return cy.get("data-cy='input-multiple-select-locations'");
    }

    get PublishButton(){
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    get ToastifyError() {
        return cy.get(".Toastify__toast-body");
    }
}

export const companyImport = new CompanyPage();