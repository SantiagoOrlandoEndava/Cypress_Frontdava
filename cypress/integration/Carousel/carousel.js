import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I enter the main page of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

When("I click on thumbnail {int} of the carrousel", (numberOfThumbnail) => {
    cy.get('.thumbs .thumb').eq(numberOfThumbnail -1).click().should('have.class', 'selected')
})



When("I click on the {word} arrow of the carrousel {int} times", (arrow, numberOfClicks) => {
    for(let i =0 ; i < numberOfClicks ; i++) {
        cy.get('.carousel-slider .control-' + arrow).click()
    }
})


Then('I validate that the correct {int} image is displayed', (numberOfImage) => {
    cy.validateImageIsVisible(numberOfImage)
    cy.wrap(numberOfImage).as('index')
})


And("I validate that the correct little circle and thumbnail are selected", () => {
    cy.get('@index').then((index) => {
        cy.get('.thumbs .thumb').eq(index -1).should('have.class', 'selected')
        cy.get('.control-dots .dot').eq(index -1).should('have.class', 'selected')
    })
})


When("I navigate through the landing page", () => {
    cy.get('.carousel-root')
})

Then('I validate that the carrousel switch to the following image after 4 seconds automatically', () => {
    
    // cy.get('.slider-wrapper li').eq(1).should('have.class', 'selected')
    cy.validateImageIsVisible(1)
    cy.wait(4000)
    cy.validateImageIsVisible(2)
    cy.wait(4000)
    cy.validateImageIsVisible(3)
})

And("I validate that after the last image it switches to the first one", () => {
    cy.wait(4000)
    cy.validateImageIsVisible(1)
})
