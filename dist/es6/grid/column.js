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
let Column = class Column {
    constructor() {
        this.template = [];
    }
    setTemplates() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
};
__decorate([
    children(`${constants.elementPrefix}template`)
], Column.prototype, "template", void 0);
Column = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}column`),
    generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] })
], Column);
export { Column };
