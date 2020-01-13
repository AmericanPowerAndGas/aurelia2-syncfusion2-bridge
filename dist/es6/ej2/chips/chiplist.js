var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inject, inlineView, customElement, children } from '../../common/common';
import { ChipList } from '@syncfusion/ej2-buttons';
let ej2ChipList = class ej2ChipList extends Ej2WidgetBase {
    constructor(element) {
        super(ChipList);
        this.chips = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'chips';
    }
};
__decorate([
    children(`e-chips`)
], ej2ChipList.prototype, "chips", void 0);
ej2ChipList = __decorate([
    customElement(`${constants.ej2ElementPrefix}chip-list`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'ChipList', ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'], [], [], null),
    inject(Element)
], ej2ChipList);
export { ej2ChipList };
