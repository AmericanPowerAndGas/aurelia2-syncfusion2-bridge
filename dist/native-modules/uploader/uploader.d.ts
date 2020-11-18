import { IComponentBase } from '../common/component-base';
import { Uploader } from '@syncfusion/ej2-inputs';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class UploaderComponent extends Uploader implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
