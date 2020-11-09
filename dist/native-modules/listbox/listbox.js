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
import { customElement, inject } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { ListBox, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
ListBox.Inject(CheckBoxSelection);
export const inputs = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
export const twoWays = ['value'];
let ListBoxComponent = class ListBoxComponent extends ListBox {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
};
ListBoxComponent = __decorate([
    customElement(`${constants.ej2AttributePrefix}list-box`),
    generateBindables(constants.ej2ElementPrefix + 'ListBox', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], ListBoxComponent);
export { ListBoxComponent };

//# sourceMappingURL=listbox.js.map
