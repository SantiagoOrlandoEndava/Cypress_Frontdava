import Contact from "./POContact";

/// <reference types="cypress" />


describe('Contact form', () => {

    const contact = new Contact();
        
    beforeEach(() => {
        cy.visit('')
        cy.viewport(1500, 660);
        cy.get('#navBarLinks > a').contains('contact', {matchCase: false}).click();
    });

    it('Happy Path', () => {
        cy.get('#contactTitle').contains('Contactanos')

        contact.enterTextInField('Nombre', 'Name of twentyfive charss')
        contact.enterTextInField('Apellido', 'Last of twentyfive charss')
        contact.enterTextInField('Email', 'validMailOfFiftyCharactersAaaaaaaaaaaaaa@gmail.com')
        
        //type('Write tests{enter}')
        //podría ponerle algo con tab asi va al siguiente campo con eso y pruebo otra cosa.

        contact.submit()
    });

    it('Negative Path - Empty fields', () => {
        contact.submit()

        contact.verifyNumberOfFieldsWithErrors(3)
        contact.verifyFieldsShowError('Debe completar este campo')
    });

    it('Negative Path - Name and LastName with special characters', () => {
        contact.enterTextInField('Nombre', 'invalid*')
        contact.enterTextInField('Apellido', 'mmm#/aaa')
        
        contact.verifyNumberOfFieldsWithErrors(2)
        contact.verifyFieldsShowError('Utilice solo letras')
    });

    it('Negative Path - Email without needed characters', () => {
        contact.enterTextInField('Email', 'mailInvalido')
        contact.verifyNumberOfFieldsWithErrors(1)
        contact.verifyFieldsShowError('Utilice formato email')

        contact.enterTextInField('Email', 'mail.withoutAtSymbol')
        contact.verifyNumberOfFieldsWithErrors(1)
        contact.verifyFieldsShowError('Utilice formato email')

        contact.enterTextInField('Email', 'mail@withoutPoint')
        contact.verifyNumberOfFieldsWithErrors(1)
        contact.verifyFieldsShowError('Utilice formato email')
    });

    it('Negative Path - Longer inputs than allowed', () => {
        contact.enterTextInField('Nombre', 'a very very large nameeeee')
        contact.enterTextInField('Apellido', 'a very large last nameeeee')
        contact.enterTextInField('Email', 'aVeryVeryVeryVeryLongEmailWithBothSymbols@gmail.com')

        contact.verifyNumberOfFieldsWithErrors(3)
        contact.verifyFieldsShowError('Superaste el máximo de carácteres permitido')
    });

});