import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customElement, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

export const inputs: string[] = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
export const twoWays: string[] = ['value'];

@customElement(`${constants.ej2AttributePrefix}drop-down-list`)
@generateBindables(constants.ej2ElementPrefix + 'DropDownList', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class DropDownListComponent extends DropDownList implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
