
const appTemplate = {
    id: 'app-click-cirkel-tpl',
    template: `
    <div id="app-click-cirkel" class="app">
    <h1>Click de cirkel</h1>
        <div class="cirkels">
            <click-cirkel id="cirkel-1" color="red">a</click-cirkel>
            <click-cirkel id="cirkel-2" color="blue">b</click-cirkel>
        </div>
    </div> 
    `
}

const cirkelTemplate = {
    id: 'click-cirkel-tpl',
    template: `
    <div class="cirkel">
        <p data-bind="cirkelClicks"></p>
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
