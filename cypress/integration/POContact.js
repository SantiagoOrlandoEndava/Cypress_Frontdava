class Contact {

    enterTextInField(field, text) {
        cy.get('#contactForm #inputLabel').contains(field).parent().find('input').clear().type(text)
    }

    submit() {
        cy.get('form button').contains('Siguiente').click()
    }

    verifyNumberOfFieldsWithErrors(numberOfFields) {
        cy.get('.inputContainerWithErrorMessage').should('have.length', numberOfFields)
    }

    verifyFieldsShowError(errorMessage) {
        cy.get('.inputContainerWithErrorMessage').each(field => {
            cy.wrap(field).find('input').should('have.class', 'invalid')
            cy.wrap(field).contains(errorMessage)
        })
    }

}

export default Contact;