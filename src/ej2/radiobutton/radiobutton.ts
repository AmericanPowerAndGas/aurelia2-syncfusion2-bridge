import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { RadioButton } from '@syncfusion/ej2-buttons';

@customAttribute(`${constants.ej2AttributePrefix}radio-button`)
@generateBindables(constants.ej2ElementPrefix + 'RadioButton', ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'], ['checked'], null, null)
@inject(Element)
export class Ej2RadioButton extends Ej2WidgetBase {
    constructor(element) {
        super(RadioButton);
        this.isEditor = true;
        this.element = element;
    }
}

