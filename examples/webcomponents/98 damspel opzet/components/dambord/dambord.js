import DamSteen from '../damsteen/damsteen.js'

const template = document.createElement('template');
template.innerHTML = `
    <div class="dambord"></div>
`

class DamBord extends HTMLElement {
    shadow;
    aantalDamstenen
    constructor() {
        super();
        this.aantalDamstenen = 3;
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));
        const damBord = this.shadow.querySelector('.dambord');

        for (let i = 0; i < this.aantalDamstenen; i++) {
            const damsteen = document.createElement('dam-steen');
            damBord.appendChild(damsteen);
            damBord.childNodes[i].querySelector('.damsteen').setAttribute("id", i + 1);
            
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
}

customElements.define('dam-bord', DamBord);