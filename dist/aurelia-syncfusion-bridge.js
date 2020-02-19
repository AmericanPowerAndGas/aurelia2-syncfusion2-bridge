import {PLATFORM} from 'aurelia-pal';
import {customAttribute,bindable,customElement,children,TemplatingEngine,inlineView,BindableProperty,HtmlBehaviorResource,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {inject,Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';
import {bindingMode,BindingEngine} from 'aurelia-binding';

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
            .ej2Button()
            .ej2DropDownButton()
            .ej2ProgressButton()
            .ej2SplitButton()
            .ej2ChipList()
            .ej2AutoComplete()
            .ej2ComboBox()
            .ej2DropDownList()
            .ej2MultiSelect()
            .ej2ListBox()
            .ej2TextBox()
            .ej2NumericTextBox()
            .ej2RadioButton()
            .ej2CheckBox()
            .ej2ColorPicker()
            .ej2Uploader()
            .ej2Slider()
            .ej2Switch()
            .ej2Toast()
            .ej2Schedule()
            .ej2ContextMenu()
            .ej2Menu()
            .ej2Sidebar()
            .ej2Toolbar()
            .ej2DateRangePicker()
            .ej2TimePicker();
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
    ej2DropDownButton() {
        this.resources.push(PLATFORM.moduleName('./ej2/dropdownbutton/dropdownbutton'));
        return this;
    }
    ej2ProgressButton() {
        this.resources.push(PLATFORM.moduleName('./ej2/progressbutton/progressbutton'));
        return this;
    }
    ej2SplitButton() {
        this.resources.push(PLATFORM.moduleName('./ej2/splitbutton/splitbutton'));
        return this;
    }
    ej2ChipList() {
        this.resources.push(PLATFORM.moduleName('./ej2/chips/chiplist'));
        this.resources.push(PLATFORM.moduleName('./ej2/chips/chips'));
        return this;
    }
    ej2AutoComplete() {
        this.resources.push(PLATFORM.moduleName('./ej2/autocomplete/autocomplete'));
        return this;
    }
    ej2ComboBox() {
        this.resources.push(PLATFORM.moduleName('./ej2/combobox/combobox'));
        return this;
    }
    ej2DropDownList() {
        this.resources.push(PLATFORM.moduleName('./ej2/dropdownlist/dropdownlist'));
        return this;
    }
    ej2MultiSelect() {
        this.resources.push(PLATFORM.moduleName('./ej2/multiselect/multiselect'));
        return this;
    }
    ej2ListBox() {
        this.resources.push(PLATFORM.moduleName('./ej2/listbox/listbox'));
        return this;
    }
    ej2TextBox() {
        this.resources.push(PLATFORM.moduleName('./ej2/textbox/textbox'));
        return this;
    }
    ej2NumericTextBox() {
        this.resources.push(PLATFORM.moduleName('./ej2/numerictextbox/numerictextbox'));
        return this;
    }
    ej2RadioButton() {
        this.resources.push(PLATFORM.moduleName('./ej2/radiobutton/radiobutton'));
        return this;
    }
    ej2CheckBox() {
        this.resources.push(PLATFORM.moduleName('./ej2/checkbox/checkbox'));
        return this;
    }
    ej2ColorPicker() {
        this.resources.push(PLATFORM.moduleName('./ej2/colorpicker/colorpicker'));
        return this;
    }
    ej2Uploader() {
        this.resources.push(PLATFORM.moduleName('./ej2/uploader/uploader'));
        return this;
    }
    ej2Slider() {
        this.resources.push(PLATFORM.moduleName('./ej2/slider/slider'));
        return this;
    }
    ej2Switch() {
        this.resources.push(PLATFORM.moduleName('./ej2/switch/switch'));
        return this;
    }
    ej2Toast() {
        this.resources.push(PLATFORM.moduleName('./ej2/toast/toast'));
        return this;
    }
    ej2Schedule() {
        this.resources.push(PLATFORM.moduleName('./ej2/schedule/schedule'));
        return this;
    }
    ej2ContextMenu() {
        this.resources.push(PLATFORM.moduleName('./ej2/contextmenu/contextmenu'));
        return this;
    }
    ej2Menu() {
        this.resources.push(PLATFORM.moduleName('./ej2/menu/menu'));
        return this;
    }
    ej2Sidebar() {
        this.resources.push(PLATFORM.moduleName('./ej2/sidebar/sidebar'));
        return this;
    }
    ej2Toolbar() {
        this.resources.push(PLATFORM.moduleName('./ej2/toolbar/items'));
        this.resources.push(PLATFORM.moduleName('./ej2/toolbar/toolbar'));
        return this;
    }
    ej2DateRangePicker() {
        this.resources.push(PLATFORM.moduleName('./ej2/daterangepicker/daterangepicker'));
        return this;
    }
    ej2TimePicker() {
        this.resources.push(PLATFORM.moduleName('./ej2/timepicker/timepicker'));
        return this;
    }
}

export function configure(aurelia, configCallback) {
    let builder = new EjConfigBuilder();
    if (configCallback !== undefined && typeof (configCallback) === 'function') {
        configCallback(builder);
    }
    let resources = builder.resources;
    if (builder.useGlobalResources) {
        aurelia.globalResources(resources);
    }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejAccordion = class ejAccordion extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejAccordion = __decorate([
    customElement(`${constants.elementPrefix}accordion`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejAccordion);
export { ejAccordion };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejAutocomplete = class ejAutocomplete extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejAutocomplete = __decorate([
    customAttribute(`${constants.attributePrefix}autocomplete`),
    generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'ignoreAccent', 'locale', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejAutocomplete);
export { ejAutocomplete };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejBarcode = class ejBarcode extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejBarcode = __decorate([
    customElement(`${constants.elementPrefix}barcode`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension']),
    inject(Element)
], ejBarcode);
export { ejBarcode };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let QualitativeRange = class QualitativeRange {
};
QualitativeRange = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}qualitative-range`),
    generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])
], QualitativeRange);
export { QualitativeRange };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejButton = class ejButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejButton = __decorate([
    customAttribute(`${constants.attributePrefix}button`),
    generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejButton);
export { ejButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejChart = class ejChart extends WidgetBase {
    constructor(element) {
        super();
        this.series = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'series';
    }
};
__decorate([
    children(`${constants.elementPrefix}series`)
], ejChart.prototype, "series", void 0);
ejChart = __decorate([
    customElement(`${constants.elementPrefix}chart`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming']),
    inject(Element)
], ejChart);
export { ejChart };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Series = class Series {
};
Series = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}series`),
    generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings'])
], Series);
export { Series };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejCheckBox = class ejCheckBox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejCheckBox = __decorate([
    customAttribute(`${constants.attributePrefix}check-box`),
    generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejCheckBox);
export { ejCheckBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejCircularGauge = class ejCircularGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejCircularGauge = __decorate([
    customElement(`${constants.elementPrefix}circular-gauge`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'rangeZOrder', 'enableAnimation', 'enableGroupSeparator', 'enableResize', 'exportSettings', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'locale', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'legend', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']),
    inject(Element)
], ejCircularGauge);
export { ejCircularGauge };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejColorPicker = class ejColorPicker extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejColorPicker = __decorate([
    customAttribute(`${constants.attributePrefix}color-picker`),
    generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue']),
    inject(Element)
], ejColorPicker);
export { ejColorPicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejComboBox = class ejComboBox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejComboBox = __decorate([
    customAttribute(`${constants.attributePrefix}combo-box`),
    generateBindables('ejComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enableRtl', 'enabled', 'fields', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'width'], ['value']),
    inject(Element)
], ejComboBox);
export { ejComboBox };

export { customAttribute, bindable, inject, inlineView, customElement, children, TemplatingEngine };

export const constants = {
    eventPrefix: 'e-on-',
    bindablePrefix: 'e-',
    attributePrefix: 'ej-',
    elementPrefix: 'ej-',
    aureliaTemplateString: '<template><slot></slot></template>',
    ej2AttributePrefix: 'ej2-',
    ej2ElementPrefix: 'ej2-',
};

export function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
    return function (target, key, descriptor) {
        let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
        let container = (Container.instance || new Container());
        let util = container.get(Util);
        let bindingInstance = container.get(BindingEngine);
        inputs.push('options');
        inputs.push('widget');
        let len = inputs.length;
        if (observerCollection) {
            target.prototype.arrayObserver = [];
            observerCollection.forEach((element) => {
                target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
            });
            target.prototype.bindingInstance = bindingInstance;
        }
        target.prototype.controlName = controlName;
        target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
        target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
        if (len) {
            target.prototype.controlProperties = inputs;
            for (let i = 0; i < len; i++) {
                let option = inputs[i];
                if (abbrevProperties && option in abbrevProperties) {
                    option = abbrevProperties[option];
                    option.forEach((prop) => {
                        registerProp(util, prop, target, behaviorResource, descriptor);
                    });
                }
                else {
                    registerProp(util, option, target, behaviorResource, descriptor);
                }
            }
        }
    };
}
function registerProp(util, option, target, behaviorResource, descriptor) {
    let nameOrConfigOrTarget = {
        name: util.getBindablePropertyName(option)
    };
    if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
    }
    let prop = new BindableProperty(nameOrConfigOrTarget);
    prop.registerWith(target, behaviorResource, descriptor);
}
export function delayed() {
    return function (target, key, descriptor) {
        let taskQueue = (Container.instance || new Container()).get(TaskQueue);
        let ptr = descriptor.value;
        descriptor.value = function (...args) {
            if (this.childPropertyName) {
                taskQueue.queueTask(() => ptr.apply(this, args));
            }
            else {
                ptr.apply(this, args);
            }
        };
        return descriptor;
    };
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Ej2TemplateProcessor = class Ej2TemplateProcessor {
    constructor(context, templateEngine) {
        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new Util();
    }
    initWidgetDependancies() {
        this.context.widget.queryCellInfo = (arg) => {
            if (arg.column && arg.column.template && arg.data) {
                let elements = arg.cell.children;
                for (let i = 0; i < elements.length; i++) {
                    this.bindView(elements[i], arg.data);
                }
            }
        };
    }
    bindView(element, data) {
        let view = this.templatingEngine.enhance(element);
        view.bind(data, this.context.parentCtx);
    }
    clearTempalte() {
        let templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    }
    unbindViews(obj) {
        for (let i = 0; i < obj.views.length; i++) {
            let view = obj.views[i];
            view.unbind();
        }
    }
};
Ej2TemplateProcessor = __decorate([
    inject(TemplatingEngine, Util)
], Ej2TemplateProcessor);
export { Ej2TemplateProcessor };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Ej2Template = class Ej2Template {
    constructor(target) {
        this.template = target.elementInstruction.template;
    }
};
__decorate([
    bindable
], Ej2Template.prototype, "template", void 0);
Ej2Template = __decorate([
    customElement(`${constants.ej2ElementPrefix}template`),
    noView(),
    processContent((compiler, resources, element, instruction) => {
        let html = element.innerHTML;
        if (html !== '') {
            instruction.template = html;
        }
        element.innerHTML = '';
    }),
    inject(TargetInstruction)
], Ej2Template);
export { Ej2Template };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export class Ej2WidgetBase {
    constructor(componentBaseRef) {
        this.componentBaseRef = componentBaseRef;
    }
    createWidget(option) {
        this.allOption = this.getWidgetOptions(option.element);
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        if (this.controlName == constants.ej2ElementPrefix + 'MaskEdit' && this.allOption.value)
            this.allOption.value = this.allOption.value.toString();
        if (this.controlName == constants.ej2ElementPrefix + 'ContextMenu' || this.controlName == constants.ej2ElementPrefix + 'Menu')
            this.eWidget = this.widget = new this.componentBaseRef(this.allOption, option.element.firstChild);
        else {
            this.eWidget = this.widget = new this.componentBaseRef(this.allOption);
            this.widget.appendTo(option.element);
        }
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        if (this.isEditor || this.controlName == constants.ej2ElementPrefix + 'RTE') {
            this.widget.change = (arg) => {
                if (this.controlName == constants.ej2ElementPrefix + 'RTE' && arg && arg.element && 'eValue' in this)
                    this[this.util.getBindablePropertyName('value')] = arg.element.value;
                else if (this.controlName == constants.ej2ElementPrefix + 'Switch' && arg)
                    this[this.util.getBindablePropertyName('checked')] = arg.checked;
                else if (this.controlName == constants.ej2ElementPrefix + 'DateRangePicker' && arg) {
                    this[this.util.getBindablePropertyName('value')] = arg.value;
                    this[this.util.getBindablePropertyName('startDate')] = arg.startDate;
                    this[this.util.getBindablePropertyName('endDate')] = arg.endDate;
                }
                else if (arg && 'eValue' in this)
                    this[this.util.getBindablePropertyName('value')] = arg.value;
            };
        }
    }
    bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.value = this.eValue === undefined ? null : this.eValue;
        }
    }
    createTwoWays() {
        let model = this.allOption;
        let twoWays = this.twoWays;
        let len = twoWays.length;
        for (let i = 0; i < len; i++) {
            let prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
        }
    }
    addTwoways(prop) {
        let model = this;
        let value = window.firstValue;
        return function (newVal, isApp) {
            if (value === window.firstValue) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
                value = model[viewModelProp];
                if (value === undefined) {
                    value = this.defaults[prop];
                }
                return value;
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) {
                return null;
            }
            value = newVal;
            if (!isApp && model.util.hasValue(newVal)) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
                model[viewModelProp] = newVal;
            }
            return null;
        };
    }
    getWidgetOptions(element) {
        let propOptions;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        }
        else {
            propOptions = this.util.getOptions(this, this.controlProperties);
        }
        let eventOption = getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);
    }
    getChildProperties(options) {
        let PropertyName = this.childPropertyName;
        if (PropertyName == 'series')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-series-collection > e-series')).map((x) => x.au.controller.viewModel);
        if (PropertyName == 'chips')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-chips > e-chip')).map((x) => x.au.controller.viewModel);
        if (PropertyName == 'items')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-items > e-item')).map((x) => x.au.controller.viewModel);
        let childCollection = this[PropertyName];
        let len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            let childProperties = childCollection[0].controlProperties;
            for (let i = 0; i < len; i++) {
                options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
        }
    }
    attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(template => template.setTemplates());
        }
        this.util = new Util();
        this.createWidget({ element: this.element });
    }
    unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    }
    unbind() {
        this.unsubscribe();
    }
    propertyChanged(property, newValue, oldValue) {
        if (this.widget) {
            let modelValue;
            let prop = this.util.getControlPropertyName(this, property);
            this.unsubscribe();
            if (this.arrayObserver) {
                this.arrayObserver.forEach((arrayProp) => {
                    if (this[arrayProp] instanceof Array) {
                        this.subscription = this.bindingInstance.collectionObserver(this[arrayProp]).subscribe((e) => {
                            this.update(e);
                        });
                    }
                });
            }
            if (prop) {
                if (prop === 'widget') {
                    return;
                }
                else if (prop !== 'options') {
                    modelValue = this.widget[prop];
                    let isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(prop);
                        }
                        this.widget[prop] = newValue;
                    }
                }
                else {
                    this.widget['value'] = newValue;
                }
            }
        }
    }
    update(e) {
        let modelValue;
        let newVal;
        if (e.length) {
            this.arrayObserver.forEach((arrayProp) => {
                if (this[arrayProp] instanceof Array) {
                    let prop = this.util.getControlPropertyName(this, arrayProp);
                    modelValue = this.widget.model[prop];
                    if (typeof modelValue === 'function') {
                        modelValue = modelValue();
                        newVal = modelValue;
                        newVal = this.addTwoways(prop);
                        this.widget[prop] = newVal;
                    }
                    else {
                        this.widget[prop] = modelValue;
                    }
                }
            });
        }
    }
    detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
        if (this.widget) {
            this.widget.destroy();
        }
    }
}
__decorate([
    delayed()
], Ej2WidgetBase.prototype, "attached", null);

