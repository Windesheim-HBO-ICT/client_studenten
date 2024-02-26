import {Data} from "./data.js";

class Model {

    data = new Data();

    async getAnswer(gok) {

        const intGok = parseInt(gok);
        if(isNaN(intGok) || typeof intGok !== "number"){
            throw new Error("Gok moet een getal zijn");
        }

        let antwoord = await this.data.getAnswer(gok);

        return antwoord.result;
    }

}

export {Model};
