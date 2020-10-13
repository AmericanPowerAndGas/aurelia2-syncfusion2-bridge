import { IComponentBase } from '../common/component-base';
import { ContextMenu } from '@syncfusion/ej2-navigations';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class ContextMenuComponent extends ContextMenu implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
