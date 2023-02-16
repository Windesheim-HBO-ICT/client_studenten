import {HogerLagerFeature} from "./hogerlager-feature";

class App {

    constructor() {
        console.log('App instantie');
    }

    run(){
        const hlf = new HogerLagerFeature();
        hlf.init();
    }

}

const app = new App();

app.run();
