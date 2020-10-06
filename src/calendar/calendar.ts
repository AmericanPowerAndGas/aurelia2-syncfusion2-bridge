import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Calendar } from '@syncfusion/ej2-calendars';

export const inputs: string[] = ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber'];
export const twoWays: string[] = ['value', 'values'];


@customElement(`${constants.ej2ElementPrefix}calendar`)
@generateBindables(constants.ej2ElementPrefix + 'Calendar', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class CalendarComponent extends Calendar implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}