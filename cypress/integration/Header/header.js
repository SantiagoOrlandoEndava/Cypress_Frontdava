import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am in the main page of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

And('I am not logged in', () => {
    cy.get('header button .MuiAvatar-circular').click()
    cy.get('[role="menu"]').contains('Registro')
})


When("I click on {word} in the navigation bar", (button) => {
    cy.get('header #navbar-pages').contains(button, {matchCase: false}).click({force: true})
})

Then('I access the {word} section webpage', (webpage) => {
    cy.url().should('include', webpage)
})

When("I click on Endavel logo", () => {
    cy.get('.LogoNavbar').click({force: true})
})

Then('I am in the main page of the website', (webpage) => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

