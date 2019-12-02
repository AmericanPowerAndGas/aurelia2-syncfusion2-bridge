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
let ejBulletGraph = class ejBulletGraph extends WidgetBase {
    constructor(element) {
        super();
        this.qualitativeRanges = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'qualitativeRanges';
    }
};
__decorate([
    children(`${constants.elementPrefix}qualitative-range`)
], ejBulletGraph.prototype, "qualitativeRanges", void 0);
ejBulletGraph = __decorate([
    customElement(`${constants.elementPrefix}bullet-graph`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'enableResizing', 'flowDirection', 'height', 'isResponsive', 'enableGroupSeparator', 'locale', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width']),
    inject(Element)
], ejBulletGraph);
export { ejBulletGraph };
