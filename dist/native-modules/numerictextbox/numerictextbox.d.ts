import { IComponentBase } from '../common/component-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class NumericTextBoxComponent extends NumericTextBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
