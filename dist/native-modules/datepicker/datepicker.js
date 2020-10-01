var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { ComponentBase } from '../common/component-base';
export const inputs = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
export const twoWays = ['value'];
let DatePickerComponent = class DatePickerComponent extends DatePicker {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
};
DatePickerComponent = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}date-picker`),
    generateBindables(constants.ej2ElementPrefix + 'DatePicker', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], DatePickerComponent);
export { DatePickerComponent };

//# sourceMappingURL=datepicker.js.map
