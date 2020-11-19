import { IComponentBase } from '../common/component-base';
import { Menu } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class MenuComponent extends Menu implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
