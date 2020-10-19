import { IComponentBase } from '../common/component-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DropDownButtonComponent extends DropDownButton implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
