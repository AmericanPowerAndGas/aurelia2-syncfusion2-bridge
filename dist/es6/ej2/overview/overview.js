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
import { Overview } from '@syncfusion/ej2-diagrams';
let ej2Overview = class ej2Overview extends Ej2WidgetBase {
    constructor(element) {
        super(Overview);
        this.element = element;
    }
};
ej2Overview = __decorate([
    customElement(`${constants.ej2ElementPrefix}overview`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ej2Overview', ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'], [], { 'sourceID': ['sourceId'] }, null),
    inject(Element)
], ej2Overview);
export { ej2Overview };
