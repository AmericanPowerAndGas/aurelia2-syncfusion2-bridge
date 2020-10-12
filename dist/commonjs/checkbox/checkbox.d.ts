import { IComponentBase } from '../common/component-base';
import { CheckBox } from '@syncfusion/ej2-buttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class CheckBoxComponent extends CheckBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
