import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DateRangePicker } from '@syncfusion/ej2-calendars';

@customAttribute(`${constants.ej2AttributePrefix}date-range-picker`)
@generateBindables(constants.ej2ElementPrefix + 'DateRangePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'], ['startDate', 'endDate', 'value'], null, null)
@inject(Element)
export class ej2DateRangePicker extends Ej2WidgetBase {
    constructor(element) {
        super(DateRangePicker);
        this.isEditor = true;
        this.element = element;
    }
}

