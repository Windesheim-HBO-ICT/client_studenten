# Testen van de Steen papier schaar applicatie

## Tooling - Visual Studio Code
Voor het testen met CypressJS is Visual Studio Code geschikter dan Webstorm. Daarom is het sterk aanbevolen om Visual Studio Code te gebruiken.  
Na het installeren van Visual Studio Code moet je ook een extensie installeren van Microsoft: Live Preview.

## Onderwerpen
- setup
- testen runnen
- projectstructuur en configuratie
- voorbeeld testen hergebruiken
- window testen
- basis testen van elementen
- events testen
- api testen
- screenshots voor elementen die verdwijnen
- alle testen runnen

## Projectstructuur en configuratie

### projectstructuur
De projectstructuur is als volgt:
```
testen
├── README.md
├── app
├── testen
│   ├── cypress
│   │   ├── e2e
│   │   │   ├── 1-getting-started       << voorbeeld een elementaire test
│   │   │   ├── 2-advanced-examples     << voorbeeld een uitgebreide testen
│   │   │   ├── 3-steen-papier-schaar   << voorbeeld testen toegepast op de steen papier schaar applicatie
│   │   ├── screenshots                 << screenshots van specifiek testenvoorbeeld testen toegepast op de steen papier schaar applicatie
│   ├── cypress.config.js               << configuratie van cypress, voorbeeld testen uitgeschakeld
│   ├── package.json                    << start command in scripts
```

### configuratie
In de cypress.config.js is de volgende configuratie opgenomen
om de voorbeeld testen uit te schakelen:

```
module.exports = defineConfig({
  e2e: {
...
    excludeSpecPattern: [                   <<<
      '*/**/1-getting-started/*',           <<<
      '*/**/2-advanced-examples/*',         <<<
    ]
...
  },
```
## Project starten

Installeren node_modules:
`$ npm i`

Uitvoeren testen
```
// package.json
...
  "scripts": {
    "test": "npx cypress open",
    "cypress:open": "cypress open"
  },
...
```



## Truc om toch alle testen in één keer te runnen
Import alle test bestanden. Run alleen `99-all.cy.js`.
