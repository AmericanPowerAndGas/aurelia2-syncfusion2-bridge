import { IComponentBase } from '../common/component-base';
import { Tooltip } from '@syncfusion/ej2-popups';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class TooltipComponent extends Tooltip implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
