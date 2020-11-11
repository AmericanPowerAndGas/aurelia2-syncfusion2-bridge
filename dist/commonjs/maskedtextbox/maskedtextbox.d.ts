import { IComponentBase } from '../common/component-base';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class MaskedTextBoxComponent extends MaskedTextBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
