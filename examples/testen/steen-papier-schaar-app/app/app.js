import './components/card-tile.js';

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
            if (self.playerChoice === self.computerChoice) {
                alert('gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === 'steen' && self.computerChoice === 'papier') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === 'papier' && self.computerChoice === 'schaar') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === 'schaar' && self.computerChoice === 'steen') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else {
                alert('speler wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            }

            self.shadowRoot.querySelectorAll('card-tile').forEach(card => {
                card.reset();
            });
        },2000);


    }

    applyEventlisteners() {
        this.addEventListener('cardClick', this.cardClickedHandler);
    }
}

customElements.define('steenpapierschaar-app', App);
