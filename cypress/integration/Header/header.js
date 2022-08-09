import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am in any of the different sections of the website', () => {
    cy.visit('')
    cy.viewport(1500, 660);
})

When("I click on {word}", (button) => {
    cy.get('#navBarLinks > a').contains(button, {matchCase: false}).click();
})

Then('I am redirected to {word} page', (website) => {
    cy.url().should('include', website);
})