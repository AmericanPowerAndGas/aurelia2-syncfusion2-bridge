import { IComponentBase } from '../common/component-base';
import { Accordion } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class AccordionComponent extends Accordion implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
