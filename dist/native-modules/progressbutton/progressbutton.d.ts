import { IComponentBase } from '../common/component-base';
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ProgressButtonComponent extends ProgressButton implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
