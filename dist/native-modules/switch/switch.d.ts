import { IComponentBase } from '../common/component-base';
import { Switch } from '@syncfusion/ej2-buttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class SwitchComponent extends Switch implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
