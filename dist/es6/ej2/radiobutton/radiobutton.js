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
import { RadioButton } from '@syncfusion/ej2-buttons';
let Ej2RadioButton = class Ej2RadioButton extends Ej2WidgetBase {
    constructor(element) {
        super(RadioButton);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2RadioButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}radio-button`),
    generateBindables(constants.ej2ElementPrefix + 'RadioButton', ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'], ['checked'], null, null),
    inject(Element)
], Ej2RadioButton);
export { Ej2RadioButton };
