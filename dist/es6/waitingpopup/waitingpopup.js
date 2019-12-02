var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
let ejWaitingPopup = class ejWaitingPopup extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejWaitingPopup = __decorate([
    customAttribute(`${constants.attributePrefix}waiting-popup`),
    generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text']),
    inject(Element)
], ejWaitingPopup);
export { ejWaitingPopup };
