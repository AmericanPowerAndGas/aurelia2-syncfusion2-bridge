var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inject, inlineView, customElement, children } from '../common/common';
let ejSunburstChart = class ejSunburstChart extends WidgetBase {
    constructor(element) {
        super();
        this.levels = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'levels';
    }
};
__decorate([
    children(`${constants.elementPrefix}sunburst-levels`)
], ejSunburstChart.prototype, "levels", void 0);
ejSunburstChart = __decorate([
    customElement(`${constants.elementPrefix}sunburst-chart`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType']),
    inject(Element)
], ejSunburstChart);
export { ejSunburstChart };
