import DamSteen from '../damsteen/damsteen.js'

const template = document.createElement('template');
template.innerHTML = `
    <div class="dambord"></div>
`

class DamBord extends HTMLElement {
    shadow;
    aantalDamstenen
    static observedAttributes = ["aantalzetten"];

    constructor() {
        super();
        this.aantalDamstenen = 3;
    }

    connectedCallback() {
        this.setAttribute("aantalzetten", "0");
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));
        const damBord = this.shadow.querySelector('.dambord');
        damBord.addEventListener('click', (e) => {
            if (e.target.classList.contains('damsteen')) {
                console.log('Er is geklikt op damsteen nummer: ' + e.target.getAttribute("id"));
                const huidigaantalzetten = parseInt(this.getAttribute("aantalzetten"));
                this.setAttribute("aantalzetten", huidigaantalzetten + 1);
                //Geef de damsteen de class 'gekozen', zodat de steen rood wordt.
                e.target.classList.add('gekozen');
            }
        });

        for (let i = 0; i < this.aantalDamstenen; i++) {
            const damsteen = document.createElement('dam-steen');
            damBord.appendChild(damsteen);
            // We willen de div ín ons custom element een id geven
            const damSteenDiv = damsteen.querySelector('.damsteen');
            damSteenDiv.setAttribute("id", i + 1);

            // we maken een p element met daar een nummer zodat elke damsteen
            // een nummer toont. We gebruik hiervoor slots. Onderstaande code vult het slot in.
            // Echter creeëren we hiermee de situatie dat het p-element 'op' de damsteen ligt en bij aanklikken er
            // niet voor zorgt dat de damsteen rood wordt. Hiervoor zal een oplossing bedacht moeten worden.
            /*
            const p = document.createElement('p');
            p.innerText = i + 1;
            p.setAttribute("slot", "nummer");
            damSteenDiv.appendChild(p);
            */
        }
        this.attachStyling();
    }

    attachStyling()
    {
        const link = document.createElement("link");
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './components/dambord/dambord.css');
        this.shadow.appendChild(link);

    }

    attributeChangedCallback(name, oud, nieuwe) {
        if (name === "aantalzetten") {
            console.log("het aantal zetten was: " + oud);
            console.log("het aantal zetten is nu: " + nieuwe);
        }
    }
}

customElements.define('dam-bord', DamBord);