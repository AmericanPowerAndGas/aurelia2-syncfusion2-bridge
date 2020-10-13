import { IComponentBase } from '../common/component-base';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ComboBoxComponent extends ComboBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
