import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { CheckBox } from '@syncfusion/ej2-buttons';

@customAttribute(`${constants.ej2AttributePrefix}check-box`)
@generateBindables(constants.ej2ElementPrefix + 'CheckBox', ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'], ['checked', 'indeterminate'], null, null)
@inject(Element)
export class Ej2CheckBox extends Ej2WidgetBase {
    constructor(element) {
        super(CheckBox);
        this.isEditor = true;
        this.element = element;
    }
}

