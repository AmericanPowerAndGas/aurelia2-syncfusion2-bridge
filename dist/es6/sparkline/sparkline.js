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
let ejSparkline = class ejSparkline extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSparkline = __decorate([
    customElement(`${constants.elementPrefix}sparkline`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']),
    inject(Element)
], ejSparkline);
export { ejSparkline };
