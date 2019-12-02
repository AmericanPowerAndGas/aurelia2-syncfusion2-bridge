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
let ejPercentageTextbox = class ejPercentageTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejPercentageTextbox = __decorate([
    customAttribute(`${constants.attributePrefix}percentage-textbox`),
    generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPercentageTextbox);
export { ejPercentageTextbox };
