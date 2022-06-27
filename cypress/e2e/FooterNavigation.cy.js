/// <reference types="cypress" />

describe('Navigate through Footer', () => {
    
    context('Navigate to the different sections of the website', () => {
        
        beforeEach(() => {
            cy.visit('')
            cy.get('.LogoNavbar')
        })
    
        it('Navigate from Main Page to Acerca de Nosotros', () => {
            cy.get('.colInfo').contains('Acerca de Nosotros').click()
            cy.url().should('include', 'AcercaDeNosotros')
        })
    
        it('Navigate from Main Page to Contacto', () => {
            cy.get('.colInfo').contains('Contacto').click()
            cy.url().should('include', 'Contacto')
        })
    
        it('Navigate from Main Page to Terminos y Condiciones', () => {
            cy.get('.colInfo').contains('minos y Condiciones').click()
            cy.url().should('include', 'TerminosYCondiciones')
        })
    
    
        context('Navigate from a secondary page to another one', () => {
            
            beforeEach(() => {
                cy.get('.colInfo').contains('Contacto').click()
            })
    
            it('Navigate from Contacto Page to Acerca de Nosotros', () => {
                cy.get('.colInfo').contains('Acerca de Nosotros').click()
                cy.url().should('include', 'AcercaDeNosotros')
            })
        
            it('Navigate from Contacto Page  to Terminos y Condiciones', () => {
                cy.get('.colInfo').contains('minos y Condiciones').click()
                cy.url().should('include', 'TerminosYCondiciones')
            })
    
        })
    })

    context('Navigate to social media', () => {
        
        function accessSocialMedia(socialMedia, website) {
            cy.get('.colSocialMedia a').contains(socialMedia, {matchCase: false}).then((a) => {
                cy.wrap(a).should('have.attr', 'href', website)
                const url = a.prop('href')

                cy.request({
                    method: "GET",
                    url: url
                }).then(response => {
                    // let body = response.body;
                    // expect(body).to.include('</html>')
                    expect(response.status).to.eq(200)
                })
            })
        }

        function accessSocialMediaWithLogo(socialMedia, website) {
            cy.get('.colSocialMedia a').contains(socialMedia, {matchCase: false}).prev().then((a) => {
                cy.wrap(a).should('have.attr', 'href', website)
                const url = a.prop('href')

                cy.request({
                    method: "GET",
                    url: url
                }).then(response => {
                    // let body = response.body;
                    // expect(body).to.include('</html>')
                    expect(response.status).to.eq(200)
                })
            })
        }

        beforeEach(() => {
            cy.visit('')
            cy.get('.LogoNavbar')
        })
    
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