import { IComponentBase } from '../common/component-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class LinearGaugeComponent extends LinearGauge implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
