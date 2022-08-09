class Endavel {

    accessSocialMedia (socialMedia, website) {
        cy.get('#footerLinks > a').contains(socialMedia, {matchCase: false}).then((a) => {
            cy.wrap(a).should('have.attr', 'href', website)
                .and('have.attr', 'target', "_blank");
            
            const url = a.prop('href');
    
            cy.request({
                method: "GET",
                url: url
            }).then(response => {
                expect(response.status).to.eq(200);
            })
        })
    }
    
    navigateToWebsite(website, url, section) {
        
        if(section.toLowerCase() == 'footer'){
            cy.get('#footerLinks > a').contains(website, {matchCase: false}).click();
        }
        
        if(section.toLowerCase() == 'header'){
            cy.get('#navBarLinks > a').contains(website, {matchCase: false}).click();
        }

        if(section.toLowerCase() == 'landingpage'){
            cy.get('#showMoreButtons button').contains(website, {matchCase: false}).click();
        }

        cy.url().should('include', url);
    }
}

export default Endavel;