export function getEventOption(element) {
    let name;
    let attr;
    let attributes = element.attributes;
    let option = {};
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    for (let i = 0, len = attributes.length; i < len; i++) {
        attr = attributes[i];
        name = attr.name;
        if (!name.startsWith(constants.eventPrefix)) {
            continue;
        }
        let actualEventName = name.split('.')[0];
        let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
        option[eventName] = e => fireEvent(element, actualEventName, e);
    }
    return option;
}
export function fireEvent(element, name, data = {}) {
    let event = new CustomEvent(name, {
        detail: data,
        bubbles: true
    });
    element.dispatchEvent(event);
    return event;
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TemplateProcessor = class TemplateProcessor {
    constructor(context, templateEngine) {
        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new Util();
    }
    initTemplate() {
        let proxy = this;
        ej.template.render = function (self, selector, data, index) {
            return proxy.renderStringTemplate(self, selector, data, index);
        };
    }
    initWidgetDependancies() {
        if (this.context.widget.aureliaTemplate) {
            this.compileTemplate(this.context.widget.element);
        }
        let proxy = this.context;
        let element = this.context.widget.element;
        element.on(this.context.widget.pluginName + 'refresh', function () {
            if (proxy.widget.aureliaTemplate) {
                proxy.templateProcessor.compileTemplate(element);
            }
        });
    }
    renderStringTemplate(self, selector, data, index) {
        let templateObject = self.aureliaTemplate;
        if (!templateObject || !templateObject[selector]) {
            templateObject = templateObject || {};
            templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
            self.aureliaTemplate = templateObject;
        }
        let scope = templateObject[selector];
        if (this.util.hasValue(index)) {
            scope.itemData[index] = data;
        }
        else {
            scope.itemData = [data];
        }
        let actElement = $(selector).html();
        let tempElement = "<div ej-prop='" + index + "' class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
        return tempElement;
    }
    compileTemplate(element) {
        let templates = $(element).find('.ej-aurelia-template');
        let templateObject = this.context.widget.aureliaTemplate;
        for (let template in templateObject) {
            let tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (let i = 0; i < tmplElement.length; i++) {
                    let dataIndex = parseInt($(tmplElement[i]).attr('ej-prop'));
                    let view = this.templatingEngine.enhance(tmplElement[i]);
                    view.bind(templateObject[template].itemData[dataIndex], this.context.parentCtx);
                    templateObject[template].views[dataIndex] = view;
                }
            }
            else {
                this.unbindViews(templateObject[template]);
                delete templateObject[template];
            }
        }
    }
    clearTempalte() {
        let templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    }
    unbindViews(obj) {
        for (let i = 0; i < obj.views.length; i++) {
            let view = obj.views[i];
            view.unbind();
        }
    }
};
TemplateProcessor = __decorate([
    inject(TemplatingEngine, Util)
], TemplateProcessor);
export { TemplateProcessor };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Template = class Template {
    constructor(target) {
        this.template = target.elementInstruction.template;
    }
};
__decorate([
    bindable
], Template.prototype, "template", void 0);
Template = __decorate([
    customElement(`${constants.elementPrefix}template`),
    noView(),
    processContent((compiler, resources, element, instruction) => {
        let html = element.innerHTML;
        if (html !== '') {
            instruction.template = html;
        }
        element.innerHTML = '';
    }),
    inject(TargetInstruction)
], Template);
export { Template };

