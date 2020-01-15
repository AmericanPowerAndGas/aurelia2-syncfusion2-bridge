import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { ComboBox } from '@syncfusion/ej2-dropdowns';

@customAttribute(`${constants.ej2AttributePrefix}combo-box`)
@generateBindables(constants.ej2ElementPrefix + 'ComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'],null,null)
@inject(Element)
export class Ej2ComboBox extends Ej2WidgetBase {
  constructor(element) {
    super(ComboBox);
    this.isEditor = true;
    this.element = element;
  }
}

