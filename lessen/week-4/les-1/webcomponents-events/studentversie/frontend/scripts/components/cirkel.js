class Cirkel extends HTMLElement {

    shadowRoot;
    templateId = 'click-cirkel-tpl';
    elementId = 'click-cirkel';


    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.state = {
            cirkelClicks: 0
        };
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
    }

    connectedCallback() {
        this.shadowRoot.querySelector('div')
            .classList.add(this.getAttribute('color'));
    }

    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/cirkel.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners(){
        this.addEventListener('click', this.sendEvent);
    }

    sendEvent(){
        this.shadowRoot.dispatchEvent(new Event('cirkelClick', {composed: true}));
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
    }

    // attributeChangedCallback(property, oldValue, newValue) {
    //
    //     console.log('property')
    //     // this.shadowRoot.querySelector('p').innerHTML(newValue);
    //
    //     if (oldValue === newValue) return;
    //     this[ property ] = newValue;
    //
    // }
    //
    // set answerText(value){
    //     this.setAttribute('answer-text', value)
    // }
    //
    // get answerText(){
    //     this.getAttribute('answer-text')
    // }

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

customElements.define('click-cirkel', Cirkel);

export {Cirkel};