export class Util {
    getBindablePropertyName(propertyName) {
        let name = `${constants.bindablePrefix}${propertyName}`;
        return this._unhyphenate(name);
    }
    _unhyphenate(name) {
        return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }
    getOptions(model, properties) {
        let bindableproperites = {};
        let value;
        for (let prop of properties) {
            if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
                model.abbrevProperties[prop].some(property => {
                    value = model[this.getBindablePropertyName(property)];
                    return this.hasValue(value);
                });
            }
            else {
                value = model[this.getBindablePropertyName(prop)];
            }
            if (this.hasValue(value)) {
                if (typeof value === 'string') {
                    value = this.processData(value);
                }
                bindableproperites[prop] = value;
            }
        }
        return bindableproperites;
    }
    getControlPropertyName(options, propertyName) {
        let property;
        for (let prop of options.controlProperties) {
            if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
                options.abbrevProperties[prop].some(props => {
                    property = propertyName === this.getBindablePropertyName(props) ? prop : undefined;
                    return property;
                });
                if (property)
                    break;
            }
            else if (propertyName === this.getBindablePropertyName(prop)) {
                property = prop;
                break;
            }
        }
        return property;
    }
    hasValue(prop) {
        return typeof (prop) !== 'undefined' && prop !== null;
    }
    processData(value) {
        if (value === 'true') {
            return true;
        }
        else if (value === 'false') {
            return false;
        }
        else if (+value + '' === value) {
            return +value;
        }
        return value;
    }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let firstValue = {};
