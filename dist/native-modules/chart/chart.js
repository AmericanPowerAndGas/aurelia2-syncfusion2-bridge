var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { Chart, Category, Legend, Tooltip, StackingLineSeries, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries } from '@syncfusion/ej2-charts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries);
export const inputs = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
export const twoWays = [];
let ChartComponent = class ChartComponent extends Chart {
    constructor(element) {
        super();
        this.seriesChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'seriesChildProp';
    }
};
__decorate([
    children({ property: `${constants.bindablePrefix}series` }),
    __metadata("design:type", Array)
], ChartComponent.prototype, "seriesChildProp", void 0);
ChartComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}chart`),
    generateBindables(constants.ej2ElementPrefix + 'Chart', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], ChartComponent);
export { ChartComponent };

//# sourceMappingURL=chart.js.map
