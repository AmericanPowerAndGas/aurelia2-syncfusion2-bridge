var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Accordion } from '@syncfusion/ej2-navigations';
let ej2Accordion = class ej2Accordion extends Ej2WidgetBase {
    constructor(element) {
        super(Accordion);
        this.element = element;
    }
};
ej2Accordion = __decorate([
    customElement(`${constants.ej2ElementPrefix}accordion`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ej2Accordion', ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ej2Accordion);
export { ej2Accordion };
