# Testen van de Steen papier schaar applicatie

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
- 

## Projectstructuur en configuratie
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

In de cypress.config.js is de volgende configuratie opgenomen
om de voorbeeld testen uit te schakelen:
```javascript
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

