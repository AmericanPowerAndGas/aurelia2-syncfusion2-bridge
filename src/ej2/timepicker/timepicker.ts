import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { TimePicker } from '@syncfusion/ej2-calendars';


@customAttribute(`${constants.ej2AttributePrefix}time-picker`)
    @generateBindables(constants.ej2ElementPrefix + 'TimePicker', ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'], ['value'], null, null)
@inject(Element)
export class Ej2TimePicker
    extends Ej2WidgetBase {
    element: Element;
    constructor(element) {
        super(TimePicker);
        this.isEditor = true;
        this.element = element;
    }
}
