/// <reference types="cypress" />


class JobsPage {
    get NewJobButton() {
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    get DeleteButtonFirst() {
        return cy.get(".pi.pi-trash").first();
    }

    get ConfirmDelete() {
        return cy.get("button[type='submit']");
    }
    get BackButton() {
        return cy.get(".pi.pi-arrow-left").first();
    }
    get PublishButton() {
        return cy.get("button[type='submit']").first();
    }

    get CancelButton() {
        return cy.get("button[class='sc-7c932303-0 bGcDlw']").first();
    }

    get JobTitleInput() {
        return cy.get("input[data-cy='input-text-title']");
    }

    get JobCategoryDropDown() {
        return cy.get("[data-cy='input-select-jobCategory'] .p-dropdown-trigger");
    }

    get JobCategoryDropDownSelected() {
        return cy.get("div[data-cy='input-select-jobCategory'] .flex.gap-2.align-items-center");
    }

    get JobItems() {
        return cy.get(".p-dropdown-item");
    }

    get JobPositionDropDown() {
        return cy.get("[data-cy='input-select-position'] .p-dropdown-trigger");
    }

    get JobPositionDropDownSelected() {
        return cy.get("[data-cy='input-select-position'] div[class='flex gap-2 align-items-center']");
    }

    get GenerateWithAiButton() {
        return cy.get("[data-cy='generate-with-ai-button']");
    }

    get JobGenerateAgree() {
        return cy.get(".sc-8df92d3d-0 > .flex > .fgigjA");
    }

    get NationalityWorldwide() {
        return cy.get("input[name='worldwide']");
    }

    get NationalityEUOnly() {
        return cy.get("input[name='eu']");
    }

    get NationalityCustom() {
        return cy.get("input[name='acceptedNationalities']");
    }

    get NationalitiesDropDown() {
        return cy.get("div[class='p-multiselect p-component p-inputwrapper p-inputwrapper-focus w-full border-round-lg'] div[class='p-multiselect-label p-placeholder']");
    }

    get AllNationalitiesCheckBox() {
        return cy.get("div[role='checkbox'] div[class='p-checkbox-box']");
    }

    get ContractPermanent() {
        return cy.get("input[name='permanent']");
    }

    get ContractTemporary() {
        return cy.get("input[name='temporary']");
    }

    get ContractPerVoyage() {
        return cy.get("input[name='perVoyage']");
    }

    get SignOnDate() {
        return cy.get("[data-cy='input-date-signOnDate'] .p-inputtext");
    }

    get SignOnDateNextMonth() {
        return cy.get("button[class='p-datepicker-next']");
    }

    get DayHighlight() {
        return cy.get("span[class='p-highlight']");
    }

    get VesselType() {
        return cy.get(".p-dropdown-label.p-inputtext.p-placeholder").eq(0);
    }

    get TypeSelected() {
        return cy.get(".p-dropdown-label.p-inputtext");
    }

    get SelectedDropDownHighlighted() {
        return cy.get(".p-dropdown-item.p-highlight");
    }

    get VesselFlag() {
        return cy.get(".p-dropdown.p-component.p-inputwrapper.w-full").eq(4);
    }

    get Search() {
        return cy.get(".p-dropdown-filter.p-inputtext.p-component");
    }

    get FirstItemFromSearch() {
        return cy.get(".p-dropdown-item").first();
    }

    get VesselName() {
        return cy.get("input[name='vesselName']");
    }

    get VesselTeu() {
        return cy.get("input[name='teu']");
    }

    get VesselMainEngine() {
        return cy.get(".p-dropdown.p-component.p-inputwrapper.w-full").eq(3);
    }

    get VesselBph() {
        return cy.get("input[name='bph']");
    }

    get VesselKw() {
        return cy.get("input[name='kw']");
    }

    get VesselYearBuild() {
        return cy.get("input[name='vesselYearBuild']");
    }

    get VesselGt() {
        return cy.get("input[name='gt']");
    }

    get VesselDwt() {
        return cy.get("input[name='dwt']");
    }

    get SalaryCurrency() {
        return cy.get(".p-dropdown.p-component.p-inputwrapper.w-full").eq(5);
    }

    get SalaryFrom() {
        return cy.get("input[name='salaryFrom']");
    }

    get SalaryTo() {
        return cy.get("input[name='salaryTo']");
    }

    get MultipleCandidates() {
        return cy.get("[data-cy='checkbox-hiringMultiple']");
    }

    get MultipleCandidatesCount() {
        return cy.get("[data-cy='input-number-hiringMultiple']");
    }

    get xGiveFeedback() {
        return cy.get(".p-dialog-header-icon");
    }

    get ToastifyError() {
        return cy.get(".Toastify__toast-body");
    }
}

export const jobImport = new JobsPage();