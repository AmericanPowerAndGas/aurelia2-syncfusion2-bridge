import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

@customAttribute(`${constants.ej2AttributePrefix}numeric-text-box`)
@generateBindables(constants.ej2ElementPrefix + 'NumericTextBox', ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'], ['value'], null, null)
@inject(Element)
export class Ej2NumericTextBox extends Ej2WidgetBase {
    constructor(element) {
        super(NumericTextBox);
        this.isEditor = true;
        this.element = element;
    }
}

