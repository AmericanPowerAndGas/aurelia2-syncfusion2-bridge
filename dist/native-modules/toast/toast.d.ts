import { IComponentBase } from '../common/component-base';
import { Toast } from '@syncfusion/ej2-notifications';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ToastComponent extends Toast implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
