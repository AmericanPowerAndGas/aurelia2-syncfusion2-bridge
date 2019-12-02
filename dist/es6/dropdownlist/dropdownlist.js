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
let ejDropDownList = class ejDropDownList extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejDropDownList = __decorate([
    customAttribute(`${constants.attributePrefix}drop-down-list`),
    generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'loadOnDemand', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }),
    inject(Element)
], ejDropDownList);
export { ejDropDownList };
