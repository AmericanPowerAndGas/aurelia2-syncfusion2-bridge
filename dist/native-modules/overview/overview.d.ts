import { IComponentBase } from '../common/component-base';
import { Overview } from '@syncfusion/ej2-diagrams';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class OverviewComponent extends Overview implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
