var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
export const inputs = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'];
export const twoWays = ['value'];
let NumericTextBoxComponent = class NumericTextBoxComponent extends NumericTextBox {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
};
NumericTextBoxComponent = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}numeric-text-box`),
    generateBindables(constants.ej2ElementPrefix + 'NumericTextBox', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], NumericTextBoxComponent);
export { NumericTextBoxComponent };

//# sourceMappingURL=numerictextbox.js.map
