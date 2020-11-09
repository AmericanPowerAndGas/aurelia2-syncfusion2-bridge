import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customElement, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { ListBox, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
ListBox.Inject(CheckBoxSelection);

export const inputs: string[] = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
export const twoWays: string[] = ['value'];

@customElement(`${constants.ej2AttributePrefix}list-box`)
@generateBindables(constants.ej2ElementPrefix + 'ListBox', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ListBoxComponent extends ListBox implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
