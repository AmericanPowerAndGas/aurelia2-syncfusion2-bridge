var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { TextBox } from '@syncfusion/ej2-inputs';
let Ej2TextBox = class Ej2TextBox extends Ej2WidgetBase {
    constructor(element) {
        super(TextBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2TextBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}text-box`),
    generateBindables(constants.ej2ElementPrefix + 'TextBox', ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'], ['value'], null, null),
    inject(Element)
], Ej2TextBox);
export { Ej2TextBox };
