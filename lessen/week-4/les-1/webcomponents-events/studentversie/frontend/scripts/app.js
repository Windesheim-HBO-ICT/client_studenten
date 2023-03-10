import {template} from "./modules/template.js";
import {Cirkel} from "./components/cirkel.js";
import {Vierkant} from "./components/vierkant.js";

class App extends HTMLElement {

    shadowRoot;
    templateId = 'app-click-cirkel-tpl';
    elementId = 'app-click-cirkel';

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

        console.log(`De huidige versie van de applicatie is: 
        ${this.getAttribute('versie')}`)
    }

    applyTemplate() {
        let appTemplate = document.getElementById(this.templateId);
        let clone = appTemplate.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    // app.js
    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/app.css");
        this.shadowRoot.appendChild(linkElem);
    }

    applyEventlisteners(){
        this.addEventListener('cirkelClick', this.cirkelClickedHandler);
    }

    cirkelClickedHandler(event) {
        let cirkelComponent = this.shadowRoot.getElementById('cirkel-1');
        cirkelComponent.setState('cirkelClicks', ++cirkelComponent.state.cirkelClicks);
    }

}

customElements.define('app-click-cirkel', App);
