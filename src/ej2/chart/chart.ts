import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { inject, inlineView, customElement, children } from '../../common/common';
import { Chart, Category, Legend, Tooltip, StackingLineSeries, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries } from '@syncfusion/ej2-charts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries );

@customElement(`${constants.ej2ElementPrefix}chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Chart', ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'], [],[],null)
@inject(Element)
export class ej2Chart extends Ej2WidgetBase {
    @children(`e-series`) series = [];
   
  constructor(element) {
      super(Chart);
    this.element = element;
    this.hasChildProperty = true;
     this.childPropertyName = 'series';     
  }
}

