import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';


@customAttribute(`${constants.ej2AttributePrefix}date-picker`)
@generateBindables('ej2DatePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], { 'enableRTL': ['enableRtl'] })
@inject(Element)
export class ej2DatePicker extends Ej2WidgetBase {
  isEditor: boolean;
  element: Element;
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

