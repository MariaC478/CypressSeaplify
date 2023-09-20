/// <reference types="cypress" />
// ***********************************************
import { faker } from "@faker-js/faker";
// ***********************************************

Cypress.Commands.add('customRegistrationBeforeEach', () => {
  beforeEach(() => {
    cy.fixture('dataRegistration').then(function (data) {
      this.data = data;
    });
    cy.visit(data.logInURL);
  });
});


Cypress.Commands.add('generateFakeRegistrationData', () => {
  const lastNameFaker = faker.name.lastName();
  const firstNameFaker = faker.name.firstName();
  const companyNameFaker = faker.company.companyName();
  const emailFaker = faker.internet.email();
  const passwordFaker = faker.internet.password();

  return {
    lastName: lastNameFaker,
    firstName: firstNameFaker,
    companyName: companyNameFaker,
    email: emailFaker,
    password: passwordFaker,
  };
});
