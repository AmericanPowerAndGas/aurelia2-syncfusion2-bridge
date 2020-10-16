import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute,inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';

export const inputs: string[] = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'];
export const twoWays: string[] = ['startDate', 'endDate', 'value'];

@customAttribute(`${constants.ej2AttributePrefix}date-range-picker`)
@generateBindables(constants.ej2ElementPrefix + 'DateRangePicker', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class DateRangePickerComponent extends DateRangePicker implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
