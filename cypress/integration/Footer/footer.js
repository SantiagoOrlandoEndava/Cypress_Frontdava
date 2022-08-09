import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am in any of the different sections of the website', () => {
    cy.visit('')
})


//ACCESS TO SECTION OF WEBSITE
When("I click on {string} section in the footer", (button) => {
    cy.get('#footerLinks > a').contains(button, {matchCase: false}).click();
})

Then('I validate that I access the {word} webpage', (webpage) => {
    cy.url().should('include', webpage)
})


//ACCESS TO SOCIAL MEDIA
When("I click on {string} social media in the footer", (button) => {
    cy.get('#footerLinks > a').contains(button, {matchCase: false}).as('link')
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
