var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inject, inlineView, customElement, children, TemplatingEngine } from '../common/common';
import { TemplateProcessor } from '../common/template-processor';
let ejRadialMenu = class ejRadialMenu extends WidgetBase {
    constructor(element, templateEngine) {
        super();
        this.items = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
};
__decorate([
    children(`${constants.elementPrefix}item`)
], ejRadialMenu.prototype, "items", void 0);
ejRadialMenu = __decorate([
    customElement(`${constants.elementPrefix}radial-menu`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position']),
    inject(Element, TemplatingEngine)
], ejRadialMenu);
export { ejRadialMenu };
