import Endavel from "./pageObject.js";

/// <reference types="cypress" />

describe('Navigate to website sections with landing page buttons', () => {
    
    const endavel = new Endavel();

    beforeEach(() => {
        cy.visit('')
    });

    it('Navigate to "Destinos"', () => {
        endavel.navigateToWebsite('destinos', 'destination', 'landingPage')
    });

    it('Navigate to "Conciertos"', () => {
        endavel.navigateToWebsite('conciertos', 'concerts', 'landingPage')
    });

    it('Navigate to "Eventos"', () => {
        endavel.navigateToWebsite('eventos', 'events', 'landingPage')
    });

    it('Navigate to "Paquetes"', () => {
        endavel.navigateToWebsite('Paquetes', 'packages', 'landingPage')
    });

});


