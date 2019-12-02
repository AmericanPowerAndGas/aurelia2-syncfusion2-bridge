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
let ejToolbar = class ejToolbar extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejToolbar = __decorate([
    customAttribute(`${constants.attributePrefix}toolbar`),
    generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejToolbar);
export { ejToolbar };
