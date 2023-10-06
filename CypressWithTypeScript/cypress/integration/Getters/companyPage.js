/// <reference types="cypress" />

class CompanyPage {
    get WebsiteInput() {
        return cy.get("[data-cy='input-text-website']");
    }

    get PrefixDropdown() {
        return cy.get("[aria-label='Select']");
    }

    get PrefixSearch() {
        return cy.get(".p-dropdown-filter.p-inputtext.p-component");
    }

    get PrefixFirstItemFromSearch() {
        return cy.get(".p-dropdown-item").first();
    }

    get PrefixSelected() {
        return cy.get("div[class='p-dropdown p-component p-inputwrapper p-inputwrapper-filled w-full'] div[class='flex gap-2 align-items-center']").first();
    }

    get PhoneInput() {
        return cy.get("[data-cy='input-phone-phone']");
    }

    get DescriptionInput() {
        return cy.get("[data-cy='text-editor-description'] .ql-editor");
    }

    get DescriptionInputValue() {
        return cy.get("[data-cy='text-editor-description'] .ql-editor h2");
    }

    get StatementInput() {
        return cy.get("[data-cy='text-editor-mission_statement'] .ql-editor");
    }

    get StatementInputValue() {
        return cy.get("[data-cy='text-editor-mission_statement'] .ql-editor h2");
    }

    get JobTypesDrop() {
        return cy.get("[data-cy='input-multiple-select-jobCategories']");
    }

    get JobTypesItems() {
        return cy.get(".p-checkbox.p-component");
    }

    get JobTypeOffshore() {
        return cy.get("[data-cy='delete-filter-Offshore']");
    }

    get JobTypeShoreBased() {
        return cy.get("[data-cy='delete-filter-Shore Based']");
    }

    get JobTypeCommercial() {
        return cy.get("[data-cy='delete-filter-Commercial']");
    }

    get InvalidCredentialsError() {
        return cy.get();
    }

    get FoundedInDropdown() {
        return cy.get("[data-cy='input-select-founded_in']");
    }

    get FoundedItems() {
        return cy.get(".p-dropdown-item");
    }

    get FoundedValue() {
        return cy.get("div[class='p-dropdown p-component p-inputwrapper p-inputwrapper-filled w-full w-6'] div[class='flex gap-2 align-items-center']");
    }
    get LocationsDropdown() {
        return cy.get("[data-cy='input-multiple-select-locations'] .p-multiselect-trigger");
    }

    get LocationsSearch() {
        return cy.get(".p-inputtext.p-component.p-multiselect-filter");
    }

    get LocationsFirstItemFromSearch() {
        return cy.get(".p-multiselect-item").first();
    }

    get LocationSelected() {
        return cy.get(".flex.gap-2.align-items-center").last();
    }

    get LocationHighlighted() {
        return cy.get(".p-multiselect-item.p-highlight");
    }

    get UpdateButton() {
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    get ToastifyError() {
        return cy.get(".Toastify__toast-body");
    }
}

export const companyImport = new CompanyPage();