import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inject, customElement } from '../common/common';

export const inputs: string[] = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
export const twoWays: string[] = [];


@customElement(`${constants.bindablePrefix}series`)
@generateBindables('series', inputs, twoWays, null, null)
export class SeriesComponent {    
}