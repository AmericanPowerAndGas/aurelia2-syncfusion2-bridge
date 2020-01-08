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
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
let ej2DropDownButton = class ej2DropDownButton extends Ej2WidgetBase {
    constructor(element) {
        super(DropDownButton);
        this.isEditor = true;
        this.element = element;
    }
};
ej2DropDownButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}drop-down-button`),
    generateBindables(constants.ej2ElementPrefix + 'DropDownButton', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'], [], null, null),
    inject(Element)
], ej2DropDownButton);
export { ej2DropDownButton };
