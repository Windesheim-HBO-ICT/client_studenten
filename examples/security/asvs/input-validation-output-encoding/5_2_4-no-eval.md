# ASVS 5.2.4
Validation/Sanitation door in de hele code base eval() te verbieden, met behulp van linting.

## Code voorbeeld
Geen code voorbeeld.

## Gebruik in de praktijk

Installatie:
```
//eslintrc.js
...
    rules: {
        "no-eval": ["error", {"allowIndirect": true}]
    }
...

// uitvoeren in package.json
"lint": "eslint ."
```

## Bron
https://eslint.org/docs/latest/rules/no-eval

