
const appTemplate = {
    id: 'app-hoger-lager-tpl',
    template: `
    <div id="hoger-lager-app">
    <h1>Hoger Lager <span class="small">Als getallen een gok zijn</span></h1>
    <hoger-lager-answer answer-text="geen keuze"></hoger-lager-answer>
    <hoger-lager-form></hoger-lager-form>
    <slot name="form"></slot>
    </div> 
    `
}

const answerTemplate = {
        id: 'hoger-lager-answer-tpl',
        template: `
            <p data-bind="answerText">geen keuze gemaakt</p>
        `
}

const formTemplate = {
    id: 'hoger-lager-form-tpl',
    template: `
        <form>
            <input type="text" id="guess" placeholder="guess">
            <button id="btnSubmit">Submit</button>
        </form>
    `
}

class Template{

    attachTemplates(){
        this.attachTemplate(appTemplate);
        this.attachTemplate(answerTemplate);
        this.attachTemplate(formTemplate);
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
