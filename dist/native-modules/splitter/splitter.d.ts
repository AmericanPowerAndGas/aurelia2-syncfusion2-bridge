import { IComponentBase } from '../common/component-base';
import { Splitter } from '@syncfusion/ej2-layouts';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class SplitterComponent extends Splitter implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
