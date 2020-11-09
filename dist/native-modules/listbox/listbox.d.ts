import { IComponentBase } from '../common/component-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ListBoxComponent extends ListBox implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
