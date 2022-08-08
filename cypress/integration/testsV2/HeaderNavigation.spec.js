import Endavel from "../pageObject";

describe('Header navigation', () => {

    const endavel = new Endavel();

    beforeEach(() => {
        
        cy.visit('http://localhost:3000/');

        cy.viewport(1500, 660);
    });

    it('Navigate from the main page to Destinos', () => {
        
        endavel.navigateToWebsite('destinos', 'destinations', 'header');
    });

    it('Naviagte from the main page to Conciertos', () => {
        
        endavel.navigateToWebsite('conciertos', 'concerts', 'header');
    });

    it('Navigate from the main page to Eventos', () => {
        
        endavel.navigateToWebsite('eventos', 'events', 'header');
    });

    it('Navigate from the main page to Paquetes', () => {
        
        endavel.navigateToWebsite('paquetes', 'packages', 'header');
    });

    it('Navigate from the main page to Contacto', () => {
        
        endavel.navigateToWebsite('contacto', 'contact', 'header');
    });

    it('Navigate from the main page to Mi Cuenta', () => {
        
        cy.get('#navBarButton > button').click();

        cy.url().should('include','myaccount');
    });
    
});