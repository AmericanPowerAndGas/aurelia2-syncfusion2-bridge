import { IComponentBase } from '../common/component-base';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class AutoCompleteComponent extends AutoComplete implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
