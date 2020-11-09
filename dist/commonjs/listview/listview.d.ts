import { IComponentBase } from '../common/component-base';
import { ListView } from '@syncfusion/ej2-lists';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ListViewComponent extends ListView implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
