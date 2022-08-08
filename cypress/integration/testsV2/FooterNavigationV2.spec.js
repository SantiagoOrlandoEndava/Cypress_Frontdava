import Endavel from "../pageObject.js";

/// <reference types="cypress" />

describe('Navigate through Footer', () => {

    const endavel = new Endavel();

    context('Navigate to the different sections of the website', () => {
        
        beforeEach(() => {
            
            cy.visit('http://localhost:3000/')
        })
    
        it('Navigate from Main Page to Nosotros', () => {
            
            endavel.navigateToWebsite('nosotros', 'aboutus', 'footer')
        })
    
        it('Navigate from Main Page to Contacto', () => {
            
            endavel.navigateToWebsite('contacto', 'contact', 'footer')
        })
    
        it('Navigate from Main Page to Terminos y Condiciones', () => {
            
            endavel.navigateToWebsite('terminos y Condiciones', 'termsandconditions', 'footer')
            
            cy.get('#titleTerms').contains('Términos y Condiciones');
        })
    
    
        context('Navigate from a secondary page to another one', () => {
            
            beforeEach(() => {
                
                cy.get('#footerLinks > a').contains('Contacto', {matchCase: false}).click()
            })
    
            it('Navigate from Contacto Page to Acerca de Nosotros', () => {
                
                endavel.navigateToWebsite('nosotros', 'aboutus', 'footer')
            })
        
            it('Navigate from Contacto Page  to Terminos y Condiciones', () => {
                
                endavel.navigateToWebsite('Terminos y Condiciones', 'termsandconditions', 'footer')
            })
        })
    })

    context('Navigate to social media', () => {

        it('Navigate from Main Page to Facebook', () => {

            endavel.accessSocialMedia('facebook', 'https://www.facebook.com')
        })


        it('Navigate from Main Page to Twitter', () => {
            
            endavel.accessSocialMedia('Twitter', 'https://www.twitter.com')
        })


        it('Navigate from Main Page to Instagram', () => {
            
            endavel.accessSocialMedia('instagram', 'https://www.instagram.com')
        })

    })

})