const template = document.createElement('template');
template.setAttribute("id", "damsteen");
template.innerHTML = `
    <div class="damsteen">
        <slot name="nummer"></slot>
    </div>
    
`
export default class DamSteen extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
        this.attachStyling();
    }

    attachStyling()
    {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './components/damsteen/damsteen.css');
        this.appendChild(link);

    }
}

customElements.define('dam-steen', DamSteen);