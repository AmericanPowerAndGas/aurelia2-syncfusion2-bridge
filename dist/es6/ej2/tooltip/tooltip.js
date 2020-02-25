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
import { Tooltip as TooltipAs } from '@syncfusion/ej2-popups';
let ej2Tooltip = class ej2Tooltip extends Ej2WidgetBase {
    constructor(element) {
        super(TooltipAs);
        this.element = element;
    }
};
ej2Tooltip = __decorate([
    customElement(`${constants.ej2ElementPrefix}tooltip`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Tooltip', ['animation', 'closeDelay', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'], [], [], null),
    inject(Element)
], ej2Tooltip);
export { ej2Tooltip };
