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
let ejComboBox = class ejComboBox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejComboBox = __decorate([
    customAttribute(`${constants.attributePrefix}combo-box`),
    generateBindables('ejComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enableRtl', 'enabled', 'fields', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'width'], ['value']),
    inject(Element)
], ejComboBox);
export { ejComboBox };
