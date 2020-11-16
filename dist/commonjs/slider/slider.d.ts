import { IComponentBase } from '../common/component-base';
import { Slider } from '@syncfusion/ej2-inputs';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class SliderComponent extends Slider implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
