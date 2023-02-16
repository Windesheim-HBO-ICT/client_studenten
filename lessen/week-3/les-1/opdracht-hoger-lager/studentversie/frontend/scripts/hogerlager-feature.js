import {Model} from "./model.js";

const model = new Model();

class HogerLagerFeature{
    init(){
        console.log('HogerLagerFeature init');

//student uitwerking

    }

    async getGetal(){
        let gok = document.getElementById("gok").value;
        let result = await model.getGetal(gok);
        console.log(result);
    }


    eventListeners(){
        document.getElementById('btnSubmit')
            .addEventListener('click', this.submitGuess);
    }

    async submitGuess(event){

//student uitwerking

    }
}

export {HogerLagerFeature};
