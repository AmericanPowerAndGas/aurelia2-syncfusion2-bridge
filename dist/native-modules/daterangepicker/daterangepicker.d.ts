import { IComponentBase } from '../common/component-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DateRangePickerComponent extends DateRangePicker implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
