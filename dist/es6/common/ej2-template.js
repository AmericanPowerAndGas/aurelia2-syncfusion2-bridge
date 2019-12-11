var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-dependency-injection';
import { customElement, bindable, noView, processContent, TargetInstruction } from 'aurelia-templating';
import { constants } from './constants';
let Ej2Template = class Ej2Template {
    constructor(target) {
        this.template = target.elementInstruction.template;
    }
};
__decorate([
    bindable
], Ej2Template.prototype, "template", void 0);
Ej2Template = __decorate([
    customElement(`${constants.ej2ElementPrefix}template`),
    noView(),
    processContent((compiler, resources, element, instruction) => {
        let html = element.innerHTML;
        if (html !== '') {
            instruction.template = html;
        }
        element.innerHTML = '';
    }),
    inject(TargetInstruction)
], Ej2Template);
export { Ej2Template };
