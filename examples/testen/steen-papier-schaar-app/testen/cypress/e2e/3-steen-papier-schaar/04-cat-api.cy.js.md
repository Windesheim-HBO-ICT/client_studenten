# API's en requests en 📷
Een request een alias geven:

```
cy.intercept('**/cat/*').as('getCatImage')
```

Wachten op een alias (dus een request):

```
        cy.get('steenpapierschaar-app')
            ...
            .find('img')
            .click();                    <<< na click request aan server

        cy.wait('@getCatImage');         <<< wachten op response

        cy.get('steenpapierschaar-app')
             ...
            .find('img')
            .should('be.visible')         <<< image zichtbaar

        cy.screenshot();                  <<< screenshot van resultaat 
                                              omdat de overlay verdwijnt 
                                              na een paar seconden
```
