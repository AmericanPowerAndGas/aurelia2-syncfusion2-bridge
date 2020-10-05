import { Button } from '@syncfusion/ej2-buttons';
import { IComponentBase } from '../common/component-base';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ButtonComponent extends Button implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
