var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inlineView, customElement, children } from '../common/common';
import { Util } from '../common/util';
let TreeGridColumn = class TreeGridColumn {
    constructor() {
        this.angularTemplate = [];
    }
    setTemplates() {
        if (this.angularTemplate[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
        }
    }
};
__decorate([
    children(`${constants.elementPrefix}template`)
], TreeGridColumn.prototype, "angularTemplate", void 0);
TreeGridColumn = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}tree-grid-column`),
    generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] })
], TreeGridColumn);
export { TreeGridColumn };
