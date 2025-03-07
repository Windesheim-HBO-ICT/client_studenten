const template = document.createElement("template");
template.innerHTML = `
<style>
    #container
    {
        border: solid 1px #000;
        display:block;
        width:150px;
        background-color: #f9f9f9;
       
    }
    #header
    {
        background-color: #F90000;
        padding:5px;
        font-size:larger;
        font-weight:bold;
        text-align:center;

    }
   
    #counter
    {
        padding: 10px;
    }

</style>

<div id="container">
    <div id="header">
       Counter
    </div>
    <div id="counter">
    <div id="count">0</div>
    <button id="reset">Reset</button>
    </div
</div>

`;
class MyCounterComponent extends HTMLElement {
  //variable to hold the link to the shadowroot
  shadowRoot;

  //set the attributes of the element to be observed so the artibuteChangedCallback is called when the attribute
  //is changed
  static get observedAttributes() {
    return ["count", "title"];
  }

  constructor() {
    //always call the super (HTMLElement) constructor first
    super();
    console.log("MyCounterComponent Construtor");
    //set the template as content of the shadowroot of this element
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //set the click event (this should ideally not be done in the constructor )
    this.shadowRoot.querySelector("#reset").addEventListener("click", () => {
      //Step 1. Create a new event
      let newCounterResetEvent = new CustomEvent('counterReset', {composed: true, detail:{beforeCount:this.getAttribute("count")}});
      //Step 2. Dispatch the event
      this.shadowRoot.dispatchEvent(newCounterResetEvent);

      this.setAttribute("count", 0);
    });
  }
  // The browser calls this method when the element is
  // added to the DOM.
  connectedCallback() {
    console.log("MyCounterComponent added to the DOM");
    // Create a Date object representing the current date.

    console.log("document", document);
  }

  // The browser calls this method when an attributes is changed
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Custom element attributes changed ${name} to ${newValue}.`);
    this.updateComponent();
  }

  //own function to update the component
  updateComponent = function () {
    console.log("updateComponent");
    const count = this.getAttribute("count") || 0;
    const title = this.getAttribute("title") || "Counter";
    this.shadowRoot.querySelector("#count").textContent = count;
    this.shadowRoot.querySelector("#header").textContent = title;

  };
}

// Register the MyComponent component using the tag name <my-component>.
customElements.define("my-counter", MyCounterComponent);
