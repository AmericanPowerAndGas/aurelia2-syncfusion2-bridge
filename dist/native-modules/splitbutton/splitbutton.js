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
import { customElement, inject } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';
export const inputs = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
export const twoWays = [];
let SplitButtonComponent = class SplitButtonComponent extends SplitButton {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
};
SplitButtonComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}split-button`),
    generateBindables(constants.ej2ElementPrefix + 'SplitButton', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], SplitButtonComponent);
export { SplitButtonComponent };

//# sourceMappingURL=splitbutton.js.map
