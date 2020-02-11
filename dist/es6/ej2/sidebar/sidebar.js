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
import { Sidebar } from '@syncfusion/ej2-navigations';
let ej2Sidebar = class ej2Sidebar extends Ej2WidgetBase {
    constructor(element) {
        super(Sidebar);
        this.element = element;
    }
};
ej2Sidebar = __decorate([
    customElement(`${constants.ej2ElementPrefix}sidebar`),
    inlineView(constants.aureliaTemplateString),
    generateBindables(constants.ej2ElementPrefix + 'Sidebar', ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'], [], null, null),
    inject(Element)
], ej2Sidebar);
export { ej2Sidebar };
