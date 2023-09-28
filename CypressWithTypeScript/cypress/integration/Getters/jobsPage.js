/// <reference types="cypress" />


class JobsPage {
    getNewJobButton() {
        return cy.get(".sc-7c932303-0.fgigjA");
    }

    getPublishButton() {
        return cy.get("button[class='sc-7c932303-0 fgigjA']").first();
    }

    getCancelButton() {
        return cy.get("button[class='sc-7c932303-0 bGcDlw']").first();
    }

    getJobTitleInput() {
        return cy.get("data-cy='input-text-title'");
    }

    getJobCategoryDropDown() {
        return cy.get("select[name='jobCategory']");
    }

    getJobPositionDropDown() {
        return cy.get("select[name='position']");
    }

    getGenerateWithAiButton() {
        return cy.get(".sc-7c932303-0.iKMKGB.mt-2.mr-auto");
    }

    getNationalityWorldwide(){
        return cy.get("input[name='worldwide']");
    }

    getNationalityEUOnly(){
        return cy.get("input[name='eu']");
    }

    getNationalityCustom(){
        return cy.get("input[name='acceptedNationalities']");
    }

    getNationalitiesDropDown()
    {
        return cy.get("div[class='p-multiselect p-component p-inputwrapper p-inputwrapper-focus w-full border-round-lg'] div[class='p-multiselect-label p-placeholder']");
    }

    getAllNationalitiesCheckBox(){
        return cy.get("div[role='checkbox'] div[class='p-checkbox-box']");
    }

    getContractPermanent(){
        return cy.get("input[name='permanent']");
    }

    getContractTemporary(){
        return cy.get("input[name='temporary']");
    }

    getContractPerVoyage(){
        return cy.get("input[name='perVoyage']");
    }

    getSignOnDate() {
        return cy.get("input[name='signOnDate']");
    }

    getVesselType() {
        return cy.get("select[name='vessel']");
    }

    getVesselName() {
        return cy.get("input[name='vesselName']");
    }

    getVesselTeu() {
        return cy.get("input[name='teu']");
    }

    getVesselMainEngine() {
        return cy.get("select[name='vesselEngineType']");
    }

    getVesselBph() {
        return cy.get("input[name='bph']");
    }

    getVesselKw() {
        return cy.get("input[name='kw']");
    }

    getVesselFlag() {
        return cy.get("select[name='vesselFlag']");
    }

    getVesselYearBuild() {
        return cy.get("input[name='vesselYearBuild']");
    }

    getVesselGt() {
        return cy.get("input[name='gt']");
    }

    getVesselDwt() {
        return cy.get("input[name='dwt']");
    }

    getSalaryCurrency() {
        return cy.get("select[name='salaryCurrency']")
    }

    getSalaryFrom() {
        return cy.get("input[name='salaryFrom']");
    }

    getSalaryTo() {
        return cy.get("input[name='salaryTo']");
    }

    //////min requirements 

    getMultipleCandidates() {
        return cy.get("data-cy='checkbox-hiringMultiple'");
    }

    getMultipleCandidatesCount() {
        return cy.get("data-cy='input-number-hiringMultiple'");
    }
}

export default JobsPage;
