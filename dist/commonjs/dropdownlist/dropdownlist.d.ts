import { IComponentBase } from '../common/component-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DropDownListComponent extends DropDownList implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
