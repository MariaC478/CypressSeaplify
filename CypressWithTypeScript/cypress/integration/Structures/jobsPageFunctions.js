/// <reference types="cypress" />

import { jobImport } from '../Getters/jobsPage.js';
import data from '../../fixtures/dataJob.json';

class JobsPageFunctions {
    CreateAJob() {
        jobImport.NewJobButton
            .should('be.visible')
            .click();
        cy.wait(2000);

        jobImport.JobTitleInput
            .click({ force: true })
            .clear()
            .type(data.title)
            .should('have.value', data.title);

        jobImport.JobCategoryDropDown.click({ force: true });
        jobImport.JobItems
            .eq(data.category)
            .click({ force: true });

        jobImport.JobPositionDropDown
            .click({ force: true });
        jobImport.JobItems
            .eq(data.position)
            .click({ force: true });

        cy.wait(1000);

        jobImport.GenerateWithAiButton
            .should('be.visible')
            .click({ force: true });

        cy.wait(1000);
        jobImport.JobGenerateAgree.click({ force: true });

        this.nationalityPick(data.nationalityOption);
        this.typeOfVoyagePick(data.typeOfVoyagePick);
        this.selectSignOnDate(data.dayOfMonth);

        jobImport.VesselType
            .click({ force: true });
        cy.wait(1000);
        jobImport.VesselSearch
            .click({ force: true })
            .type(data.vesselType, { force: true, delay: 10 })

        jobImport.FirstItemFromSearch
            .click({ force: true });

        jobImport.VesselName
            .click({ force: true })
            .clear()
            .type(data.vesselName)
            .should('have.value', data.vesselName);

        jobImport.VesselTeu
            .click({ force: true })
            .clear()
            .type(data.teu)
            .should('have.value', data.teu);

        jobImport.VesselMainEngine
            .click({ force: true });
        jobImport.JobItems
            .eq(data.mainEngine)
            .click({ force: true });

        jobImport.VesselBph
            .click({ force: true })
            .clear()
            .type(data.bhp)
            .should('have.value', data.bhp);

        jobImport.VesselKw
            .click({ force: true })
            .clear()
            .type(data.kw)
            .should('have.value', data.kw);

        jobImport.VesselFlag
            .click({ force: true });
        jobImport.VesselSearch
            .type(data.vesselFlag, { force: true })
        jobImport.FirstItemFromSearch
            .click({ force: true });

        jobImport.VesselYearBuild
            .click({ force: true })
            .clear()
            .type(data.yearBuild)
            .should('have.value', data.yearBuild);

        jobImport.VesselGt
            .click({ force: true })
            .clear()
            .type(data.gt)
            .should('have.value', data.gt);

        jobImport.VesselDwt
            .click({ force: true })
            .clear()
            .type(data.dwt)
            .should('have.value', data.dwt);

        jobImport.SalaryCurrency
            .click({ force: true });
        jobImport.JobItems
            .eq(data.currency)
            .click({ force: true });

        jobImport.SalaryFrom
            .click({ force: true })
            .clear()
            .type(data.salaryFrom)

        jobImport.SalaryTo
            .click({ force: true })
            .clear()
            .type(data.salaryTo)

        //min requirements 

        jobImport.MultipleCandidates
            .click({ force: true })
        jobImport.MultipleCandidatesCount
            .click({ force: true })
            .clear()
            .type(data.countCandidates)
            .should('have.value', data.countCandidates);

        jobImport.PublishButton
            .should('be.visible')
            .click({ force: true });

        jobImport.xGiveFeedback
            .click({ force: true });

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
            .click({ force: true });
    }

    nationalityPick(nationalityOption) {
        if (nationalityOption == 1) {
            jobImport.NationalityWorldwide
                .check({ force: true })
        }
        else if (nationalityOption == 2) {
            jobImport.NationalityEUOnly
                .check({ force: true })
        }
        else if (nationalityOption == 3) {
            jobImport.NationalityCustom
                .check({ force: true })
            this.selectAllNationalities();
        }
    }

    selectAllNationalities() {
        jobImport.NationalitiesDropDown
            .should('be.visible')
            .click({ force: true });
        jobImport.AllNationalitiesCheckBox
            .check({ force: true })
    }

    typeOfVoyagePick(voyageOption) {
        if (voyageOption == 1) {
            jobImport.ContractPermanent
                .check({ force: true })
        }
        else if (voyageOption == 2) {
            jobImport.ContractTemporary
                .check({ force: true })
        }
        else if (voyageOption == 3) {
            jobImport.ContractPerVoyage
                .check({ force: true })
        }
    }

    selectSignOnDate(dayOfMonth) {
        cy.wait(1000);
        jobImport.SignOnDate
            .click({ force: true })
        jobImport.SignOnDateNextMonth
            .click({ force: true })
        cy.contains(dayOfMonth)
            .click({ force: true })
    }

}

export default new JobsPageFunctions();