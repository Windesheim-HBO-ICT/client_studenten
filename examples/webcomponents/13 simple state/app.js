import store from "./store.js";

store.subscribe('hello', (value) => {
    console.log('#1. new value received! ' + value);
})


store.subscribe('hello', (value) => {
    console.log('#2. new value received! ' + value);
})

store.setValue('hello', 'new value: hello world!');


