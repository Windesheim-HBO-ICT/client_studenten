export default class BoodschappenItem extends HTMLElement {

    shadowRoot;
    //templateId = 'boodschappen-item-tpl';
    //elementId = 'boodschappen-item';

//student uitwerking

    constructor(product) {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.state = {
            product: product,
        };
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
        this.setState('product', product);
    }

    connectedCallback() {
        console.log('item: connected to DOM');
    }

    disconnectedCallback() {
        console.log('item: disconnected from DOM');
    }

    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);

        this.shadowRoot.appendChild(clone);
    }

    attachStyling() {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/boodschappen-item.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners() {
        console.log('Click event in boodschappen-item.js nog niet ingeschakeld.');
        const self = this;
        this.addEventListener('click', () => {
//student uitwerking
        });
    }

    togglePickColor() {
        this.state.picked = !this.state.picked;

        //tip: zet op het li element een attribuut 'data-color'.
//student uitwerking
    }

    sendEvent() {
        this.shadowRoot.dispatchEvent(new Event('boodschappen-item-clicked', {composed: true}));
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    setState(key, value) {
        this.state[key] = value;
        this.updateBinding(key);
    }

    updateBinding(prop) {
        let bindings = this.shadowRoot.querySelectorAll(`[data-bind$="${prop}"]`);
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        bindings.forEach(node => {
            node.textContent = this.state[prop];
        })
    }

}

//customElements.define('boodschappen-item', BoodschappenItem);

export {BoodschappenItem};
