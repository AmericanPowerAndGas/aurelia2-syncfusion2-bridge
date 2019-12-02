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
let ejReportViewer = class ejReportViewer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejReportViewer = __decorate([
    customElement(`${constants.elementPrefix}report-viewer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'parameterSettings', 'printMode', 'printOption', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'serviceAuthorizationToken', 'enableParameterBlockScroller', 'enableDatasourceBlockScroller', 'sizeToReportContent', 'autoRender', 'enableNotificationBar', 'enableDropDownSearch', 'enablePageVirtualization', 'showExceptionsInDialog']),
    inject(Element)
], ejReportViewer);
export { ejReportViewer };
