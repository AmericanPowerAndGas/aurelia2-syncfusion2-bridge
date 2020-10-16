import { IComponentBase } from '../common/component-base';
import { Diagram } from '@syncfusion/ej2-diagrams';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DiagramComponent extends Diagram implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
