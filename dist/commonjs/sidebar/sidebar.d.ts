import { IComponentBase } from '../common/component-base';
import { Sidebar } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class SidebarComponent extends Sidebar implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
