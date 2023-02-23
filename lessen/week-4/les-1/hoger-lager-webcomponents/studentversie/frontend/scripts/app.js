import {template} from "./modules/template.js";
import {Answer} from "./components/answer.js";
import {Form} from "./components/form.js";

class App extends HTMLElement {

    shadowRoot;

    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'})
        this.init();
    }

    init() {
        //plaats alle HTML templates in de DOM
        template.attachTemplates();
    }

    applyEventlisteners(){
        this.addEventListener('answerReceived', this.receivedAnswer);
    }

    receivedAnswer(event) {
        console.log('answer received')
        let answerComponent = this.shadowRoot.querySelector('hoger-lager-answer');
        answerComponent.setState('answerText', `${event.detail.guess} - ${event.detail.answer}`);
    }

    connectedCallback() {
        this.applyTemplate();
        this.attachStyling();
        this.applyEventlisteners();
    }

    applyTemplate() {
        let appTemplate = document.getElementById('app-hoger-lager-tpl');
        let clone = appTemplate.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    // class CustomTitle
    attachStyling() {
        const style = document.createElement('style');
        style.textContent = `
                .small {
                    font-size: 0.8em;
                    padding: 0 0.5em;
                    border-radius: 0.5em;
                    background-color: #f1f1f1;
                }
            `;
        this.shadowRoot.appendChild(style);
    }

}

customElements.define('app-hoger-lager', App);


////////////////////////////////////////////
// oorspronkelijke code
///////////////////////////////////////////
// class App {
//
//     constructor() {
//         console.log('App instantie');
//     }
//
//     run(){
//         const hlf = new HogerLagerFeature();
//         hlf.init();
//     }
//
// }

// const app = new App();

// app.run();
