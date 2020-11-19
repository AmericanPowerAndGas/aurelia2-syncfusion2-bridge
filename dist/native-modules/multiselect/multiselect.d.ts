import { IComponentBase } from '../common/component-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class MultiSelectComponent extends MultiSelect implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
