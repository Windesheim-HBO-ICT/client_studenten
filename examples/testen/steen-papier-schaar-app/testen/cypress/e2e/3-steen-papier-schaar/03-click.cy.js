const url = 'http://localhost:63342/client_toetsing/examples/testen/steen-papier-schaar-app/app/index.html';

context('Click', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Click on tile should mark tile selected', () => {

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .click();

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .should('have.class', 'selected')

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-schaar')
            .shadow()
            .find('img')
            .should('have.class', 'selected')

    })

});

//card-tile id="card-steen"

