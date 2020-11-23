import { IComponentBase } from '../common/component-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class RichTextEditorComponent extends RichTextEditor implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
