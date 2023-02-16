import {Data} from "./data.js";

class Model {

    data = new Data();

    async getGetal(gok) {

        const intGok = parseInt(gok);
        if(isNaN(intGok) || typeof intGok !== "number"){
            throw new Error("Gok moet een getal zijn");
        }

        let anwoord = await this.data.getGetal(gok);

        return anwoord.result;
    }

}

export {Model};
