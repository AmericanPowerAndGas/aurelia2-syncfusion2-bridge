import { IComponentBase } from '../common/component-base';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DateTimePickerComponent extends DateTimePicker implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
