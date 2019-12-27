import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inlineView, customElement, children } from '../../common/common';
import { Util } from '../../common/util';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.ej2ElementPrefix}column`)

@generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'], [], null, null)

export class Ej2Column {
    @children(`${constants.ej2ElementPrefix}template`) template = [];
    setTemplates() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
}
