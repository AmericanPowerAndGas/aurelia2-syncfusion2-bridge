import { IComponentBase } from '../common/component-base';
import { Chart } from '@syncfusion/ej2-charts';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ChartComponent extends Chart implements IComponentBase {
    seriesChildProp: any[];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
