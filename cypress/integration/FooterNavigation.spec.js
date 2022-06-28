/// <reference types="cypress" />

describe('Navigate through Footer', () => {
    
    context('Navigate to the different sections of the website', () => {
        
        beforeEach(() => {
            cy.visit('')
            cy.get('.LogoNavbar')
        })

        function navigateToWebsite(website, url) {
            cy.get('.colInfo').contains(website, {matchCase: false}).click()
            cy.url().should('include', url)
        }
    
        it('Navigate from Main Page to Acerca de Nosotros', () => {
            navigateToWebsite('Acerca de nosotros', 'AcercaDeNosotros')
        })
    
        it('Navigate from Main Page to Contacto', () => {
            navigateToWebsite('contacto', 'Contacto')
        })
    
        it('Navigate from Main Page to Terminos y Condiciones', () => {
            navigateToWebsite('rminos y Condiciones', 'TerminosYCondiciones')
        })
    
    
        context('Navigate from a secondary page to another one', () => {
            
            beforeEach(() => {
                cy.get('.colInfo').contains('Contacto').click()
            })
    
            it('Navigate from Contacto Page to Acerca de Nosotros', () => {
                navigateToWebsite('Acerca de nosotros', 'AcercaDeNosotros')
            })
        
            it('Navigate from Contacto Page  to Terminos y Condiciones', () => {
                navigateToWebsite('rminos y Condiciones', 'TerminosYCondiciones')
            })
    
        })
    })

    context('Navigate to social media', () => {
        
        beforeEach(() => {
            cy.visit('')
            cy.get('.LogoNavbar')
        })

        function accessSocialMedia(socialMedia, website) {
            cy.get('.colSocialMedia a').contains(socialMedia, {matchCase: false}).then((a) => {
                cy.wrap(a).should('have.attr', 'href', website)
                    .and('have.attr', 'target', "_blank")
                
                const url = a.prop('href')

                cy.request({
                    method: "GET",
                    url: url
                }).then(response => {
                    expect(response.status).to.eq(200)
                })
            })
        }
//improve this to avoid code duplication
        function accessSocialMediaWithLogo(socialMedia, website) {
            cy.get('.colSocialMedia a').contains(socialMedia, {matchCase: false}).prev().then((a) => {
                cy.wrap(a).should('have.attr', 'href', website)
                    .and('have.attr', 'target', "_blank")
                
                const url = a.prop('href')

                cy.request({
                    method: "GET",
                    url: url
                }).then(response => {
                    expect(response.status).to.eq(200)
                })
            })
        }
    
        it('Navigate from Main Page to Facebook', () => {
            accessSocialMedia('facebook', 'https://www.facebook.com')
        })

        it('Navigate from Main Page to Facebook with logo', () => {
            accessSocialMediaWithLogo('facebook', 'https://www.facebook.com')
        })


        it('Navigate from Main Page to Twitter', () => {
            accessSocialMedia('Twitter', 'https://www.twitter.com')
        })

        it('Navigate from Main Page to Twitter with logo', () => {
            accessSocialMediaWithLogo('Twitter', 'https://www.twitter.com')
        })


        it('Navigate from Main Page to Instagram', () => {
            accessSocialMedia('instagram', 'https://www.instagram.com')
        })

        it('Navigate from Main Page to Instagram with logo', () => {
            accessSocialMediaWithLogo('instagram', 'https://www.instagram.com')
        })

    })

})