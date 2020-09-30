import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { IComponentBase, ComponentBase } from '../common/component-base';

export const inputs: string[] = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'];
export const outputs: string[] = ['created'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}date-picker`)
@generateBindables(constants.ej2ElementPrefix + 'DatePicker', inputs, twoWays , null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class Ej2DatePicker extends DatePicker implements IComponentBase {

    constructor(element) {
        super();
        this.element = element; 
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
