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
import { Switch } from '@syncfusion/ej2-buttons';
let Ej2Switch = class Ej2Switch extends Ej2WidgetBase {
    constructor(element) {
        super(Switch);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Switch = __decorate([
    customElement(`${constants.ej2ElementPrefix}switch`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Switch', ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'], ['checked'], null, null),
    inject(Element)
], Ej2Switch);
export { Ej2Switch };
