# ASVS 14.2.2
Uitsluiten van onnodige bestanden en vertrouwelijke informatie van de build.

## Code voorbeeld gevaar

```
// main.js

import secret    from "./map-to-exclude/secure-config.js";
import public_fact from "./map-to-include/facts-to-be-public.js";

console.log(secret);
console.log(public_fact);

```

## Installatie en configuratie:

```
//vite.config.js

...

import {defineConfig} from 'vite';

export default defineConfig({
    root: 'my-app',
    build: {
        outDir: 'dist',
        rollupOptions: {
            external: [
                /map-to-exclude/
            ],
        },
    }
});

...

```

## Test
- build
- open `dist/index.html` in browser
- controleer of bestanden geladen worden:
De browser moet een error geven:
`Failed to load resource: the server responded with a status of 404 (Not Found) <filename, bijvoorbeeld:securig.config.js>`
- pas eventueel link naar javascript in `dist/index.html` aan als `index-<hash>.js` niet beschikbaar is.

## Bron
https://rollupjs.org/configuration-options/#external

