import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am in any of the different sections of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})


//ACCESS TO SECTION OF WEBSITE
When("I click on {string} section in the footer", (button) => {
    cy.get('.colInfo').contains(button, {matchCase: false}).click()
})

Then('I validate that I access the {word} webpage', (webpage) => {
    cy.url().should('include', webpage)
})


//ACCESS TO SOCIAL MEDIA
//through button
When("I click on {string} social media in the footer", (button) => {
    cy.get('.colSocialMedia a').contains(button, {matchCase: false}).as('link')
})

//through logo
When("I click on {string} logo in the footer", (button) => {
    cy.get('.colSocialMedia a').contains(button, {matchCase: false}).prev().as('link')
})


Then('I validate that I access the {word} main site', (webpage) => {
    cy.get('@link').then((link) => {
        cy.wrap(link).should('have.attr', 'href', 'https://' + webpage)
                            .and('have.attr', 'target', "_blank")
        
        cy.request({
            method: "GET",
            url: link.prop('href')
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})

