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
let ejRangeNavigator = class ejRangeNavigator extends WidgetBase {
    constructor(element) {
        super();
        this.series = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'series';
    }
};
__decorate([
    children(`${constants.elementPrefix}range-series`)
], ejRangeNavigator.prototype, "series", void 0);
ejRangeNavigator = __decorate([
    customElement(`${constants.elementPrefix}range-navigator`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejRangeNavigator', ['allowSnapping', 'allowNextValue', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejRangeNavigator);
export { ejRangeNavigator };
