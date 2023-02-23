class Answer extends HTMLElement {

    shadowRoot;
    answerText;

    constructor() {
        super(); // always call super() first in the ctor.
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.state = {};
    }

    connectedCallback() {
        this.applyTemplate();
    }

    applyTemplate() {
        let template = document.getElementById('hoger-lager-answer-tpl');
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    setState(key, value) {
        this.state[key] = value;
        this.updateBinding(key);
    }

    updateBinding(prop) {
        let bindings = this.shadowRoot.querySelectorAll(`[data-bind$="${prop}"]`);

        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        bindings.forEach(node => {
            node.textContent = this.state[prop];
        })
    }

}

customElements.define('hoger-lager-answer', Answer);

export {Answer};
