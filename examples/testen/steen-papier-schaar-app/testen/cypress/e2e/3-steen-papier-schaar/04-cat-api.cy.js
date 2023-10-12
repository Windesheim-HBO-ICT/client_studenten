const url = 'http://127.0.0.1:3000/examples/testen/steen-papier-schaar-app/app/index.html';

context('Click', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('should show the overlay with cat image', () => {

        // cy.intercept('**/cat/*').as('getCatImage')

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .click();

        // cy.wait('@getCatImage');

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('win-overlay')
            .shadow()
            .find('img')
            .should('be.visible')

        // cy.screenshot();
    });
});
