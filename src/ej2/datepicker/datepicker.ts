import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DatePicker } from '@syncfusion/ej2-calendars';


@customAttribute(`${constants.ej2AttributePrefix}date-picker`)
@generateBindables(constants.ej2ElementPrefix + 'DatePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null,null)
@inject(Element)
export class Ej2DatePicker
    extends Ej2WidgetBase {
    element: Element;
    constructor(element) {
        super(DatePicker);
        this.isEditor = true;
        this.element = element;       
    }
}
