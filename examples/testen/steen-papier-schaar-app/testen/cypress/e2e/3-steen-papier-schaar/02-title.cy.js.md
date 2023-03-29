# Elementen controleren en testen

Uitdagingen:
- selector toevoegen
- in shadow element selecteren
```
  cy.get('steenpapierschaar-app')             <<< app webcomponent
  .shadow()                                   <<< selecteer shadow
  .find('[data-cy="page-title"]')             <<< element met attribuut data-cy...
  .should('have.text', 'Steen papier schaar')
```
