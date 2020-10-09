"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesComponent = exports.twoWays = exports.inputs = void 0;
const constants_1 = require("../common/constants");
const decorators_1 = require("../common/decorators");
const common_1 = require("../common/common");
exports.inputs = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
exports.twoWays = [];
let SeriesComponent = class SeriesComponent {
};
SeriesComponent = __decorate([
    common_1.customElement(`${constants_1.constants.bindablePrefix}series`),
    decorators_1.generateBindables('series', exports.inputs, exports.twoWays, null, null)
], SeriesComponent);
exports.SeriesComponent = SeriesComponent;

//# sourceMappingURL=series.js.map
