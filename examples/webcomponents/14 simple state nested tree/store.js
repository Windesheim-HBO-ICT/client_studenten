
class StateValue {

    observers;
    value = null;

    constructor(cb) {
        this.observers = [];
        if(cb){
            this.observers.push(cb);
        }
    }

    add(cb){
        this.observers.push(cb);
    }

    setValue(value){
        this.value = value
        this.notify();
    }

    notify(){
        for(const o of this.observers){
            o(this.value);
        }
    }

}

class Store {

    state;

    constructor() {
        this.state = new Map();
    }

    subscribe(propertyName, cb){

        if(this.state.has(propertyName)){
            this.state.get(propertyName).observers.push(cb);
        }else{
            this.state.set(propertyName, new StateValue(cb))
        }

    }

    setValue(propertyName, value){
        if(!this.state.has(propertyName)) throw new Error('property niet aanwezig in state');
        this.state.get(propertyName).setValue(value);
    }

}

export default new Store();


