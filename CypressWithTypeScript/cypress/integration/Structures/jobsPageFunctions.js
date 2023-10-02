/// <reference types="cypress" />

import { jobImport } from '../Getters/jobsPage.js';
import data from '../../fixtures/dataJob.json';

class JobsPageFunctions {
    CreateAJob() {
        jobImport.NewJobButton
            .should('be.visible')
            .click();
        jobImport.JobTitleInput
            .type(data.title)
            .should('have.value', data.title);
        jobImport.JobCategoryDropDown
            .should('be.visible')
            .select(data.category);
        jobImport.JobPositionDropDown
            .should('be.visible')
            .select(data.position);
        jobImport.GenerateWithAiButton
            .should('be.visible')
            .click();

        this.nationalityPick(data.nationalityOption);
        this.typeOfVoyagePick(data.typeOfVoyagePick);
        this.selectSignOnDate(data.dayOfMonth);

        jobImport.VesselType
            .type(data.vesselType)
            .should('have.value', data.vesselType);
        jobImport.VesselName
            .type(data.vesselName)
            .should('have.value', data.vesselName);
        jobImport.VesselTeu
            .type(data.teu)
            .should('have.value', data.teu);
        jobImport.VesselMainEngine
            .select(data.mainEngine)
            .should('have.value', data.mainEngine);
        jobImport.VesselBph
            .type(data.bhp)
            .should('have.value', data.bhp);
        jobImport.VesselKw
            .type(data.kw)
            .should('have.value', data.kw);
        jobImport.VesselFlag
            .select(data.optionFlag)
            .should('have.value', data.optionFlag);
        jobImport.VesselYearBuild
            .type(data.yearBuild)
            .should('have.value', data.yearBuild);
        jobImport.VesselGt
            .type(data.gt)
            .should('have.value', data.gt);
        jobImport.VesselDwt
            .type(data.dwt)
            .should('have.value', data.dwt);
        jobImport.SalaryCurrency
            .select(data.currency)
            .should('have.value', data.currency);
        jobImport.SalaryFrom
            .type(data.salaryFrom)
            .should('have.value', data.salaryFrom);
        jobImport.SalaryTo
            .type(data.salaryTo)
            .should('have.value', data.salaryTo);

        //min requirements 

        jobImport.MultipleCandidates
            .check()
            .should('be.checked');
        jobImport.MultipleCandidatesCount
            .type(data.countCandidates)
            .should('have.value', data.countCandidates);

        jobImport.PublishButton
            .should('be.visible')
            .click();


        //check
        jobImport.ToastifyError
        .should('be.visible')
        .contains('You have successfully added a job');
        cy.url().should('include', Cypress.env('jobs_url'));
        cy.contains(data.title).first();

    }


    clickOnCancelButton() {
        jobImport.CancelButton
            .should('be.visible')
            .click();
    }

    nationalityPick(nationalityOption) {
        if (nationalityOption == 1) {
            jobImport.NationalityWorldwide
                .check()
                .should('be.checked');
        }
        else if (nationalityOption == 2) {
            jobImport.NationalityEUOnly
                .check()
                .should('be.checked');
        }
        else if (nationalityOption == 3) {
            jobImport.NationalityCustom
                .check()
                .should('be.checked');
            this.selectAllNationalities();
        }
    }

    selectAllNationalities() {
        jobImport.NationalitiesDropDown
            .should('be.visible')
            .click();
        jobImport.AllNationalitiesCheckBox
            .check()
            .should('be.checked');
    }

    typeOfVoyagePick(voyageOption) {
        if (voyageOption == 1) {
            jobImport.ContractPermanent
                .check()
                .should('be.checked');
        }
        else if (voyageOption == 2) {
            jobImport.ContractTemporary
                .check()
                .should('be.checked');
        }
        else if (voyageOption == 3) {
            jobImport.ContractPerVoyage
                .check()
                .should('be.checked');
        }
    }

    selectSignOnDate(dayOfMonth) {
        jobImport.SignOnDate
            .should('be.visible')
            .click();
        jobImport.SignOnDateNextMonth
            .should('be.visible')
            .click();
        cy.contains(dayOfMonth)
            .should('be.visible')
            .click();
    }

}

export default new JobsPageFunctions();