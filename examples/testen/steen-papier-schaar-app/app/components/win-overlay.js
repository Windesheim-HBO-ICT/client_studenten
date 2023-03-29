class WinOverlay extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.applyStyle();
    }

    render() {
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(data => {
                const clone = document
                    .getElementById('win-overlay-tpl')
                    .content.cloneNode(true);
                clone.querySelector('img').src = `https://cataas.com${data.url}`;
                this.shadowRoot.appendChild(clone);
                this.applyStyle();

                setTimeout(() => {
                    this.remove();
                },3000);
            })
            .catch(error => {
                console.error(error);
            });
    }

    applyStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components/win-overlay.css');
        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('win-overlay', WinOverlay);
