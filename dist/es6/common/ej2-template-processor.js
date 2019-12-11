var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-dependency-injection';
import { Util } from '../common/util';
import { TemplatingEngine } from 'aurelia-templating';
let Ej2TemplateProcessor = class Ej2TemplateProcessor {
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
};
Ej2TemplateProcessor = __decorate([
    inject(TemplatingEngine, Util)
], Ej2TemplateProcessor);
export { Ej2TemplateProcessor };
