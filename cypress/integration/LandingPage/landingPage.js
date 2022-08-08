import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('I am in the main page of the website', () => {
    cy.visit('')
})

When("I navigate through the landing page", () => {
    cy.viewport(1500, 660);
})

Then('I validate that there is a nav bar at header', () => {
    cy.get("#navBar a").should('have.length', 6)
    cy.get("#navBarButton button")
})

And('I validate that there is a search bar below the nav bar', () => {
    cy.get("#searchBar input")
})

And('I validate that there is an image below the header and as the background of the company logo', () => {
    cy.get("#cover")
})

And('I validate that there are three cards displaying {word}', (section) => {
    cy.get("#events #cardsTitle").contains(section, {matchCase: false}).parent().next().get("#card").should('have.length', 3)
})

And('I validate that there is a footer at the bottom', () => {
    cy.get("#footerContainer")
})


