/// <reference types="cypress" />


class JobsPage {
    get NewJobButton() {
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    get PublishButton() {
        return cy.get("button[class='sc-7c932303-0 fgigjA']").first();
    }

    get CancelButton() {
        return cy.get("button[class='sc-7c932303-0 bGcDlw']").first();
    }

    get JobTitleInput() {
        return cy.get("data-cy='input-text-title'");
    }

    get JobCategoryDropDown() {
        return cy.get("select[name='jobCategory']");
    }

    get JobPositionDropDown() {
        return cy.get("select[name='position']");
    }

    get GenerateWithAiButton() {
        return cy.get(".sc-7c932303-0.iKMKGB.mt-2.mr-auto");
    }

    get NationalityWorldwide(){
        return cy.get("input[name='worldwide']");
    }

    get NationalityEUOnly(){
        return cy.get("input[name='eu']");
    }

    get NationalityCustom(){
        return cy.get("input[name='acceptedNationalities']");
    }

    get NationalitiesDropDown()
    {
        return cy.get("div[class='p-multiselect p-component p-inputwrapper p-inputwrapper-focus w-full border-round-lg'] div[class='p-multiselect-label p-placeholder']");
    }

    get AllNationalitiesCheckBox(){
        return cy.get("div[role='checkbox'] div[class='p-checkbox-box']");
    }

    get ContractPermanent(){
        return cy.get("input[name='permanent']");
    }

    get ContractTemporary(){
        return cy.get("input[name='temporary']");
    }

    get ContractPerVoyage(){
        return cy.get("input[name='perVoyage']");
    }

    get SignOnDate() {
        return cy.get("input[name='signOnDate']");
    }

    get SignOnDateNextMonth(){
        return cy.get("button[class='p-datepicker-next']");
    }

    get VesselType() {
        return cy.get("select[name='vessel']");
    }

    get VesselName() {
        return cy.get("input[name='vesselName']");
    }

    get VesselTeu() {
        return cy.get("input[name='teu']");
    }

    get VesselMainEngine() {
        return cy.get("select[name='vesselEngineType']");
    }

    get VesselBph() {
        return cy.get("input[name='bph']");
    }

    get VesselKw() {
        return cy.get("input[name='kw']");
    }

    get VesselFlag() {
        return cy.get("select[name='vesselFlag']");
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
        return cy.get("select[name='salaryCurrency']")
    }

    get SalaryFrom() {
        return cy.get("input[name='salaryFrom']");
    }

    get SalaryTo() {
        return cy.get("input[name='salaryTo']");
    }

    //////min requirements 

    get MultipleCandidates() {
        return cy.get("data-cy='checkbox-hiringMultiple'");
    }

    get MultipleCandidatesCount() {
        return cy.get("data-cy='input-number-hiringMultiple'");
    }
}

export const jobImport = new JobsPage();