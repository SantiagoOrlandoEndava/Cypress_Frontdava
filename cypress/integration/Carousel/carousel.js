import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I enter the main page of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

When("I click on thumbnail {int} of the carrousel", (numberOfThumbnail) => {
    cy.get('.thumbs .thumb').eq(numberOfThumbnail -1).click().should('have.class', 'selected')
})

Then('I validate that the correct {int} image is displayed', (numberOfImage) => {
    cy.get('.slider-wrapper li').eq(numberOfImage).should('have.class', 'selected')
})



When("I click on the <arrow> arrow of the carrousel", (numberOfThumbnail) => {
    cy.get('.thumbs .thumb').eq(numberOfThumbnail -1).click().should('have.class', 'selected')
})



