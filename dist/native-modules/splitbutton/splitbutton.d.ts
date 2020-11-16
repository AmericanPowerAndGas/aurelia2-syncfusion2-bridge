import { IComponentBase } from '../common/component-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class SplitButtonComponent extends SplitButton implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
