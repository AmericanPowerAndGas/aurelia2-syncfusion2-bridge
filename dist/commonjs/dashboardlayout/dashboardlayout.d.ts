import { IComponentBase } from '../common/component-base';
import { DashboardLayout } from '@syncfusion/ej2-layouts';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DashboardLayoutComponent extends DashboardLayout implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
