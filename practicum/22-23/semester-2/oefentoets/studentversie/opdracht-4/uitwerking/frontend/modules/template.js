
const appTemplate = {
    id: 'click-app-tpl',
    template: `
    <div id="app" class="app">
        <h1>Blokken</h1>
        <button>reset</button>
        <div class="container">
            <click-cirkel color=""></click-cirkel>
            
        </div>
    </div> 
    `
}

const cirkelTemplate = {
    id: 'click-cirkel-tpl',
    template: `
    <div class="cirkel">
        <p data-bind="cirkel-nummer"></p>
    </div> 
    `
}

class Template{

    attachTemplates(){
        this.attachTemplate(appTemplate);
        this.attachTemplate(cirkelTemplate);
    }

    attachTemplate(tplObject){
        const templateNode = document.createElement('template');
        templateNode.id = tplObject.id;
        templateNode.innerHTML = tplObject.template;
        const body = document.querySelector('body');
        body.appendChild(templateNode);
    }

}

const template = new Template();

export {template};
