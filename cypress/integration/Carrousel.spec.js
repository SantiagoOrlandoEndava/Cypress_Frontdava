/// <reference types="cypress" />

describe('Carrousel functionality', () => {

    beforeEach(() => {
        cy.visit('')
        cy.get('.carousel-root')
    })

    function validateSelectedImageIsVisible (numberOfImage) { //numberOfImage starting from 0
        cy.get('.slider-wrapper li').eq(numberOfImage + 1).find('img').should('be.visible')
    }

    function validateSelectedThumbnail (numberOfImage) { //numberOfImage starting from 0
        cy.get('.thumbs .thumb').eq(numberOfImage).click().should('have.class', 'selected')
    }

    function validateSelectedDots (numberOfImage) { //numberOfImage starting from 0
        cy.get('.control-dots .dot').eq(numberOfImage).click().should('have.class', 'selected')
    }

    function clickRightArrow () {
        cy.get('.carousel-slider .control-next').click()
    }

    function clickLeftArrow () {
        cy.get('.carousel-slider .control-prev').click()
    }


    it('Navigate with arrows', () => {
        validateSelectedImageIsVisible(0)

        //right arrow
        clickRightArrow()
        validateSelectedImageIsVisible(1)

        clickRightArrow()
        validateSelectedImageIsVisible(2)

        clickRightArrow()
        validateSelectedImageIsVisible(0)

        //left arrow
        clickLeftArrow()
        validateSelectedImageIsVisible(2)

        clickLeftArrow()
        validateSelectedImageIsVisible(1)

        clickLeftArrow()
        validateSelectedImageIsVisible(0)
    })

    it('Navigate with thumbnails', () => {
        validateSelectedThumbnail(2)
        validateSelectedImageIsVisible(2)

        validateSelectedThumbnail(1)
        validateSelectedImageIsVisible(1)

        validateSelectedThumbnail(0)
        validateSelectedImageIsVisible(0)
    })

    it('Validate it is indicated which image is displayed', () => {
        validateSelectedDots(2)
        validateSelectedThumbnail(2)

        validateSelectedThumbnail(0)
        validateSelectedDots(0)

        clickRightArrow()
        validateSelectedDots(1)
        validateSelectedThumbnail(1)
    })

})