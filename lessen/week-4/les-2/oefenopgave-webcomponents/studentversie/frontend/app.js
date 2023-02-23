import {template} from "./modules/template.js";
import {Cirkel} from "./components/cirkel.js";

class App extends HTMLElement {

    shadowRoot;
    templateId = 'click-app-tpl';
    elementId = 'click-app';

    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'})
        this.init();
    }

    init() {
        //plaats alle HTML templates in de DOM
        template.attachTemplates();
    }

    connectedCallback() {
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
    }

    applyTemplate() {
        let appTemplate = document.getElementById(this.templateId);
        let clone = appTemplate.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    // app.js
    attachStyling() {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/app.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners() {
        this.addEventListener('cirkelClick', this.cirkelClickedHandler);
        const self = this;
        console.log(`app.applyEventlisteners
            hint:
            Geef de knop een listener die alle 'click-cirkel' webcomponents selecteert.
            Gebruik voor het verwijderenelement.remove().
        `)

//student uitwerking

    }

    cirkelClickedHandler(event) {
        console.log('app.js: cirkel clicked ontvangen.')
        console.log(`hint: 
        maak een element: document.createElement...
        voeg het element toe aan de shadowroot: this.shadowRoot...
        `)

//student uitwerking

    }

}

customElements.define('click-app', App);
