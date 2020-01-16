import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DropDownList  } from '@syncfusion/ej2-dropdowns';

@customAttribute(`${constants.ej2AttributePrefix}drop-down-list`)
@generateBindables(constants.ej2ElementPrefix + 'DropDownList', ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'], null, null)
@inject(Element)
export class Ej2DropDownList extends Ej2WidgetBase {
    constructor(element) {
        super(DropDownList );
        this.isEditor = true;
        this.element = element;
    }
}

