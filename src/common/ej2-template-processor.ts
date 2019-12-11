import { inject } from 'aurelia-dependency-injection';
import { Util } from '../common/util';
import { TemplatingEngine } from 'aurelia-templating';
@inject(TemplatingEngine, Util)
export class Ej2TemplateProcessor {
    context: any;
    templatingEngine: any;
    util: Util;

    constructor(context, templateEngine) {
        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new Util();
    }   

    initWidgetDependancies() {       
            this.compileTemplate(this.context.widget.element);       
    }    

    compileTemplate(element) {
        let templates = $(element).find('.e-templatecell > :first-child');
        for (let i = 0; i < templates.length; i++) {
            let view = this.templatingEngine.enhance(templates[i]);
            view.bind(this.context.widget.dataSource[i], this.context.parentCtx);
        }
    }
}
