class CardTile extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.applyEventlisteners();
    }

    render() {
        const clone = document
            .getElementById('card-tile-tpl')
            .content.cloneNode(true);

        clone.querySelector('img').src = `images/${this.getAttribute('image')}.png`;

        this.shadowRoot.appendChild(clone);

        this.applyStyle();
    }

    applyEventlisteners() {
        this.addEventListener('click', () => {
            this.toggleSelected();
            this.sendEvent();
        });
    }

    toggleSelected() {
        this.shadowRoot.querySelector('img').classList.toggle('selected');
    }

    sendEvent() {
        this.shadowRoot.dispatchEvent(
            new CustomEvent('cardClick', {
                composed: true,
                bubbles: true,
                detail: {
                    id: this.getAttribute('id'),
                    image: this.getAttribute('image')
                }
            })
        );
    }

    reset() {
        this.shadowRoot.querySelector('img').classList.remove('selected');
    }

    applyStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components/card-tile.css');
        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('card-tile', CardTile);
