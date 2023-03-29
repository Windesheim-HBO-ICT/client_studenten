class ToastMessage extends HTMLElement {
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
        const clone = document
            .getElementById('toast-message-tpl')
            .content.cloneNode(true);
        clone.querySelector('p').innerHTML = this.getAttribute('message');
        this.shadowRoot.appendChild(clone);
        this.applyStyle();
    }

    applyStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components/toast-message.css');
        this.shadowRoot.appendChild(linkElem);
    }
}

customElements.define('toast-message', ToastMessage);
