"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartComponent = exports.twoWays = exports.inputs = void 0;
const constants_1 = require("../common/constants");
const decorators_1 = require("../common/decorators");
const common_1 = require("../common/common");
const component_base_1 = require("../common/component-base");
const ej2_charts_1 = require("@syncfusion/ej2-charts");
ej2_charts_1.Chart.Inject(ej2_charts_1.StackingLineSeries, ej2_charts_1.Category, ej2_charts_1.Legend, ej2_charts_1.Tooltip, ej2_charts_1.BarSeries, ej2_charts_1.StackingBarSeries, ej2_charts_1.LineSeries, ej2_charts_1.StepLineSeries, ej2_charts_1.SplineSeries, ej2_charts_1.MultiColoredLineSeries, ej2_charts_1.AreaSeries, ej2_charts_1.RangeAreaSeries, ej2_charts_1.DateTime, ej2_charts_1.StackingAreaSeries, ej2_charts_1.StepAreaSeries, ej2_charts_1.MultiColoredAreaSeries, ej2_charts_1.ColumnSeries, ej2_charts_1.StackingColumnSeries, ej2_charts_1.RangeColumnSeries, ej2_charts_1.ScatterSeries, ej2_charts_1.BubbleSeries);
exports.inputs = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
exports.twoWays = [];
let ChartComponent = class ChartComponent extends ej2_charts_1.Chart {
    constructor(element) {
        super();
        this.seriesChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'seriesChildProp';
    }
};
__decorate([
    common_1.children({ property: `${constants_1.constants.bindablePrefix}series` }),
    __metadata("design:type", Array)
], ChartComponent.prototype, "seriesChildProp", void 0);
ChartComponent = __decorate([
    common_1.customElement(`${constants_1.constants.ej2ElementPrefix}chart`),
    decorators_1.generateBindables(constants_1.constants.ej2ElementPrefix + 'Chart', exports.inputs, exports.twoWays, null, null),
    common_1.inject(Element),
    decorators_1.componentMixins([component_base_1.ComponentBase]),
    __metadata("design:paramtypes", [Object])
], ChartComponent);
exports.ChartComponent = ChartComponent;

//# sourceMappingURL=chart.js.map
