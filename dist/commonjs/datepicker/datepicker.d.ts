import { DatePicker } from '@syncfusion/ej2-calendars';
import { IComponentBase } from '../common/component-base';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DatePickerComponent extends DatePicker implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
