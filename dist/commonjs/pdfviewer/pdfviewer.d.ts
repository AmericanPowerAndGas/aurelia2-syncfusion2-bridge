import { IComponentBase } from '../common/component-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
export declare const inputs: string[];
export declare const twoWays: string[];
export declare class PdfViewerComponent extends PdfViewer implements IComponentBase {
    constructor(element: any);
    addTwoWay: (propList: string[]) => void;
}
