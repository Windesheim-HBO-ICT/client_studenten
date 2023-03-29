## Events, click op nested element

```
        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .click();                         <<< click!

        cy.get('steenpapierschaar-app')       <<< cypress wacht automatisch
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .should('have.class', 'selected') <<< controle op genest element

```
