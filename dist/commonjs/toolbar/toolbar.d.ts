import { IComponentBase } from '../common/component-base';
import { Toolbar } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ToolbarComponent extends Toolbar implements IComponentBase {
    itemsChildProp: any[];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
