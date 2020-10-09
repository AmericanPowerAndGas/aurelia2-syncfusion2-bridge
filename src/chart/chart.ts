import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children} from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Chart, Category, Legend, Tooltip, StackingLineSeries, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries } from '@syncfusion/ej2-charts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries);

export const inputs: string[] = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
export const twoWays: string[] = [];

@customElement(`${constants.ej2ElementPrefix}chart`)
@generateBindables(constants.ej2ElementPrefix + 'Chart', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ChartComponent extends Chart implements IComponentBase {
    @children({ property: `${constants.bindablePrefix}series` }) seriesChildProp:any[] = [];
    hasChildProperty: boolean;
    childPropertyName: string;    
    constructor(element) {
        super();       
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'seriesChildProp';          
    }
    public addTwoWay: (propList: string[]) => void;
}