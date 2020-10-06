import { IComponentBase } from '../common/component-base';
import { Calendar } from '@syncfusion/ej2-calendars';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class CalendarComponent extends Calendar implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
