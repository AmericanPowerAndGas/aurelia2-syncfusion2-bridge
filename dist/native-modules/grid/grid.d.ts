import { IComponentBase } from '../common/component-base';
import { Grid } from '@syncfusion/ej2-grids';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class GridComponent extends Grid implements IComponentBase {
    columnChildProp: any[];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
