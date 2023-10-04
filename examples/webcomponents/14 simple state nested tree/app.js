import store from "./store.js";

class HelloWorld extends HTMLElement {

    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<div><p>default value</p></div>`;
        this.attachStyling();
    }

    connectedCallback() {

        // create nested elements
        this.shadowRoot.querySelector('div').append(this.getAttribute('number'));
        if (this.getAttribute('number') < 3) {
            const elem = document.createElement('hello-world');
            elem.setAttribute('number', parseInt(this.getAttribute('number')) + 1);
            this.shadowRoot.querySelector('div').append(
                elem
            );
        }

        // subcribe to store
        const self = this;
        store.subscribe('clickedNumber', (newValue) => {
            self.shadowRoot.querySelector('p').innerHTML = newValue;
        })

        // add eventlistener
        self.shadowRoot.querySelector('div').addEventListener('click', (event) => {
            event.stopPropagation();
            store.setValue('clickedNumber', `${self.getAttribute('number')} 
            clicked!`);
        })

        // In plaats van:
        // if(this.getAttribute('number') == 1) {
        //     setTimeout(() => {
        //         const nestedElementNumber = this.shadowRoot
        //             .querySelector('hello-world')
        //             .shadowRoot
        //             .querySelector('hello-world').getAttribute('number');
        //         alert(nestedElementNumber);
        //     }, 1000);
        // }

    }

    attachStyling() {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "style.css");
        this.shadowRoot.appendChild(linkElem);
    }

}

customElements.define('hello-world', HelloWorld);

const elem = document.createElement('hello-world');
elem.setAttribute('number', 1);
document.querySelector('body').appendChild(elem);


