/// <reference types="cypress" />

import JobsPage from '../Getters/jobsPage.js';

class JobsPageFunctions extends JobsPage {
    clickOnNewJobButton() {
        this.getNewJobButton().click();
    }

    clickOnPublishButton(){
        this.getPublishButton().click();
    }

    clickOnCancelButton(){
        this.getCancelButton().click();
    }

    typeJobTitleInput(title) {
        this.getJobTitleInput()
            .type(title)
            .should('have.value', title);
    }

    selectJobCategoryDropDown(optionCategory) {
        this.getJobCategoryDropDown().select(optionCategory);
    }

    selectJobPositionDropDown(optionPosition) {
        this.getJobPositionDropDown().select(optionPosition);
    }

    clickOnGenerateWithAiButton() {
        this.getGenerateWithAiButton().click();
    }

    checkNationalityWorldwide(){
        this.getNationalityWorldwide().check();
    }
    checkNationalityEUOnly(){
        this.getNationalityEUOnly().check();
    }
    checkNationalityCustom(){
        this.getNationalityCustom().check();
    }
    selectAllNationalities(){
        this.getNationalitiesDropDown().click();
        this.getAllNationalitiesCheckBox().check();
    }
    checkContractPermanent(){
        this.getContractPermanent().check();
    }
    checkContractTemporary(){
        this.getContractTemporary().check();
    }
    checkContractPerVoyage(){
        this.getContractPerVoyage().check();
    }

    selectSignOnDate(dayOfMonth) {
        this.getSignOnDate().click;
        cy.get("button[class='p-datepicker-next']").click();
        cy.contains(dayOfMonth).click();
    }

    selectVesselType(optionVesselType) {
        this.getVesselType().type(optionVesselType);
    }

    typeVesselName(vesselName) {
        this.getVesselName().type(vesselName);
    }

    typeVesselTeu(vesselTeu) {
        this.getVesselTeu().type(vesselTeu);
    }

    selectVesselMainEngine(mainEngine) {
        this.getVesselMainEngine().select(mainEngine);
    }

    typeVesselBph(bph) {
        this.getVesselBph().type(bph);
    }

    typeVesselKw(kw) {
        this.getVesselKw().type(kw);
    }

    selectVesselFlag(optionFlag) {
        this.getVesselFlag().select(optionFlag);
    }

    typeVesselYearBuild(yearBuild) {
        this.getVesselYearBuild().type(yearBuild);
    }

    typeVesselGt(gt) {
        this.getVesselGt().type(gt);
    }

    typeVesselDwt(dwt) {
        this.getVesselDwt().type(dwt);
    }

    selectSalaryCurrency(optionCurrency) {
        this.getSalaryCurrency().select(optionCurrency);
    }

    typeSalaryFrom(salaryFrom) {
        this.getSalaryFrom().type(salaryFrom);
    }

    typeSalaryTo(salaryTo) {
        this.getSalaryTo().type(salaryTo);
    }

    //////min requirements 

    checkMultipleCandidates() {
        this.getMultipleCandidates().check();
    }

    typeMultipleCandidatesCount(candidatesCount) {
        this.getMultipleCandidatesCount().type(candidatesCount);
    }

    postAJobWithRequired(title,optionCategory,optionPosition) {
        this.typeJobTitleInput(title);
        this.selectJobCategoryDropDown(optionCategory);
        this.selectJobPositionDropDown(optionPosition);
        this.clickOnGenerateWithAiButton();
        cy.wait(1000);
        this.clickOnPublishButton();
    }

    postAJob(title,optionCategory,optionPosition,dayOfMonth,salaryFrom,salaryTo,candidatesCount){
        this.postAJobWithRequired(title,optionCategory,optionPosition);
        this.checkNationalityEUOnly();
        this.checkContractPerVoyage();
        this.selectSignOnDate(dayOfMonth);
        ///details
        this.typeSalaryFrom(salaryFrom);
        this.typeSalaryTo(salaryTo);
        this.checkMultipleCandidates();
        this.typeMultipleCandidatesCount(candidatesCount);
    }

}

export default new JobsPageFunctions();