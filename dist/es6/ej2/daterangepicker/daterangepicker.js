var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
let ej2DateRangePicker = class ej2DateRangePicker extends Ej2WidgetBase {
    constructor(element) {
        super(DateRangePicker);
        this.isEditor = true;
        this.element = element;
    }
};
ej2DateRangePicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}date-range-picker`),
    generateBindables(constants.ej2ElementPrefix + 'DateRangePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'], ['startDate', 'endDate', 'value'], null, null),
    inject(Element)
], ej2DateRangePicker);
export { ej2DateRangePicker };
