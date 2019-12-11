﻿import { inject } from 'aurelia-dependency-injection';
import { customElement, bindable, noView, processContent, TargetInstruction } from 'aurelia-templating';
import { constants } from './constants';
@customElement(`${constants.ej2ElementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
    let html = element.innerHTML;
    if (html !== '') {
        instruction.template = html;
    }
    element.innerHTML = '';
})
@inject(TargetInstruction)
export class Ej2Template {
    @bindable template;
    constructor(target) {       
        this.template = target.elementInstruction.template;
    }

}
