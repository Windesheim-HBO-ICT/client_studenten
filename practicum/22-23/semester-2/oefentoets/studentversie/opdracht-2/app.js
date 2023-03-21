import Boodschappen from './boodschappen.js';

class App {

    boodschappen;

    start() {
        // this.boodschappen = new Boodschappen('boodschappen');
        // this.addEventListeners();
//student uitwerking
    }

    haalBoodschappenOp() {
        //fetch...
//student uitwerking
    }

    voegBoodschapToe() {
        let boodschap = document.getElementById('boodschap-invoer').value;
//student uitwerking
    }

    addEventListeners() {
        let self = this;
       document.getElementById(`haal-boodschappen-knop`)
           .addEventListener(`click`, () => self.haalBoodschappenOp());
//student uitwerking
    }
}

const app = new App();
app.start();