export class WidgetBase {
    createWidget(option) {
        this.allOption = this.getWidgetOptions(option.element);
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        if (this.isEditor) {
            this.widget.model._change = (evt) => {
                if ('eValue' in this) {
                    this[this.util.getBindablePropertyName('value')] = evt.value;
                }
            };
        }
    }
    bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.option('value', (this.eValue === undefined ? null : this.eValue));
        }
    }
    createTwoWays() {
        let model = this.allOption;
        let twoWays = this.twoWays;
        let len = twoWays.length;
        for (let i = 0; i < len; i++) {
            let prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
        }
    }
    addTwoways(prop) {
        let model = this;
        let value = firstValue;
        return function (newVal, isApp) {
            if (value === firstValue) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
                value = model[viewModelProp];
                if (value === undefined) {
                    value = this.defaults[prop];
                }
                return value;
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) {
                return null;
            }
            value = newVal;
            if (!isApp && model.util.hasValue(newVal)) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
                model[viewModelProp] = newVal;
            }
            return null;
        };
    }
    getWidgetOptions(element) {
        let propOptions;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        }
        else {
            propOptions = this.util.getOptions(this, this.controlProperties);
        }
        let eventOption = getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);
    }
    getChildProperties(options) {
        let PropertyName = this.childPropertyName;
        let childCollection = this[PropertyName];
        let len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            let childProperties = childCollection[0].controlProperties;
            for (let i = 0; i < len; i++) {
                options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
        }
    }
    attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(template => template.setTemplates());
        }
        this.util = new Util();
        this.createWidget({ element: this.element });
    }
    unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    }
    unbind() {
        this.unsubscribe();
    }
    propertyChanged(property, newValue, oldValue) {
        if (this.widget) {
            let modelValue;
            let prop = this.util.getControlPropertyName(this, property);
            this.unsubscribe();
            if (this.arrayObserver) {
                this.arrayObserver.forEach((arrayProp) => {
                    if (this[arrayProp] instanceof Array) {
                        this.subscription = this.bindingInstance.collectionObserver(this[arrayProp]).subscribe((e) => {
                            this.update(e);
                        });
                    }
                });
            }
            if (prop) {
                if (prop === 'widget') {
                    return;
                }
                else if (prop !== 'options') {
                    modelValue = this.widget.model[prop];
                    let isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(prop);
                        }
                        this.widget.option(prop, newValue);
                    }
                }
                else {
                    this.widget.option(newValue);
                }
            }
        }
    }
    update(e) {
        let modelValue;
        let newVal;
        if (e.length) {
            this.arrayObserver.forEach((arrayProp) => {
                if (this[arrayProp] instanceof Array) {
                    let prop = this.util.getControlPropertyName(this, arrayProp);
                    modelValue = this.widget.model[prop];
                    if (typeof modelValue === 'function') {
                        modelValue = modelValue();
                        newVal = modelValue;
                        newVal = this.addTwoways(prop);
                        this.widget.option(prop, newVal);
                    }
                    else {
                        this.widget.option(prop, modelValue);
                    }
                }
            });
        }
    }
    detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
        if (this.widget) {
            this.widget.destroy();
        }
    }
}
__decorate([
    delayed()
], WidgetBase.prototype, "attached", null);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejCurrencyTextbox = class ejCurrencyTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejCurrencyTextbox = __decorate([
    customAttribute(`${constants.attributePrefix}currency-textbox`),
    generateBindables('ejCurrencyTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejCurrencyTextbox);
export { ejCurrencyTextbox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDatePicker = class ejDatePicker extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejDatePicker = __decorate([
    customAttribute(`${constants.attributePrefix}date-picker`),
    generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejDatePicker);
export { ejDatePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDateRangePicker = class ejDateRangePicker extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejDateRangePicker = __decorate([
    customAttribute(`${constants.attributePrefix}date-range-picker`),
    generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'maxDate', 'minDate', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value']),
    inject(Element)
], ejDateRangePicker);
export { ejDateRangePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDateTimePicker = class ejDateTimePicker extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejDateTimePicker = __decorate([
    customAttribute(`${constants.attributePrefix}date-time-picker`),
    generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'blackoutDates', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejDateTimePicker);
export { ejDateTimePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDiagram = class ejDiagram extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejDiagram = __decorate([
    customElement(`${constants.elementPrefix}diagram`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor']),
    inject(Element)
], ejDiagram);
export { ejDiagram };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDialog = class ejDialog extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejDialog = __decorate([
    customElement(`${constants.elementPrefix}dialog`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejDialog);
export { ejDialog };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDigitalGauge = class ejDigitalGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejDigitalGauge = __decorate([
    customElement(`${constants.elementPrefix}digital-gauge`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejDigitalGauge', ['exportSettings', 'frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value']),
    inject(Element)
], ejDigitalGauge);
export { ejDigitalGauge };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejDropDownList = class ejDropDownList extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejDropDownList = __decorate([
    customAttribute(`${constants.attributePrefix}drop-down-list`),
    generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'loadOnDemand', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }),
    inject(Element)
], ejDropDownList);
export { ejDropDownList };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejFileExplorer = class ejFileExplorer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejFileExplorer = __decorate([
    customElement(`${constants.elementPrefix}file-explorer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enablePersistence', 'enableResize', 'enableRTL', 'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'rootFolderName', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'virtualItemCount', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejFileExplorer);
export { ejFileExplorer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejGantt = class ejGantt extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejGantt = __decorate([
    customElement(`${constants.elementPrefix}gantt`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowDragAndDrop', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowUnscheduledTask', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'cellTooltipTemplate', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'dayWorkingTime', 'dragTooltip', 'durationMapping', 'durationUnit', 'durationUnitMapping', 'editDialogFields', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enablePredecessorValidation', 'enableProgressBarResizing', 'enableResize', 'enableSerialNumber', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'enableWBS', 'enableWBSPredecessor', 'endDateMapping', 'expandStateMapping', 'filterSettings', 'groupCollection', 'groupIdMapping', 'groupNameMapping', 'highlightNonWorkingTime', 'highlightWeekends', 'holidays', 'includeWeekend', 'isResponsive', 'leftTaskLabelMapping', 'leftTaskLabelTemplate', 'locale', 'milestoneMapping', 'milestoneTemplate', 'nonWorkingBackground', 'notesMapping', 'parentProgressbarBackground', 'parentTaskIdMapping', 'parentTaskbarBackground', 'parentTaskbarTemplate', 'predecessorMapping', 'predecessorTooltipTemplate', 'progressMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'query', 'readOnly', 'renderBaseline', 'resourceCollectionMapping', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resourceUnitMapping', 'resources', 'rightTaskLabelMapping', 'rightTaskLabelTemplate', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedCellIndexes', 'selectedRowIndex', 'selectionType', 'selectionMode', 'showColumnChooser', 'showColumnOptions', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'splitterSettings', 'startDateMapping', 'stripLines', 'taskCollectionMapping', 'taskIdMapping', 'taskNameMapping', 'taskSchedulingMode', 'taskSchedulingModeMapping', 'taskType', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTemplate', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'toolbarSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'weekendBackground', 'workMapping', 'workUnit', 'workWeek', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'], {}, ['dataSource']),
    inject(Element)
], ejGantt);
export { ejGantt };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Column = class Column {
    constructor() {
        this.template = [];
    }
    setTemplates() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
};
__decorate([
    children(`${constants.elementPrefix}template`)
], Column.prototype, "template", void 0);
Column = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}column`),
    generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] })
], Column);
export { Column };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejGrid = class ejGrid extends WidgetBase {
    constructor(element, templateEngine) {
        super();
        this.columns = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
};
__decorate([
    children(`${constants.elementPrefix}column`)
], ejGrid.prototype, "columns", void 0);
ejGrid = __decorate([
    customElement(`${constants.elementPrefix}grid`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], { 'enableRTL': ['enableRtl'] }, ['dataSource']),
    inject(Element, TemplatingEngine)
], ejGrid);
export { ejGrid };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejGroupButton = class ejGroupButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejGroupButton = __decorate([
    customAttribute(`${constants.attributePrefix}group-button`),
    generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejGroupButton);
export { ejGroupButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejHeatMap = class ejHeatMap extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejHeatMap = __decorate([
    customElement(`${constants.elementPrefix}heat-map`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejHeatMap', ['width', 'height', 'id', 'showTooltip', 'tooltipSettings', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection']),
    inject(Element)
], ejHeatMap);
export { ejHeatMap };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejHeatMapLegend = class ejHeatMapLegend extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejHeatMapLegend = __decorate([
    customElement(`${constants.elementPrefix}heat-map-legend`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejHeatMapLegend', ['width', 'height', 'isResponsive', 'showLabel', 'colorMappingCollection', 'orientation', 'legendMode']),
    inject(Element)
], ejHeatMapLegend);
export { ejHeatMapLegend };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejKanban = class ejKanban extends WidgetBase {
    constructor(element) {
        super();
        this.columns = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
    }
};
__decorate([
    children(`${constants.elementPrefix}kanban-column`)
], ejKanban.prototype, "columns", void 0);
ejKanban = __decorate([
    customElement(`${constants.elementPrefix}kanban`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejKanban', ['allowDragAndDrop', 'allowExternalDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale', 'showColumnWhenEmpty'], ['dataSource'], { 'enableRTL': ['enableRtl'] }, ['dataSource']),
    inject(Element)
], ejKanban);
export { ejKanban };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let KanbanColumn = class KanbanColumn {
};
KanbanColumn = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}kanban-column`),
    generateBindables('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])
], KanbanColumn);
export { KanbanColumn };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejLinearGauge = class ejLinearGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejLinearGauge = __decorate([
    customElement(`${constants.elementPrefix}linear-gauge`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'exportSettings', 'isResponsive', 'enableGroupSeparator', 'enableResize', 'frame', 'height', 'labelColor', 'locale', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']),
    inject(Element)
], ejLinearGauge);
export { ejLinearGauge };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejListBox = class ejListBox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejListBox = __decorate([
    customAttribute(`${constants.attributePrefix}list-box`),
    generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields', 'height', 'itemHeight', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'sortOrder', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value', 'dataSource'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }),
    inject(Element)
], ejListBox);
export { ejListBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejListView = class ejListView extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejListView = __decorate([
    customElement(`${constants.elementPrefix}list-view`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejListView', ['ajaxSettings', 'checkedIndices', 'cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'itemRequestCount', 'totalItemsCount', 'allowVirtualScrolling', 'virtualScrollMode'], ['dataSource', 'selectedItemIndex'], {}, ['dataSource']),
    inject(Element)
], ejListView);
export { ejListView };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Layer = class Layer {
};
Layer = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}layer`),
    generateBindables('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers'])
], Layer);
export { Layer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejMap = class ejMap extends WidgetBase {
    constructor(element) {
        super();
        this.layers = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'layers';
    }
};
__decorate([
    children(`${constants.elementPrefix}layer`)
], ejMap.prototype, "layers", void 0);
ejMap = __decorate([
    customElement(`${constants.elementPrefix}map`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'draggingOnSelection', 'enableAnimation', 'enableRTL', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'isResponsive', 'zoomSettings', 'navigationControl', 'locale', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejMap);
export { ejMap };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejMaskEdit = class ejMaskEdit extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejMaskEdit = __decorate([
    customAttribute(`${constants.attributePrefix}mask-edit`),
    generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'locale', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value']),
    inject(Element)
], ejMaskEdit);
export { ejMaskEdit };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejMenu = class ejMenu extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejMenu = __decorate([
    customAttribute(`${constants.attributePrefix}menu`),
    generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'container', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width', 'overflowHeight', 'overflowWidth'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejMenu);
export { ejMenu };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejNavigationDrawer = class ejNavigationDrawer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejNavigationDrawer = __decorate([
    customElement(`${constants.elementPrefix}navigation-drawer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejNavigationDrawer', ['ajaxSettings', 'contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width', 'isPaneOpen']),
    inject(Element)
], ejNavigationDrawer);
export { ejNavigationDrawer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejNumericTextbox = class ejNumericTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejNumericTextbox = __decorate([
    customAttribute(`${constants.attributePrefix}numeric-textbox`),
    generateBindables('ejNumericTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejNumericTextbox);
export { ejNumericTextbox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejOverview = class ejOverview extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejOverview = __decorate([
    customElement(`${constants.elementPrefix}overview`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': ['sourceId'] }),
    inject(Element)
], ejOverview);
export { ejOverview };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPager = class ejPager extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPager = __decorate([
    customElement(`${constants.elementPrefix}pager`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPager', ['customText', 'currentPage', 'cssClass', 'enabled', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'isResponsive', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'pageSizeMessage', 'template', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPager);
export { ejPager };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPdfViewer = class ejPdfViewer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPdfViewer = __decorate([
    customElement(`${constants.elementPrefix}pdf-viewer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'textSelectionContextMenu', 'annotationContextMenu', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'bufferingMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName']),
    inject(Element)
], ejPdfViewer);
export { ejPdfViewer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPercentageTextbox = class ejPercentageTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejPercentageTextbox = __decorate([
    customAttribute(`${constants.attributePrefix}percentage-textbox`),
    generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPercentageTextbox);
export { ejPercentageTextbox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPivotChart = class ejPivotChart extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPivotChart = __decorate([
    customElement(`${constants.elementPrefix}pivot-chart`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'axes', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'title', 'url', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPivotChart);
export { ejPivotChart };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPivotGauge = class ejPivotGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPivotGauge = __decorate([
    customElement(`${constants.elementPrefix}pivot-gauge`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPivotGauge);
export { ejPivotGauge };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPivotGrid = class ejPivotGrid extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPivotGrid = __decorate([
    customElement(`${constants.elementPrefix}pivot-grid`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'headerSettings', 'showUniqueNameOnPivotButton', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellClick', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'maxNodeLimitInMemberEditor', 'enableMemberEditorPaging', 'memberEditorPageSize', 'enableMemberEditorSorting', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableColumnResizing', 'resizeColumnsToFit', 'enableContextMenu', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableCompleteDataExport', 'enableXHRCredentials'], [], { 'pivotTableFieldListID': ['pivotTableFieldListId'], 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPivotGrid);
export { ejPivotGrid };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPivotSchemaDesigner = class ejPivotSchemaDesigner extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPivotSchemaDesigner = __decorate([
    customElement(`${constants.elementPrefix}pivot-schema-designer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejPivotSchemaDesigner);
export { ejPivotSchemaDesigner };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejPivotTreeMap = class ejPivotTreeMap extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejPivotTreeMap = __decorate([
    customElement(`${constants.elementPrefix}pivot-tree-map`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableXHRCredentials']),
    inject(Element)
], ejPivotTreeMap);
export { ejPivotTreeMap };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejProgressBar = class ejProgressBar extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejProgressBar = __decorate([
    customAttribute(`${constants.attributePrefix}progress-bar`),
    generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejProgressBar);
export { ejProgressBar };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Item = class Item {
    constructor() {
        this.template = [];
    }
    setTemplates() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
};
__decorate([
    children(`${constants.elementPrefix}template`)
], Item.prototype, "template", void 0);
Item = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}item`),
    generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'badge', 'badge', 'type', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'items'])
], Item);
export { Item };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRadialMenu = class ejRadialMenu extends WidgetBase {
    constructor(element, templateEngine) {
        super();
        this.items = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
};
__decorate([
    children(`${constants.elementPrefix}item`)
], ejRadialMenu.prototype, "items", void 0);
ejRadialMenu = __decorate([
    customElement(`${constants.elementPrefix}radial-menu`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position']),
    inject(Element, TemplatingEngine)
], ejRadialMenu);
export { ejRadialMenu };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRadialSlider = class ejRadialSlider extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRadialSlider = __decorate([
    customElement(`${constants.elementPrefix}radial-slider`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'locale', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks', 'value'], ['value', 'ticks']),
    inject(Element)
], ejRadialSlider);
export { ejRadialSlider };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRadioButton = class ejRadioButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRadioButton = __decorate([
    customAttribute(`${constants.attributePrefix}radio-button`),
    generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejRadioButton);
export { ejRadioButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RangeSeries = class RangeSeries {
};
RangeSeries = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}range-series`),
    generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])
], RangeSeries);
export { RangeSeries };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRating = class ejRating extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRating = __decorate([
    customAttribute(`${constants.attributePrefix}rating`),
    generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value']),
    inject(Element)
], ejRating);
export { ejRating };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejReportViewer = class ejReportViewer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejReportViewer = __decorate([
    customElement(`${constants.elementPrefix}report-viewer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'parameterSettings', 'printMode', 'printOption', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'serviceAuthorizationToken', 'enableParameterBlockScroller', 'enableDatasourceBlockScroller', 'sizeToReportContent', 'autoRender', 'enableNotificationBar', 'enableDropDownSearch', 'enablePageVirtualization', 'showExceptionsInDialog']),
    inject(Element)
], ejReportViewer);
export { ejReportViewer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRibbon = class ejRibbon extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRibbon = __decorate([
    customElement(`${constants.elementPrefix}ribbon`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'cssClass', 'collapsePinSettings', 'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejRibbon);
export { ejRibbon };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRotator = class ejRotator extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRotator = __decorate([
    customAttribute(`${constants.attributePrefix}rotator`),
    generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID'], [], { 'enableRTL': ['enableRtl'], 'thumbnailSourceID': ['thumbnailSourceId'] }),
    inject(Element)
], ejRotator);
export { ejRotator };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejRte = class ejRte extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejRte = __decorate([
    customAttribute(`${constants.attributePrefix}rte`),
    generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'pasteCleanupSettings', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'exportToPdfSettings', 'exportToWordSettings', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'importSettings', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'toolbarOverflowMode', 'tooltipSettings', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejRte);
export { ejRte };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSchedule = class ejSchedule extends WidgetBase {
    constructor(element) {
        super();
        this.resources = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'resources';
    }
};
__decorate([
    children(`${constants.elementPrefix}schedule-resource`)
], ejSchedule.prototype, "resources", void 0);
ejSchedule = __decorate([
    customElement(`${constants.elementPrefix}schedule`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowDelete', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejSchedule);
export { ejSchedule };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ScheduleResource = class ScheduleResource {
};
ScheduleResource = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}schedule-resource`),
    generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings'])
], ScheduleResource);
export { ScheduleResource };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejScroller = class ejScroller extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejScroller = __decorate([
    customAttribute(`${constants.attributePrefix}scroller`),
    generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejScroller);
export { ejScroller };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSignature = class ejSignature extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSignature = __decorate([
    customElement(`${constants.elementPrefix}signature`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSignature', ['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive', 'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth', 'width']),
    inject(Element)
], ejSignature);
export { ejSignature };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSlider = class ejSlider extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSlider = __decorate([
    customAttribute(`${constants.attributePrefix}slider`),
    generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showButtons', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejSlider);
export { ejSlider };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSparkline = class ejSparkline extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSparkline = __decorate([
    customElement(`${constants.elementPrefix}sparkline`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']),
    inject(Element)
], ejSparkline);
export { ejSparkline };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSplitButton = class ejSplitButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSplitButton = __decorate([
    customAttribute(`${constants.attributePrefix}split-button`),
    generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }),
    inject(Element)
], ejSplitButton);
export { ejSplitButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSpellCheck = class ejSpellCheck extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSpellCheck = __decorate([
    customElement(`${constants.elementPrefix}spell-check`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync', 'ajaxRequestType', 'ajaxDataType']),
    inject(Element)
], ejSpellCheck);
export { ejSpellCheck };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSplitter = class ejSplitter extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSplitter = __decorate([
    customElement(`${constants.elementPrefix}splitter`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'expanderTemplate', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejSplitter);
export { ejSplitter };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Sheet = class Sheet {
};
Sheet = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}sheet`),
    generateBindables('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell'])
], Sheet);
export { Sheet };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSpreadsheet = class ejSpreadsheet extends WidgetBase {
    constructor(element) {
        super();
        this.sheets = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'sheets';
    }
};
__decorate([
    children(`${constants.elementPrefix}sheet`)
], ejSpreadsheet.prototype, "sheets", void 0);
ejSpreadsheet = __decorate([
    customElement(`${constants.elementPrefix}spreadsheet`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowSparkline', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings', 'importSettings', 'isImport', 'isReadOnly', 'locale', 'nameManager', 'pictureSettings', 'printSettings', 'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showPager', 'showRibbon', 'undoRedoStep', 'userName']),
    inject(Element)
], ejSpreadsheet);
export { ejSpreadsheet };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SunburstLevels = class SunburstLevels {
};
SunburstLevels = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}sunburst-levels`),
    generateBindables('levels', ['groupMemberPath'])
], SunburstLevels);
export { SunburstLevels };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejSymbolPalette = class ejSymbolPalette extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejSymbolPalette = __decorate([
    customElement(`${constants.elementPrefix}symbol-palette`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width']),
    inject(Element)
], ejSymbolPalette);
export { ejSymbolPalette };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTab = class ejTab extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejTab = __decorate([
    customElement(`${constants.elementPrefix}tab`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejTab);
export { ejTab };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTagCloud = class ejTagCloud extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejTagCloud = __decorate([
    customElement(`${constants.elementPrefix}tag-cloud`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejTagCloud);
export { ejTagCloud };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTile = class ejTile extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejTile = __decorate([
    customElement(`${constants.elementPrefix}tile`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'locale', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor']),
    inject(Element)
], ejTile);
export { ejTile };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTimePicker = class ejTimePicker extends WidgetBase {
    constructor(element) {
        super();
        this.isEditor = true;
        this.element = element;
    }
};
ejTimePicker = __decorate([
    customAttribute(`${constants.attributePrefix}time-picker`),
    generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'validationMessages', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejTimePicker);
export { ejTimePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejToggleButton = class ejToggleButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejToggleButton = __decorate([
    customAttribute(`${constants.attributePrefix}toggle-button`),
    generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejToggleButton);
export { ejToggleButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejToolbar = class ejToolbar extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejToolbar = __decorate([
    customAttribute(`${constants.attributePrefix}toolbar`),
    generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejToolbar);
export { ejToolbar };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTooltip = class ejTooltip extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejTooltip = __decorate([
    customAttribute(`${constants.attributePrefix}tooltip`),
    generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejTooltip);
export { ejTooltip };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTreeGrid = class ejTreeGrid extends WidgetBase {
    constructor(element, templateEngine) {
        super();
        this.columns = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
};
__decorate([
    children(`${constants.elementPrefix}tree-grid-column`)
], ejTreeGrid.prototype, "columns", void 0);
ejTreeGrid = __decorate([
    customElement(`${constants.elementPrefix}tree-grid`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTreeGrid', ['allowColumnReordering', 'allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowPaging', 'allowSearching', 'allowSelection', 'allowSorting', 'allowTextWrap', 'altRowTemplateID', 'cellTooltipTemplate', 'childMapping', 'collapsibleTotalSummary', 'columnDialogFields', 'columnResizeSettings', 'columns', 'commonWidth', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'detailsRowHeight', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableLoadOnDemand', 'enableResize', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'headerTextOverflow', 'idMapping', 'isResponsive', 'locale', 'pageSettings', 'parentIdMapping', 'parseRowTemplate', 'query', 'rowHeight', 'rowTemplateID', 'searchSettings', 'selectedCellIndexes', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnOptions', 'showDetailsRow', 'showDetailsRowInfoColumn', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showStackedHeader', 'showSummaryRow', 'showTotalSummary', 'sizeSettings', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings', 'totalSummaryHeight', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], { 'altRowTemplateID': ['altRowTemplateId'], 'rowTemplateID': ['rowTemplateId'] }, ['dataSource']),
    inject(Element, TemplatingEngine)
], ejTreeGrid);
export { ejTreeGrid };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TreeGridColumn = class TreeGridColumn {
    constructor() {
        this.angularTemplate = [];
    }
    setTemplates() {
        if (this.angularTemplate[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
        }
    }
};
__decorate([
    children(`${constants.elementPrefix}template`)
], TreeGridColumn.prototype, "angularTemplate", void 0);
TreeGridColumn = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}tree-grid-column`),
    generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] })
], TreeGridColumn);
export { TreeGridColumn };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Level = class Level {
};
Level = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}level`),
    generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'textOverflow', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])
], Level);
export { Level };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTreeMap = class ejTreeMap extends WidgetBase {
    constructor(element) {
        super();
        this.levels = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'levels';
    }
};
__decorate([
    children(`${constants.elementPrefix}level`)
], ejTreeMap.prototype, "levels", void 0);
ejTreeMap = __decorate([
    customElement(`${constants.elementPrefix}tree-map`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'colorPath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource', 'header', 'enableDrillDown', 'drillDownValue', 'drillDownLevel', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'enableGroupSeparator', 'locale', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'], {}, ['dataSource']),
    inject(Element)
], ejTreeMap);
export { ejTreeMap };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejTreeView = class ejTreeView extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejTreeView = __decorate([
    customAttribute(`${constants.attributePrefix}tree-view`),
    generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejTreeView);
export { ejTreeView };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejUploadbox = class ejUploadbox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejUploadbox = __decorate([
    customElement(`${constants.elementPrefix}uploadbox`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], { 'enableRTL': ['enableRtl'] }),
    inject(Element)
], ejUploadbox);
export { ejUploadbox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ejWaitingPopup = class ejWaitingPopup extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejWaitingPopup = __decorate([
    customAttribute(`${constants.attributePrefix}waiting-popup`),
    generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text']),
    inject(Element)
], ejWaitingPopup);
export { ejWaitingPopup };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Accordion } from '@syncfusion/ej2-navigations';
let Ej2Accordion = class Ej2Accordion extends Ej2WidgetBase {
    constructor(element) {
        super(Accordion);
        this.element = element;
    }
};
Ej2Accordion = __decorate([
    customElement(`${constants.ej2ElementPrefix}accordion`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Accordion', ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'], [], null, null),
    inject(Element)
], Ej2Accordion);
export { Ej2Accordion };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
let Ej2AutoComplete = class Ej2AutoComplete extends Ej2WidgetBase {
    constructor(element) {
        super(AutoComplete);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2AutoComplete = __decorate([
    customElement(`${constants.ej2AttributePrefix}auto-complete`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'AutoComplete', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2AutoComplete);
export { Ej2AutoComplete };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Button } from '@syncfusion/ej2-buttons';
let ej2Button = class ej2Button extends Ej2WidgetBase {
    constructor(element) {
        super(Button);
        this.element = element;
    }
};
ej2Button = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}button`),
    generateBindables(constants.ej2AttributePrefix + 'Button', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'], [], null, null),
    inject(Element)
], ej2Button);
export { ej2Button };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Chart, Category, Legend, Tooltip, StackingLineSeries, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries } from '@syncfusion/ej2-charts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries);
let ej2Chart = class ej2Chart extends Ej2WidgetBase {
    constructor(element) {
        super(Chart);
        this.series = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'series';
    }
};
__decorate([
    children(`e-series`)
], ej2Chart.prototype, "series", void 0);
ej2Chart = __decorate([
    customElement(`${constants.ej2ElementPrefix}chart`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Chart', ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'], [], [], null),
    inject(Element)
], ej2Chart);
export { ej2Chart };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SeriesVM = class SeriesVM {
};
SeriesVM = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`e-series`),
    generateBindables('series', ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'], [], null, null)
], SeriesVM);
export { SeriesVM };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CheckBox } from '@syncfusion/ej2-buttons';
let Ej2CheckBox = class Ej2CheckBox extends Ej2WidgetBase {
    constructor(element) {
        super(CheckBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2CheckBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}check-box`),
    generateBindables(constants.ej2ElementPrefix + 'CheckBox', ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'], ['checked', 'indeterminate'], null, null),
    inject(Element)
], Ej2CheckBox);
export { Ej2CheckBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChipList } from '@syncfusion/ej2-buttons';
let ej2ChipList = class ej2ChipList extends Ej2WidgetBase {
    constructor(element) {
        super(ChipList);
        this.chips = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'chips';
    }
};
__decorate([
    children(`e-chips`)
], ej2ChipList.prototype, "chips", void 0);
ej2ChipList = __decorate([
    customElement(`${constants.ej2ElementPrefix}chip-list`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'ChipList', ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'], [], [], null),
    inject(Element)
], ej2ChipList);
export { ej2ChipList };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Chips = class Chips {
};
Chips = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`e-chip`),
    generateBindables('chips', ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'], [], null, null)
], Chips);
export { Chips };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ColorPicker } from '@syncfusion/ej2-inputs';
let Ej2ColorPicker = class Ej2ColorPicker extends Ej2WidgetBase {
    constructor(element) {
        super(ColorPicker);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2ColorPicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}color-picker`),
    generateBindables(constants.ej2ElementPrefix + 'ColorPicker', ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'], ['value'], null, null),
    inject(Element)
], Ej2ColorPicker);
export { Ej2ColorPicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ComboBox } from '@syncfusion/ej2-dropdowns';
let Ej2ComboBox = class Ej2ComboBox extends Ej2WidgetBase {
    constructor(element) {
        super(ComboBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2ComboBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}combo-box`),
    generateBindables(constants.ej2ElementPrefix + 'ComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2ComboBox);
export { Ej2ComboBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextMenu } from '@syncfusion/ej2-navigations';
let ej2ContextMenu = class ej2ContextMenu extends Ej2WidgetBase {
    constructor(element) {
        super(ContextMenu);
        this.element = element;
    }
};
ej2ContextMenu = __decorate([
    customElement(`${constants.ej2ElementPrefix}context-menu`),
    inlineView("<template><ul></ul></template>"),
    generateBindables(constants.ej2ElementPrefix + 'ContextMenu', ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'], [], null, null),
    inject(Element)
], ej2ContextMenu);
export { ej2ContextMenu };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DatePicker } from '@syncfusion/ej2-calendars';
let Ej2DatePicker = class Ej2DatePicker extends Ej2WidgetBase {
    constructor(element) {
        super(DatePicker);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2DatePicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}date-picker`),
    generateBindables(constants.ej2ElementPrefix + 'DatePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2DatePicker);
export { Ej2DatePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DateRangePicker } from '@syncfusion/ej2-calendars';
let ej2DateRangePicker = class ej2DateRangePicker extends Ej2WidgetBase {
    constructor(element) {
        super(DateRangePicker);
        this.isEditor = true;
        this.element = element;
    }
};
ej2DateRangePicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}date-range-picker`),
    generateBindables(constants.ej2ElementPrefix + 'DateRangePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex'], ['startDate', 'endDate', 'value'], null, null),
    inject(Element)
], ej2DateRangePicker);
export { ej2DateRangePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DateTimePicker } from '@syncfusion/ej2-calendars';
let ej2DateTimePicker = class ej2DateTimePicker extends Ej2WidgetBase {
    constructor(element) {
        super(DateTimePicker);
        this.isEditor = true;
        this.element = element;
    }
};
ej2DateTimePicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}date-time-picker`),
    generateBindables(constants.ej2ElementPrefix + 'DateTimePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], ej2DateTimePicker);
export { ej2DateTimePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Diagram, DataBinding, HierarchicalTree } from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding, HierarchicalTree);
let ej2Diagram = class ej2Diagram extends Ej2WidgetBase {
    constructor(element) {
        super(Diagram);
        this.element = element;
    }
};
ej2Diagram = __decorate([
    customElement(`${constants.ej2ElementPrefix}diagram`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Diagram', ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'], null, null, null),
    inject(Element)
], ej2Diagram);
export { ej2Diagram };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
let ej2DropDownButton = class ej2DropDownButton extends Ej2WidgetBase {
    constructor(element) {
        super(DropDownButton);
        this.element = element;
    }
};
ej2DropDownButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}drop-down-button`),
    generateBindables(constants.ej2ElementPrefix + 'DropDownButton', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'], [], null, null),
    inject(Element)
], ej2DropDownButton);
export { ej2DropDownButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DropDownList } from '@syncfusion/ej2-dropdowns';
let Ej2DropDownList = class Ej2DropDownList extends Ej2WidgetBase {
    constructor(element) {
        super(DropDownList);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2DropDownList = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}drop-down-list`),
    generateBindables(constants.ej2ElementPrefix + 'DropDownList', ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2DropDownList);
export { Ej2DropDownList };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Ej2Column = class Ej2Column {
    constructor() {
        this.template = [];
    }
    setTemplates() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
};
__decorate([
    children(`${constants.ej2ElementPrefix}template`)
], Ej2Column.prototype, "template", void 0);
Ej2Column = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.ej2ElementPrefix}column`),
    generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'], [], null, null)
], Ej2Column);
export { Ej2Column };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Grid, Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-grids';
Grid.Inject(Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit);
let Ej2Grid = class Ej2Grid extends Ej2WidgetBase {
    constructor(element, templateEngine) {
        super(Grid);
        this.columns = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new Ej2TemplateProcessor(this, templateEngine);
    }
};
__decorate([
    children(`${constants.ej2ElementPrefix}column`)
], Ej2Grid.prototype, "columns", void 0);
Ej2Grid = __decorate([
    customElement(`${constants.ej2ElementPrefix}grid`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Grid', ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'], [], null, null),
    inject(Element, TemplatingEngine)
], Ej2Grid);
export { Ej2Grid };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let ej2LinearGauge = class ej2LinearGauge extends Ej2WidgetBase {
    constructor(element) {
        super(LinearGauge);
        this.element = element;
    }
};
ej2LinearGauge = __decorate([
    customElement(`${constants.ej2ElementPrefix}linear-gauge`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'LinearGauge', ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'], [], [], null),
    inject(Element)
], ej2LinearGauge);
export { ej2LinearGauge };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ListBox, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
ListBox.Inject(CheckBoxSelection);
let Ej2ListBox = class Ej2ListBox extends Ej2WidgetBase {
    constructor(element) {
        super(ListBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2ListBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}list-box`),
    generateBindables(constants.ej2ElementPrefix + 'ListBox', ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2ListBox);
