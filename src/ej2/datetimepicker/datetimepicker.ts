import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DateTimePicker } from '@syncfusion/ej2-calendars';

@customAttribute(`${constants.ej2AttributePrefix}date-time-picker`)
@generateBindables(constants.ej2ElementPrefix + 'DateTimePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null, null)
@inject(Element)
export class ej2DateTimePicker extends Ej2WidgetBase {
  constructor(element) {
    super(DateTimePicker);
    this.isEditor = true;
      this.element = element;     
  }
}

