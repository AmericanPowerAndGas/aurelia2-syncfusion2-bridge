var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject, children } from '../../common/common';
import { Toolbar as ToolbarAlias } from '@syncfusion/ej2-navigations';
let Ej2Toolbar = class Ej2Toolbar extends Ej2WidgetBase {
    constructor(element) {
        super(ToolbarAlias);
        this.items = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
    }
};
__decorate([
    children(`e-items`)
], Ej2Toolbar.prototype, "items", void 0);
Ej2Toolbar = __decorate([
    customElement(`${constants.ej2ElementPrefix}toolbar`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Toolbar', ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'], [], null, null),
    inject(Element)
], Ej2Toolbar);
export { Ej2Toolbar };
