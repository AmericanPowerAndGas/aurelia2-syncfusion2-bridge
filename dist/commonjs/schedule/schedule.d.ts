import { IComponentBase } from '../common/component-base';
import { Schedule } from '@syncfusion/ej2-schedule';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ScheduleComponent extends Schedule implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
