import { IComponentBase } from '../common/component-base';
import { RadioButton } from '@syncfusion/ej2-buttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class RadioButtonComponent extends RadioButton implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
