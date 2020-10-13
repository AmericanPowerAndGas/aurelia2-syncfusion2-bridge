import { IComponentBase } from '../common/component-base';
import { ChipList } from '@syncfusion/ej2-buttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ChipListComponent extends ChipList implements IComponentBase {
    chipsChildProp: any[];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
