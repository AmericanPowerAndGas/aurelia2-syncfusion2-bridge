var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { customElement, inlineView, inject } from '../common/common';
let ejPdfViewer = class ejPdfViewer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPdfViewer = __decorate([
    customElement(`${constants.elementPrefix}pdf-viewer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'textSelectionContextMenu', 'annotationContextMenu', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'bufferingMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName']),
    inject(Element)
], ejPdfViewer);
export { ejPdfViewer };
