import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am in any of the different sections of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

When("I click on {string} in the footer", (button) => {
    cy.get('.colInfo').contains(button, {matchCase: false}).click()
})

Then('I validate that I access the {word} webpage', (webpage) => {
    cy.url().should('include', webpage)
})

