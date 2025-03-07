class MyComponent extends HTMLElement {
    
    constructor(){
        super();
        console.log("MyComponent Construtor");
    }
    // The browser calls this method when the element is
    // added to the DOM.
    connectedCallback() {
        console.log("MyComponent added to the DOM");
        // Create a Date object representing the current date.
        const now = new Date();

        // Format the date to a human-friendly string, and set the
        // formatted date as the text content of this element.
        let pretext = ''
        if(this.attributes.pretext) {
            pretext = `${this.attributes.pretext.value}: `;
        }
        
        this.textContent = `${pretext}${now.toLocaleDateString()}`;
    }
}

// Register the MyComponent component using the tag name <my-component>.
customElements.define('my-component', MyComponent);