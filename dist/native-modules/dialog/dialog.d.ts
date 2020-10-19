import { IComponentBase } from '../common/component-base';
import { Dialog } from '@syncfusion/ej2-popups';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class DialogComponent extends Dialog implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
