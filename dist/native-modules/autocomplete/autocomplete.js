var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
export const inputs = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
export const twoWays = ['value'];
let AutoCompleteComponent = class AutoCompleteComponent extends AutoComplete {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
};
AutoCompleteComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}auto-complete`),
    generateBindables(constants.ej2ElementPrefix + 'AutoComplete', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], AutoCompleteComponent);
export { AutoCompleteComponent };

//# sourceMappingURL=autocomplete.js.map
