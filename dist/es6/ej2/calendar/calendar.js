var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Calendar } from '@syncfusion/ej2-calendars';
let Ej2Calendar = class Ej2Calendar extends Ej2WidgetBase {
    constructor(element) {
        super(Calendar);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Calendar = __decorate([
    customElement(`${constants.ej2AttributePrefix}calendar`),
    inlineView("<template><div></div></template>"),
    generateBindables(constants.ej2ElementPrefix + 'Calendar', ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber'], ['value', 'values'], null, null),
    inject(Element)
], Ej2Calendar);
export { Ej2Calendar };
