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
        this.context.widget.queryCellInfo = (arg) => {
            if (arg.column && arg.column.template && arg.data) {
                let elements = arg.cell.children;
                for (let i = 0; i < elements.length; i++) {
                    this.bindView(elements[i], arg.data);
                }
            }
        };
    }
    bindView(element, data) {
        let view = this.templatingEngine.enhance(element);
        view.bind(data, this.context.parentCtx);
    }
    clearTempalte() {
        let templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    }
    unbindViews(obj) {
        for (let i = 0; i < obj.views.length; i++) {
            let view = obj.views[i];
            view.unbind();
        }
    }
}
