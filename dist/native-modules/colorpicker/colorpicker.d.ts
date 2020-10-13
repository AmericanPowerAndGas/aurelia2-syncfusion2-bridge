import { IComponentBase } from '../common/component-base';
import { ColorPicker } from '@syncfusion/ej2-inputs';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ColorPickerComponent extends ColorPicker implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
