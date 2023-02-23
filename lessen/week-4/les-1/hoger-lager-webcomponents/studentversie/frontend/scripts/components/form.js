import {Model} from "../modules/model.js";

class Form extends HTMLElement {

    shadowRoot;
    model;

    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.model = new Model();
    }

    connectedCallback() {
        this.applyTemplate();
        this.applyEventlisteners();
    }

    applyEventlisteners() {
        const submitButton = this.shadowRoot.getElementById('btnSubmit');
        const self = this;
        submitButton.addEventListener('click', async (event) => {
//student uitwerking
        });
    }

    applyTemplate() {
        let template = document.getElementById('hoger-lager-form-tpl');
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

}

customElements.define('hoger-lager-form', Form);

export {Form};
