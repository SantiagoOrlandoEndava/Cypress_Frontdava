import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am in any of the different sections of the website', () => {
    cy.visit('')
    cy.get('.LogoNavbar')
})

When("I click on social {string} in the footer to access social media", (button) => {
    cy.get('.colSocialMedia a').contains(button, {matchCase: false}).as('response')
})

Then('I validate that I access the {word} main site', (webpage) => {
    cy.get('@response').should('have.attr', 'href', 'https://' + webpage)
        .and('have.attr', 'target', "_blank")
    
    // const url = a.prop('href')

    // cy.request({
    //     method: "GET",
    //     url: url
    // }).then(response => {
    //     expect(response.status).to.eq(200)
    // })
})