import './components/card-tile.js';
import './components/toast-message.js';
import './components/win-overlay.js';

const element = document.createElement('steenpapierschaar-app');
document.body.appendChild(element);

class App extends HTMLElement {
    shadowRoot;

    playerChoice = null;
    computerChoice = null;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.applyStyle();
        this.applyEventlisteners();
    }

    render() {
        const clone = document.getElementById('app-tpl').content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    applyStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'app.css');
        this.shadowRoot.appendChild(linkElem);
    }

    cardClickedHandler(event) {
        console.log(event);
        console.log(event.detail);

        let self = this;
        this.computerChoice = 'schaar';
        this.playerChoice = event.detail.image;

        if(this.computerChoice !== this.playerChoice){
            this.shadowRoot.getElementById(`card-${this.computerChoice}`).toggleSelected();

        }

        setTimeout(() => {
            let message = '';
            if (self.playerChoice === self.computerChoice) {
                message = 'gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`;
            } else if (self.playerChoice === 'steen' && self.computerChoice === 'papier') {
                message = 'computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`;
            } else if (self.playerChoice === 'papier' && self.computerChoice === 'schaar') {
                message = 'computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`;
            } else if (self.playerChoice === 'schaar' && self.computerChoice === 'steen') {
                message = 'computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`;
            } else {
                message = 'speler wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`;
            }

            const toast = document.createElement('toast-message');
            toast.setAttribute('message', message);
            this.shadowRoot.append(toast);

            if(message.startsWith('speler')){
                const overlay = document.createElement('win-overlay');
                this.shadowRoot.append(overlay);
            }

            self.shadowRoot.querySelectorAll('card-tile').forEach(card => {
                card.reset();
            });
        },1000);


    }

    applyEventlisteners() {
        this.addEventListener('cardClick', this.cardClickedHandler);
    }
}

customElements.define('steenpapierschaar-app', App);
