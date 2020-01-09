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
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';
let ej2ProgressButton = class ej2ProgressButton extends Ej2WidgetBase {
    constructor(element) {
        super(ProgressButton);
        this.element = element;
    }
};
ej2ProgressButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}progress-button`),
    generateBindables(constants.ej2ElementPrefix + 'ProgressButton', ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'], [], null, null),
    inject(Element)
], ej2ProgressButton);
export { ej2ProgressButton };
