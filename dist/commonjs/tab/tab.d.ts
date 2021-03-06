import { IComponentBase } from '../common/component-base';
import { Tab } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class TabComponent extends Tab implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