export { Ej2ListBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
let ej2MaskEdit = class ej2MaskEdit extends Ej2WidgetBase {
    constructor(element) {
        super(MaskedTextBox);
        this.isEditor = true;
        this.element = element;
    }
};
ej2MaskEdit = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}mask-edit`),
    generateBindables(constants.ej2AttributePrefix + 'MaskEdit', ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'readonly', 'showClearButton', 'value', 'width'], ['value'], [], null),
    inject(Element)
], ej2MaskEdit);
export { ej2MaskEdit };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Menu } from '@syncfusion/ej2-navigations';
let ej2Menu = class ej2Menu extends Ej2WidgetBase {
    constructor(element) {
        super(Menu);
        this.element = element;
    }
};
ej2Menu = __decorate([
    customElement(`${constants.ej2ElementPrefix}menu`),
    inlineView("<template><ul></ul></template>"),
    generateBindables(constants.ej2ElementPrefix + 'Menu', ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title'], [], null, null),
    inject(Element)
], ej2Menu);
export { ej2Menu };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
let Ej2MultiSelect = class Ej2MultiSelect extends Ej2WidgetBase {
    constructor(element) {
        super(MultiSelect);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2MultiSelect = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}multi-select`),
    generateBindables(constants.ej2ElementPrefix + 'MultiSelect', ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2MultiSelect);
