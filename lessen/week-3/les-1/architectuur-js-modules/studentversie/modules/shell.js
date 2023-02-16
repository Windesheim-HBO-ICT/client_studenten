
// modules/shell.js
import {f as FeatureX} from './featurex.js'; // importeren van een module

class Shell {
    constructor() {
        console.log('Shell init');
    }

    invokeFeatureX() {
        FeatureX.init();
    }
}

const shell = new Shell();
shell.invokeFeatureX();

