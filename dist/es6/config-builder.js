import { PLATFORM } from 'aurelia-pal';
export class EjConfigBuilder {
    constructor() {
        this.resources = [];
        this.useGlobalResources = true;
    }
    useAll() {
        this.ejGrid()
            .ejChart()
            .ejSunburstChart()
            .ejMap()
            .ejTreeMap()
            .ejRangeNavigator()
            .ejDiagram()
            .ejHeatMap()
            .ejHeatMapLegend()
            .ejSparkline()
            .ejSymbolPalette()
            .ejOverview()
            .ejPager()
            .ejBulletGraph()
            .ejCircularGauge()
            .ejLinearGauge()
            .ejDigitalGauge()
            .ejSplitter()
            .ejDatePicker()
            .ejGantt()
            .ejTreeGrid()
            .ejColorPicker()
            .ejDialog()
            .ejScroller()
            .ejBarcode()
            .ejPdfViewer()
            .ejNumericTextbox()
            .ejCurrencyTextbox()
            .ejPercentageTextbox()
            .ejTimePicker()
            .ejToolbar()
            .ejMenu()
            .ejMaskEdit()
            .ejTreeView()
            .ejKanban()
            .ejRibbon()
            .ejSpreadsheet()
            .ejRating()
            .ejListBox()
            .ejListView()
            .ejNavigationDrawer()
            .ejRotator()
            .ejRTE()
            .ejDropDownList()
            .ejComboBox()
            .ejAutocomplete()
            .ejRadialMenu()
            .ejRadialSlider()
            .ejTile()
            .ejAccordion()
            .ejTab()
            .ejCheckBox()
            .ejRadioButton()
            .ejToggleButton()
            .ejSplitButton()
            .ejGroupButton()
            .ejDateTimePicker()
            .ejDateRangePicker()
            .ejProgressBar()
            .ejTagCloud()
            .ejButton()
            .ejSlider()
            .ejFileExplorer()
            .ejPivotGrid()
            .ejPivotChart()
            .ejPivotGauge()
            .ejPivotSchemaDesigner()
            .ejPivotTreeMap()
            .ejWaitingPopup()
            .ejReportViewer()
            .ejSchedule()
            .ejUploadbox()
            .ejSignature()
            .ejTooltip()
            .ejSpellCheck()
            .ejTemplate()
            .ej2Template()
            .ej2DatePicker()
            .ej2Accordion()
            .ej2Grid()
            .ej2DateTimePicker()
            .ej2Diagram()
            .ej2Overview()
            .ej2RTE()
            .ej2Tab()
            .ej2PdfViewer()
            .ej2LinearGauge()
            .ej2Chart()
            .ej2MaskEdit()
            .ej2Button();
        return this;
    }
    withoutGlobalResources() {
        this.useGlobalResources = false;
        return this;
    }
    ejGrid() {
        this.resources.push(PLATFORM.moduleName('./grid/grid'));
        this.resources.push(PLATFORM.moduleName('./grid/column'));
        return this;
    }
    ejChart() {
        this.resources.push(PLATFORM.moduleName('./chart/chart'));
        this.resources.push(PLATFORM.moduleName('./chart/series'));
        return this;
    }
    ejSunburstChart() {
        this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstchart'));
        this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
        return this;
    }
    ejMap() {
        this.resources.push(PLATFORM.moduleName('./map/map'));
        this.resources.push(PLATFORM.moduleName('./map/layer'));
        return this;
    }
    ejTreeMap() {
        this.resources.push(PLATFORM.moduleName('./treemap/treemap'));
        this.resources.push(PLATFORM.moduleName('./treemap/level'));
        return this;
    }
    ejRangeNavigator() {
        this.resources.push(PLATFORM.moduleName('./rangenavigator/rangenavigator'));
        this.resources.push(PLATFORM.moduleName('./rangenavigator/rangeseries'));
        return this;
    }
    ejDiagram() {
        this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
        return this;
    }
    ejHeatMap() {
        this.resources.push(PLATFORM.moduleName('./heatmap/heatmap'));
        return this;
    }
    ejHeatMapLegend() {
        this.resources.push(PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
        return this;
    }
    ejSparkline() {
        this.resources.push(PLATFORM.moduleName('./sparkline/sparkline'));
        return this;
    }
    ejSymbolPalette() {
        this.resources.push(PLATFORM.moduleName('./symbolpalette/symbolpalette'));
        return this;
    }
    ejOverview() {
        this.resources.push(PLATFORM.moduleName('./overview/overview'));
        return this;
    }
    ejPager() {
        this.resources.push(PLATFORM.moduleName('./pager/pager'));
        return this;
    }
    ejBulletGraph() {
        this.resources.push(PLATFORM.moduleName('./bulletgraph/bulletgraph'));
        this.resources.push(PLATFORM.moduleName('./bulletgraph/qualitativerange'));
        return this;
    }
    ejCircularGauge() {
        this.resources.push(PLATFORM.moduleName('./circulargauge/circulargauge'));
        return this;
    }
    ejLinearGauge() {
        this.resources.push(PLATFORM.moduleName('./lineargauge/lineargauge'));
        return this;
    }
    ejDigitalGauge() {
        this.resources.push(PLATFORM.moduleName('./digitalgauge/digitalgauge'));
        return this;
    }
    ejSplitter() {
        this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
        return this;
    }
    ejDatePicker() {
        this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
        return this;
    }
    ejGantt() {
        this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
        return this;
    }
    ejTreeGrid() {
        this.resources.push(PLATFORM.moduleName('./treegrid/treegrid'));
        this.resources.push(PLATFORM.moduleName('./treegrid/treegridcolumn'));
        return this;
    }
    ejColorPicker() {
        this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
        return this;
    }
    ejDialog() {
        this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
        return this;
    }
    ejScroller() {
        this.resources.push(PLATFORM.moduleName('./scroller/scroller'));
        return this;
    }
    ejBarcode() {
        this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
        return this;
    }
    ejPdfViewer() {
        this.resources.push(PLATFORM.moduleName('./pdfviewer/pdfviewer'));
        return this;
    }
    ejNumericTextbox() {
        this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
        return this;
    }
    ejCurrencyTextbox() {
        this.resources.push(PLATFORM.moduleName('./currencytextbox/currencytextbox'));
        return this;
    }
    ejPercentageTextbox() {
        this.resources.push(PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
        return this;
    }
    ejTimePicker() {
        this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
        return this;
    }
    ejToolbar() {
        this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
        return this;
    }
    ejMenu() {
        this.resources.push(PLATFORM.moduleName('./menu/menu'));
        return this;
    }
    ejMaskEdit() {
        this.resources.push(PLATFORM.moduleName('./maskedit/maskedit'));
        return this;
    }
    ejTreeView() {
        this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
        return this;
    }
    ejKanban() {
        this.resources.push(PLATFORM.moduleName('./kanban/kanban'));
        this.resources.push(PLATFORM.moduleName('./kanban/kanbancolumn'));
        return this;
    }
    ejRibbon() {
        this.resources.push(PLATFORM.moduleName('./ribbon/ribbon'));
        return this;
    }
    ejSpreadsheet() {
        this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
        this.resources.push(PLATFORM.moduleName('./spreadsheet/sheet'));
        return this;
    }
    ejRating() {
        this.resources.push(PLATFORM.moduleName('./rating/rating'));
        return this;
    }
    ejListBox() {
        this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
        return this;
    }
    ejListView() {
        this.resources.push(PLATFORM.moduleName('./listview/listview'));
        return this;
    }
    ejNavigationDrawer() {
        this.resources.push(PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
        return this;
    }
    ejRotator() {
        this.resources.push(PLATFORM.moduleName('./rotator/rotator'));
        return this;
    }
    ejRTE() {
        this.resources.push(PLATFORM.moduleName('./rte/rte'));
        return this;
    }
    ejDropDownList() {
        this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
        return this;
    }
    ejComboBox() {
        this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
        return this;
    }
    ejAutocomplete() {
        this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
        return this;
    }
    ejRadialMenu() {
        this.resources.push(PLATFORM.moduleName('./radialmenu/radialmenu'));
        this.resources.push(PLATFORM.moduleName('./radialmenu/item'));
        return this;
    }
    ejRadialSlider() {
        this.resources.push(PLATFORM.moduleName('./radialslider/radialslider'));
        return this;
    }
    ejTile() {
        this.resources.push(PLATFORM.moduleName('./tile/tile'));
        return this;
    }
    ejAccordion() {
        this.resources.push(PLATFORM.moduleName('./accordion/accordion'));
        return this;
    }
    ejTab() {
        this.resources.push(PLATFORM.moduleName('./tab/tab'));
        return this;
    }
    ejCheckBox() {
        this.resources.push(PLATFORM.moduleName('./checkbox/checkbox'));
        return this;
    }
    ejRadioButton() {
        this.resources.push(PLATFORM.moduleName('./radiobutton/radiobutton'));
        return this;
    }
    ejToggleButton() {
        this.resources.push(PLATFORM.moduleName('./togglebutton/togglebutton'));
        return this;
    }
    ejSplitButton() {
        this.resources.push(PLATFORM.moduleName('./splitbutton/splitbutton'));
        return this;
    }
    ejGroupButton() {
        this.resources.push(PLATFORM.moduleName('./groupbutton/groupbutton'));
        return this;
    }
    ejDateTimePicker() {
        this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
        return this;
    }
    ejDateRangePicker() {
        this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
        return this;
    }
    ejProgressBar() {
        this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
        return this;
    }
    ejTagCloud() {
        this.resources.push(PLATFORM.moduleName('./tagcloud/tagcloud'));
        return this;
    }
    ejButton() {
        this.resources.push(PLATFORM.moduleName('./button/button'));
        return this;
    }
    ejSlider() {
        this.resources.push(PLATFORM.moduleName('./slider/slider'));
        return this;
    }
    ejFileExplorer() {
        this.resources.push(PLATFORM.moduleName('./fileexplorer/fileexplorer'));
        return this;
    }
    ejPivotGrid() {
        this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
        return this;
    }
    ejPivotChart() {
        this.resources.push(PLATFORM.moduleName('./pivotchart/pivotchart'));
        return this;
    }
    ejPivotGauge() {
        this.resources.push(PLATFORM.moduleName('./pivotgauge/pivotgauge'));
        return this;
    }
    ejPivotSchemaDesigner() {
        this.resources.push(PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
        return this;
    }
    ejPivotTreeMap() {
        this.resources.push(PLATFORM.moduleName('./pivottreemap/pivottreemap'));
        return this;
    }
    ejWaitingPopup() {
        this.resources.push(PLATFORM.moduleName('./waitingpopup/waitingpopup'));
        return this;
    }
    ejReportViewer() {
        this.resources.push(PLATFORM.moduleName('./reportviewer/reportviewer'));
        return this;
    }
    ejSchedule() {
        this.resources.push(PLATFORM.moduleName('./schedule/schedule'));
        this.resources.push(PLATFORM.moduleName('./schedule/scheduleresource'));
        return this;
    }
    ejUploadbox() {
        this.resources.push(PLATFORM.moduleName('./uploadbox/uploadbox'));
        return this;
    }
    ejSignature() {
        this.resources.push(PLATFORM.moduleName('./signature/signature'));
        return this;
    }
    ejTooltip() {
        this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
        return this;
    }
    ejSpellCheck() {
        this.resources.push(PLATFORM.moduleName('./spellcheck/spellcheck'));
        return this;
    }
    ejTemplate() {
        this.resources.push(PLATFORM.moduleName('./common/template'));
        return this;
    }
    ej2DatePicker() {
        this.resources.push(PLATFORM.moduleName('./ej2/datepicker/datepicker'));
        return this;
    }
    ej2Accordion() {
        this.resources.push(PLATFORM.moduleName('./ej2/accordion/accordion'));
        return this;
    }
    ej2Grid() {
        this.resources.push(PLATFORM.moduleName('./ej2/grid/grid'));
        this.resources.push(PLATFORM.moduleName('./ej2/grid/column'));
        return this;
    }
    ej2Template() {
        this.resources.push(PLATFORM.moduleName('./common/ej2-template'));
        return this;
    }
    ej2DateTimePicker() {
        this.resources.push(PLATFORM.moduleName('./ej2/datetimepicker/datetimepicker'));
        return this;
    }
    ej2Diagram() {
        this.resources.push(PLATFORM.moduleName('./ej2/diagram/diagram'));
        return this;
    }
    ej2Overview() {
        this.resources.push(PLATFORM.moduleName('./ej2/overview/overview'));
        return this;
    }
    ej2RTE() {
        this.resources.push(PLATFORM.moduleName('./ej2/rte/rte'));
        return this;
    }
    ej2Tab() {
        this.resources.push(PLATFORM.moduleName('./ej2/tab/tab'));
        return this;
    }
    ej2PdfViewer() {
        this.resources.push(PLATFORM.moduleName('./ej2/pdfviewer/pdfviewer'));
        return this;
    }
    ej2LinearGauge() {
        this.resources.push(PLATFORM.moduleName('./ej2/lineargauge/lineargauge'));
        return this;
    }
    ej2Chart() {
        this.resources.push(PLATFORM.moduleName('./ej2/chart/chart'));
        this.resources.push(PLATFORM.moduleName('./ej2/chart/series'));
        return this;
    }
    ej2MaskEdit() {
        this.resources.push(PLATFORM.moduleName('./ej2/maskedit/maskedit'));
        return this;
    }
    ej2Button() {
        this.resources.push(PLATFORM.moduleName('./ej2/button/button'));
        return this;
    }
}