export { Ej2MultiSelect };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NumericTextBox } from '@syncfusion/ej2-inputs';
let Ej2NumericTextBox = class Ej2NumericTextBox extends Ej2WidgetBase {
    constructor(element) {
        super(NumericTextBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2NumericTextBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}numeric-text-box`),
    generateBindables(constants.ej2ElementPrefix + 'NumericTextBox', ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'], ['value'], null, null),
    inject(Element)
], Ej2NumericTextBox);
export { Ej2NumericTextBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Overview } from '@syncfusion/ej2-diagrams';
let ej2Overview = class ej2Overview extends Ej2WidgetBase {
    constructor(element) {
        super(Overview);
        this.element = element;
    }
};
ej2Overview = __decorate([
    customElement(`${constants.ej2ElementPrefix}overview`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Overview', ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'], [], { 'sourceID': ['sourceId'] }, null),
    inject(Element)
], ej2Overview);
export { ej2Overview };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PdfViewer, Toolbar as PdfToolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(PdfToolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation);
let ej2PdfViewer = class ej2PdfViewer extends Ej2WidgetBase {
    constructor(element) {
        super(PdfViewer);
        this.element = element;
    }
};
ej2PdfViewer = __decorate([
    customElement(`${constants.ej2ElementPrefix}pdf-viewer`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'PdfViewer', ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotationToolbarSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'customStampItems', 'customStampSettings', 'distanceSettings', 'documentPath', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableMagnification', 'enableMeasureAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'lineSettings', 'locale', 'measurementSettings', 'perimeterSettings', 'polygonSettings', 'radiusSettings', 'rectangleSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode'], [], [], null),
    inject(Element)
], ej2PdfViewer);
export { ej2PdfViewer };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';
let ej2ProgressButton = class ej2ProgressButton extends Ej2WidgetBase {
    constructor(element) {
        super(ProgressButton);
        this.element = element;
    }
};
ej2ProgressButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}progress-button`),
    generateBindables(constants.ej2ElementPrefix + 'ProgressButton', ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'], [], null, null),
    inject(Element)
], ej2ProgressButton);
export { ej2ProgressButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RadioButton } from '@syncfusion/ej2-buttons';
let Ej2RadioButton = class Ej2RadioButton extends Ej2WidgetBase {
    constructor(element) {
        super(RadioButton);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2RadioButton = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}radio-button`),
    generateBindables(constants.ej2ElementPrefix + 'RadioButton', ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'], ['checked'], null, null),
    inject(Element)
], Ej2RadioButton);
export { Ej2RadioButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RichTextEditor, Toolbar as rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table);
let ej2Rte = class ej2Rte extends Ej2WidgetBase {
    constructor(element) {
        super(RichTextEditor);
        this.element = element;
    }
};
ej2Rte = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}rte`),
    generateBindables(constants.ej2ElementPrefix + 'RTE', ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'], [], null, null),
    inject(Element)
], ej2Rte);
export { ej2Rte };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Schedule, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);
let ej2Schedule = class ej2Schedule extends Ej2WidgetBase {
    constructor(element) {
        super(Schedule);
        this.element = element;
    }
};
ej2Schedule = __decorate([
    customElement(`${constants.ej2ElementPrefix}schedule`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Schedule', ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours'], [], null, null),
    inject(Element)
], ej2Schedule);
export { ej2Schedule };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Sidebar } from '@syncfusion/ej2-navigations';
let ej2Sidebar = class ej2Sidebar extends Ej2WidgetBase {
    constructor(element) {
        super(Sidebar);
        this.element = element;
    }
};
ej2Sidebar = __decorate([
    customElement(`${constants.ej2ElementPrefix}sidebar`),
    inlineView(constants.aureliaTemplateString),
    generateBindables(constants.ej2ElementPrefix + 'Sidebar', ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'], [], null, null),
    inject(Element)
], ej2Sidebar);
export { ej2Sidebar };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Slider } from '@syncfusion/ej2-inputs';
let Ej2Slider = class Ej2Slider extends Ej2WidgetBase {
    constructor(element) {
        super(Slider);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Slider = __decorate([
    customElement(`${constants.ej2ElementPrefix}slider`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Slider', ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'], ['value'], null, null),
    inject(Element)
], Ej2Slider);
export { Ej2Slider };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SplitButton } from '@syncfusion/ej2-splitbuttons';
let ej2SplitButton = class ej2SplitButton extends Ej2WidgetBase {
    constructor(element) {
        super(SplitButton);
        this.element = element;
    }
};
ej2SplitButton = __decorate([
    customElement(`${constants.ej2AttributePrefix}split-button`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'SplitButton', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'], [], null, null),
    inject(Element)
], ej2SplitButton);
export { ej2SplitButton };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Switch } from '@syncfusion/ej2-buttons';
let Ej2Switch = class Ej2Switch extends Ej2WidgetBase {
    constructor(element) {
        super(Switch);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Switch = __decorate([
    customElement(`${constants.ej2ElementPrefix}switch`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Switch', ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'], ['checked'], null, null),
    inject(Element)
], Ej2Switch);
export { Ej2Switch };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Tab } from '@syncfusion/ej2-navigations';
let ej2Tab = class ej2Tab extends Ej2WidgetBase {
    constructor(element) {
        super(Tab);
        this.element = element;
    }
};
ej2Tab = __decorate([
    customElement(`${constants.ej2ElementPrefix}tab`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Tab', ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'], [], [], null),
    inject(Element)
], ej2Tab);
export { ej2Tab };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TextBox } from '@syncfusion/ej2-inputs';
let Ej2TextBox = class Ej2TextBox extends Ej2WidgetBase {
    constructor(element) {
        super(TextBox);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2TextBox = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}text-box`),
    generateBindables(constants.ej2ElementPrefix + 'TextBox', ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'], ['value'], null, null),
    inject(Element)
], Ej2TextBox);
export { Ej2TextBox };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimePicker } from '@syncfusion/ej2-calendars';
let Ej2TimePicker = class Ej2TimePicker extends Ej2WidgetBase {
    constructor(element) {
        super(TimePicker);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2TimePicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}time-picker`),
    generateBindables(constants.ej2ElementPrefix + 'TimePicker', ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'], ['value'], null, null),
    inject(Element)
], Ej2TimePicker);
export { Ej2TimePicker };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Toast } from '@syncfusion/ej2-notifications';
let ej2Toast = class ej2Toast extends Ej2WidgetBase {
    constructor(element) {
        super(Toast);
        this.element = element;
    }
};
ej2Toast = __decorate([
    customElement(`${constants.ej2ElementPrefix}toast`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Toast', ['animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'], null, null, null),
    inject(Element)
], ej2Toast);
export { ej2Toast };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Ej2Items = class Ej2Items {
};
Ej2Items = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`e-item`),
    generateBindables('items', ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'], [], null, null)
], Ej2Items);
export { Ej2Items };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Toolbar as ToolbarAlias } from '@syncfusion/ej2-navigations';
let Ej2Toolbar = class Ej2Toolbar extends Ej2WidgetBase {
    constructor(element) {
        super(ToolbarAlias);
        this.items = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
    }
};
__decorate([
    children(`e-items`)
], Ej2Toolbar.prototype, "items", void 0);
Ej2Toolbar = __decorate([
    customElement(`${constants.ej2ElementPrefix}toolbar`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Toolbar', ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'], [], null, null),
    inject(Element)
], Ej2Toolbar);
export { Ej2Toolbar };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Uploader } from '@syncfusion/ej2-inputs';
let Ej2Uploader = class Ej2Uploader extends Ej2WidgetBase {
    constructor(element) {
        super(Uploader);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Uploader = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}uploader`),
    generateBindables(constants.ej2ElementPrefix + 'Uploader', ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'], [], null, null),
    inject(Element)
], Ej2Uploader);
export { Ej2Uploader };
