import { TextBox } from '@syncfusion/ej2-inputs';
import { IComponentBase } from '../common/component-base';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class TextBoxComponent extends TextBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
