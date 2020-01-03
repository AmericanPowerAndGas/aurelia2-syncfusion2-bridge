'use strict';

exports.__esModule = true;
exports.ej2Tab = exports.ej2Rte = exports.ej2PdfViewer = exports.ej2Overview = exports.ej2LinearGauge = exports.Ej2Grid = exports.Ej2Column = exports.ej2Diagram = exports.ej2DateTimePicker = exports.Ej2DatePicker = exports.SeriesVM = exports.ej2Chart = exports.Ej2Accordion = exports.ejWaitingPopup = exports.ejTreeView = exports.ejUploadbox = undefined;
exports.ejTreeMap = exports.Level = exports.TreeGridColumn = exports.ejTreeGrid = exports.ejTooltip = exports.ejToolbar = exports.ejToggleButton = exports.ejTimePicker = exports.ejTile = exports.ejTagCloud = exports.ejTab = exports.ejSymbolPalette = exports.SunburstLevels = exports.ejSunburstChart = exports.ejSpreadsheet = exports.Sheet = exports.ejSplitter = exports.ejSplitButton = exports.ejSpellCheck = exports.ejSparkline = exports.ejSlider = exports.ejSignature = exports.ejScroller = exports.ejRte = exports.ScheduleResource = exports.ejSchedule = exports.ejRotator = exports.ejRibbon = exports.ejReportViewer = exports.ejRating = exports.RangeSeries = exports.ejRangeNavigator = exports.ejRadioButton = exports.ejRadialSlider = exports.ejRadialMenu = exports.Item = exports.ejProgressBar = exports.ejPivotTreeMap = exports.ejPivotSchemaDesigner = exports.ejPivotGrid = exports.ejPivotGauge = exports.ejPivotChart = exports.ejPercentageTextbox = exports.ejPdfViewer = exports.ejOverview = exports.ejPager = exports.ejNumericTextbox = exports.ejNavigationDrawer = exports.ejMenu = exports.ejMaskEdit = exports.ejMap = exports.Layer = exports.ejListView = exports.ejListBox = exports.ejLinearGauge = exports.KanbanColumn = exports.ejKanban = exports.ejHeatMapLegend = exports.ejHeatMap = exports.ejGrid = exports.Column = exports.ejGroupButton = exports.ejGantt = exports.ejFileExplorer = exports.ejDropDownList = exports.ejDigitalGauge = exports.ejDialog = exports.ejDiagram = exports.ejDateTimePicker = exports.ejDateRangePicker = exports.ejCurrencyTextbox = exports.ejDatePicker = exports.WidgetBase = exports.Util = exports.Template = exports.TemplateProcessor = exports.Ej2WidgetBase = exports.Ej2Template = exports.Ej2TemplateProcessor = exports.constants = exports.TemplatingEngine = exports.children = exports.customElement = exports.inlineView = exports.inject = exports.bindable = exports.customAttribute = exports.ejComboBox = exports.ejColorPicker = exports.ejCheckBox = exports.ejCircularGauge = exports.Series = exports.ejChart = exports.ejButton = exports.QualitativeRange = exports.ejBulletGraph = exports.ejBarcode = exports.ejAutocomplete = exports.ejAccordion = exports.EjConfigBuilder = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.delayed = delayed;
exports.getEventOption = getEventOption;
exports.fireEvent = fireEvent;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaBinding = require('aurelia-binding');

var _ej2Navigations = require('@syncfusion/ej2-navigations');

var _ej2Charts = require('@syncfusion/ej2-charts');

var _ej2Calendars = require('@syncfusion/ej2-calendars');

var _ej2Diagrams = require('@syncfusion/ej2-diagrams');

var _ej2Grids = require('@syncfusion/ej2-grids');

var _ej2Lineargauge = require('@syncfusion/ej2-lineargauge');

var _ej2Pdfviewer = require('@syncfusion/ej2-pdfviewer');

var _ej2Richtexteditor = require('@syncfusion/ej2-richtexteditor');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EjConfigBuilder = exports.EjConfigBuilder = function () {
    function EjConfigBuilder() {
        _classCallCheck(this, EjConfigBuilder);

        this.resources = [];
        this.useGlobalResources = true;
    }

    EjConfigBuilder.prototype.useAll = function useAll() {
        this.ejGrid().ejChart().ejSunburstChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejHeatMap().ejHeatMapLegend().ejSparkline().ejSymbolPalette().ejOverview().ejPager().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejComboBox().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejDateRangePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejPivotTreeMap().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejSignature().ejTooltip().ejSpellCheck().ejTemplate().ej2Template().ej2DatePicker().ej2Accordion().ej2Grid().ej2DateTimePicker().ej2Diagram().ej2Overview().ej2RTE().ej2Tab().ej2PdfViewer().ej2LinearGauge().ej2Chart();
        return this;
    };

    EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
        this.useGlobalResources = false;
        return this;
    };

    EjConfigBuilder.prototype.ejGrid = function ejGrid() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/column'));
        return this;
    };

    EjConfigBuilder.prototype.ejChart = function ejChart() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/chart'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/series'));
        return this;
    };

    EjConfigBuilder.prototype.ejSunburstChart = function ejSunburstChart() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstchart'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
        return this;
    };

    EjConfigBuilder.prototype.ejMap = function ejMap() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/map'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/layer'));
        return this;
    };

    EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/treemap'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/level'));
        return this;
    };

    EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangenavigator'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangeseries'));
        return this;
    };

    EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./diagram/diagram'));
        return this;
    };

    EjConfigBuilder.prototype.ejHeatMap = function ejHeatMap() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmap/heatmap'));
        return this;
    };

    EjConfigBuilder.prototype.ejHeatMapLegend = function ejHeatMapLegend() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
        return this;
    };

    EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./sparkline/sparkline'));
        return this;
    };

    EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./symbolpalette/symbolpalette'));
        return this;
    };

    EjConfigBuilder.prototype.ejOverview = function ejOverview() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./overview/overview'));
        return this;
    };

    EjConfigBuilder.prototype.ejPager = function ejPager() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pager/pager'));
        return this;
    };

    EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/bulletgraph'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/qualitativerange'));
        return this;
    };

    EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./circulargauge/circulargauge'));
        return this;
    };

    EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./lineargauge/lineargauge'));
        return this;
    };

    EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./digitalgauge/digitalgauge'));
        return this;
    };

    EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitter/splitter'));
        return this;
    };

    EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ejGantt = function ejGantt() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./gantt/gantt'));
        return this;
    };

    EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegrid'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegridcolumn'));
        return this;
    };

    EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./colorpicker/colorpicker'));
        return this;
    };

    EjConfigBuilder.prototype.ejDialog = function ejDialog() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
        return this;
    };

    EjConfigBuilder.prototype.ejScroller = function ejScroller() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./scroller/scroller'));
        return this;
    };

    EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./barcode/barcode'));
        return this;
    };

    EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pdfviewer/pdfviewer'));
        return this;
    };

    EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./numerictextbox/numerictextbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./currencytextbox/currencytextbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./timepicker/timepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));
        return this;
    };

    EjConfigBuilder.prototype.ejMenu = function ejMenu() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./menu/menu'));
        return this;
    };

    EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./maskedit/maskedit'));
        return this;
    };

    EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./treeview/treeview'));
        return this;
    };

    EjConfigBuilder.prototype.ejKanban = function ejKanban() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanban'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanbancolumn'));
        return this;
    };

    EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ribbon/ribbon'));
        return this;
    };

    EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/spreadsheet'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/sheet'));
        return this;
    };

    EjConfigBuilder.prototype.ejRating = function ejRating() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./rating/rating'));
        return this;
    };

    EjConfigBuilder.prototype.ejListBox = function ejListBox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./listbox/listbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejListView = function ejListView() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./listview/listview'));
        return this;
    };

    EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
        return this;
    };

    EjConfigBuilder.prototype.ejRotator = function ejRotator() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./rotator/rotator'));
        return this;
    };

    EjConfigBuilder.prototype.ejRTE = function ejRTE() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./rte/rte'));
        return this;
    };

    EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./dropdownlist/dropdownlist'));
        return this;
    };

    EjConfigBuilder.prototype.ejComboBox = function ejComboBox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./combobox/combobox'));
        return this;
    };

    EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
        return this;
    };

    EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/radialmenu'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/item'));
        return this;
    };

    EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialslider/radialslider'));
        return this;
    };

    EjConfigBuilder.prototype.ejTile = function ejTile() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./tile/tile'));
        return this;
    };

    EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./accordion/accordion'));
        return this;
    };

    EjConfigBuilder.prototype.ejTab = function ejTab() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./tab/tab'));
        return this;
    };

    EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./radiobutton/radiobutton'));
        return this;
    };

    EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./togglebutton/togglebutton'));
        return this;
    };

    EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitbutton/splitbutton'));
        return this;
    };

    EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./groupbutton/groupbutton'));
        return this;
    };

    EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./datetimepicker/datetimepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ejDateRangePicker = function ejDateRangePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./daterangepicker/daterangepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./progressbar/progressbar'));
        return this;
    };

    EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./tagcloud/tagcloud'));
        return this;
    };

    EjConfigBuilder.prototype.ejButton = function ejButton() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
        return this;
    };

    EjConfigBuilder.prototype.ejSlider = function ejSlider() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));
        return this;
    };

    EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./fileexplorer/fileexplorer'));
        return this;
    };

    EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgrid/pivotgrid'));
        return this;
    };

    EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotchart/pivotchart'));
        return this;
    };

    EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgauge/pivotgauge'));
        return this;
    };

    EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
        return this;
    };

    EjConfigBuilder.prototype.ejPivotTreeMap = function ejPivotTreeMap() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivottreemap/pivottreemap'));
        return this;
    };

    EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./waitingpopup/waitingpopup'));
        return this;
    };

    EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./reportviewer/reportviewer'));
        return this;
    };

    EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/schedule'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/scheduleresource'));
        return this;
    };

    EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./uploadbox/uploadbox'));
        return this;
    };

    EjConfigBuilder.prototype.ejSignature = function ejSignature() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./signature/signature'));
        return this;
    };

    EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
        return this;
    };

    EjConfigBuilder.prototype.ejSpellCheck = function ejSpellCheck() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./spellcheck/spellcheck'));
        return this;
    };

    EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/template'));
        return this;
    };

    EjConfigBuilder.prototype.ej2DatePicker = function ej2DatePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/datepicker/datepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Accordion = function ej2Accordion() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/accordion/accordion'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Grid = function ej2Grid() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/grid/grid'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/grid/column'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Template = function ej2Template() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/ej2-template'));
        return this;
    };

    EjConfigBuilder.prototype.ej2DateTimePicker = function ej2DateTimePicker() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/datetimepicker/datetimepicker'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Diagram = function ej2Diagram() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/diagram/diagram'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Overview = function ej2Overview() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/overview/overview'));
        return this;
    };

    EjConfigBuilder.prototype.ej2RTE = function ej2RTE() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/rte/rte'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Tab = function ej2Tab() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/tab/tab'));
        return this;
    };

    EjConfigBuilder.prototype.ej2PdfViewer = function ej2PdfViewer() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/pdfviewer/pdfviewer'));
        return this;
    };

    EjConfigBuilder.prototype.ej2LinearGauge = function ej2LinearGauge() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/lineargauge/lineargauge'));
        return this;
    };

    EjConfigBuilder.prototype.ej2Chart = function ej2Chart() {
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/chart/chart'));
        this.resources.push(_aureliaPal.PLATFORM.moduleName('./ej2/chart/series'));
        return this;
    };

    return EjConfigBuilder;
}();

function configure(aurelia, configCallback) {
    var builder = new EjConfigBuilder();
    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(builder);
    }
    var resources = builder.resources;
    if (builder.useGlobalResources) {
        aurelia.globalResources(resources);
    }
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejAccordion = function (_WidgetBase) {
    _inherits(ejAccordion, _WidgetBase);

    function ejAccordion(element) {
        _classCallCheck(this, ejAccordion);

        var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

        _this.element = element;
        return _this;
    }

    return ejAccordion;
}(WidgetBase);
exports.ejAccordion = ejAccordion = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'accordion'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejAccordion);
exports.ejAccordion = ejAccordion;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejAutocomplete = function (_WidgetBase2) {
    _inherits(ejAutocomplete, _WidgetBase2);

    function ejAutocomplete(element) {
        _classCallCheck(this, ejAutocomplete);

        var _this2 = _possibleConstructorReturn(this, _WidgetBase2.call(this));

        _this2.element = element;
        return _this2;
    }

    return ejAutocomplete;
}(WidgetBase);
exports.ejAutocomplete = ejAutocomplete = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'autocomplete'), generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'ignoreAccent', 'locale', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejAutocomplete);
exports.ejAutocomplete = ejAutocomplete;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejBarcode = function (_WidgetBase3) {
    _inherits(ejBarcode, _WidgetBase3);

    function ejBarcode(element) {
        _classCallCheck(this, ejBarcode);

        var _this3 = _possibleConstructorReturn(this, _WidgetBase3.call(this));

        _this3.element = element;
        return _this3;
    }

    return ejBarcode;
}(WidgetBase);
exports.ejBarcode = ejBarcode = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'barcode'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension']), (0, _aureliaDependencyInjection.inject)(Element)], ejBarcode);
exports.ejBarcode = ejBarcode;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejBulletGraph = function (_WidgetBase4) {
    _inherits(ejBulletGraph, _WidgetBase4);

    function ejBulletGraph(element) {
        _classCallCheck(this, ejBulletGraph);

        var _this4 = _possibleConstructorReturn(this, _WidgetBase4.call(this));

        _this4.qualitativeRanges = [];
        _this4.element = element;
        _this4.hasChildProperty = true;
        _this4.childPropertyName = 'qualitativeRanges';
        return _this4;
    }

    return ejBulletGraph;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'qualitative-range')], ejBulletGraph.prototype, "qualitativeRanges", void 0);
exports.ejBulletGraph = ejBulletGraph = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'bullet-graph'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'enableResizing', 'flowDirection', 'height', 'isResponsive', 'enableGroupSeparator', 'locale', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width']), (0, _aureliaDependencyInjection.inject)(Element)], ejBulletGraph);
exports.ejBulletGraph = ejBulletGraph;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var QualitativeRange = function QualitativeRange() {
    _classCallCheck(this, QualitativeRange);
};
exports.QualitativeRange = QualitativeRange = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'qualitative-range'), generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])], QualitativeRange);
exports.QualitativeRange = QualitativeRange;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejButton = function (_WidgetBase5) {
    _inherits(ejButton, _WidgetBase5);

    function ejButton(element) {
        _classCallCheck(this, ejButton);

        var _this5 = _possibleConstructorReturn(this, _WidgetBase5.call(this));

        _this5.element = element;
        return _this5;
    }

    return ejButton;
}(WidgetBase);
exports.ejButton = ejButton = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'button'), generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejButton);
exports.ejButton = ejButton;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejChart = function (_WidgetBase6) {
    _inherits(ejChart, _WidgetBase6);

    function ejChart(element) {
        _classCallCheck(this, ejChart);

        var _this6 = _possibleConstructorReturn(this, _WidgetBase6.call(this));

        _this6.series = [];
        _this6.element = element;
        _this6.hasChildProperty = true;
        _this6.childPropertyName = 'series';
        return _this6;
    }

    return ejChart;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'series')], ejChart.prototype, "series", void 0);
exports.ejChart = ejChart = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'chart'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming']), (0, _aureliaDependencyInjection.inject)(Element)], ejChart);
exports.ejChart = ejChart;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Series = function Series() {
    _classCallCheck(this, Series);
};
exports.Series = Series = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'series'), generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings'])], Series);
exports.Series = Series;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejCircularGauge = function (_WidgetBase7) {
    _inherits(ejCircularGauge, _WidgetBase7);

    function ejCircularGauge(element) {
        _classCallCheck(this, ejCircularGauge);

        var _this7 = _possibleConstructorReturn(this, _WidgetBase7.call(this));

        _this7.element = element;
        return _this7;
    }

    return ejCircularGauge;
}(WidgetBase);
exports.ejCircularGauge = ejCircularGauge = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'circular-gauge'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'rangeZOrder', 'enableAnimation', 'enableGroupSeparator', 'enableResize', 'exportSettings', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'locale', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'legend', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), (0, _aureliaDependencyInjection.inject)(Element)], ejCircularGauge);
exports.ejCircularGauge = ejCircularGauge;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejCheckBox = function (_WidgetBase8) {
    _inherits(ejCheckBox, _WidgetBase8);

    function ejCheckBox(element) {
        _classCallCheck(this, ejCheckBox);

        var _this8 = _possibleConstructorReturn(this, _WidgetBase8.call(this));

        _this8.element = element;
        return _this8;
    }

    return ejCheckBox;
}(WidgetBase);
exports.ejCheckBox = ejCheckBox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'check-box'), generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejCheckBox);
exports.ejCheckBox = ejCheckBox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejColorPicker = function (_WidgetBase9) {
    _inherits(ejColorPicker, _WidgetBase9);

    function ejColorPicker(element) {
        _classCallCheck(this, ejColorPicker);

        var _this9 = _possibleConstructorReturn(this, _WidgetBase9.call(this));

        _this9.element = element;
        return _this9;
    }

    return ejColorPicker;
}(WidgetBase);
exports.ejColorPicker = ejColorPicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'color-picker'), generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue']), (0, _aureliaDependencyInjection.inject)(Element)], ejColorPicker);
exports.ejColorPicker = ejColorPicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejComboBox = function (_WidgetBase10) {
    _inherits(ejComboBox, _WidgetBase10);

    function ejComboBox(element) {
        _classCallCheck(this, ejComboBox);

        var _this10 = _possibleConstructorReturn(this, _WidgetBase10.call(this));

        _this10.isEditor = true;
        _this10.element = element;
        return _this10;
    }

    return ejComboBox;
}(WidgetBase);
exports.ejComboBox = ejComboBox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'combo-box'), generateBindables('ejComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enableRtl', 'enabled', 'fields', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'width'], ['value']), (0, _aureliaDependencyInjection.inject)(Element)], ejComboBox);
exports.ejComboBox = ejComboBox;
exports.customAttribute = _aureliaTemplating.customAttribute;
exports.bindable = _aureliaTemplating.bindable;
exports.inject = _aureliaDependencyInjection.inject;
exports.inlineView = _aureliaTemplating.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
var constants = exports.constants = {
    eventPrefix: 'e-on-',
    bindablePrefix: 'e-',
    attributePrefix: 'ej-',
    elementPrefix: 'ej-',
    aureliaTemplateString: '<template><slot></slot></template>',
    ej2AttributePrefix: 'ej2-',
    ej2ElementPrefix: 'ej2-'
};

function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
    return function (target, key, descriptor) {
        var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
        var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
        var util = container.get(Util);
        var bindingInstance = container.get(_aureliaBinding.BindingEngine);
        inputs.push('options');
        inputs.push('widget');
        var len = inputs.length;
        if (observerCollection) {
            target.prototype.arrayObserver = [];
            observerCollection.forEach(function (element) {
                target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
            });
            target.prototype.bindingInstance = bindingInstance;
        }
        target.prototype.controlName = controlName;
        target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
        target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
        if (len) {
            target.prototype.controlProperties = inputs;
            for (var i = 0; i < len; i++) {
                var option = inputs[i];
                if (abbrevProperties && option in abbrevProperties) {
                    option = abbrevProperties[option];
                    option.forEach(function (prop) {
                        registerProp(util, prop, target, behaviorResource, descriptor);
                    });
                } else {
                    registerProp(util, option, target, behaviorResource, descriptor);
                }
            }
        }
    };
}
function registerProp(util, option, target, behaviorResource, descriptor) {
    var nameOrConfigOrTarget = {
        name: util.getBindablePropertyName(option)
    };
    if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
    }
    var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
    prop.registerWith(target, behaviorResource, descriptor);
}
function delayed() {
    return function (target, key, descriptor) {
        var taskQueue = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_aureliaTaskQueue.TaskQueue);
        var ptr = descriptor.value;
        descriptor.value = function () {
            var _this11 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (this.childPropertyName) {
                taskQueue.queueTask(function () {
                    return ptr.apply(_this11, args);
                });
            } else {
                ptr.apply(this, args);
            }
        };
        return descriptor;
    };
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ej2TemplateProcessor = function () {
    function Ej2TemplateProcessor(context, templateEngine) {
        _classCallCheck(this, Ej2TemplateProcessor);

        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new Util();
    }

    Ej2TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
        var _this12 = this;

        this.context.widget.queryCellInfo = function (arg) {
            if (arg.column && arg.column.template && arg.data) {
                var elements = arg.cell.children;
                for (var i = 0; i < elements.length; i++) {
                    _this12.bindView(elements[i], arg.data);
                }
            }
        };
    };

    Ej2TemplateProcessor.prototype.bindView = function bindView(element, data) {
        var view = this.templatingEngine.enhance(element);
        view.bind(data, this.context.parentCtx);
    };

    Ej2TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
        var templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (var t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    };

    Ej2TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
        for (var i = 0; i < obj.views.length; i++) {
            var view = obj.views[i];
            view.unbind();
        }
    };

    return Ej2TemplateProcessor;
}();
exports.Ej2TemplateProcessor = Ej2TemplateProcessor = __decorate([(0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, Util)], Ej2TemplateProcessor);
exports.Ej2TemplateProcessor = Ej2TemplateProcessor;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ej2Template = function Ej2Template(target) {
    _classCallCheck(this, Ej2Template);

    this.template = target.elementInstruction.template;
};
__decorate([_aureliaTemplating.bindable], Ej2Template.prototype, "template", void 0);
exports.Ej2Template = Ej2Template = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'template'), (0, _aureliaTemplating.noView)(), (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
        instruction.template = html;
    }
    element.innerHTML = '';
}), (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction)], Ej2Template);
exports.Ej2Template = Ej2Template;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Ej2WidgetBase = exports.Ej2WidgetBase = function () {
    function Ej2WidgetBase(component) {
        _classCallCheck(this, Ej2WidgetBase);

        this.component = component;
    }

    Ej2WidgetBase.prototype.createWidget = function createWidget(option) {
        var _this13 = this;

        this.allOption = this.getWidgetOptions(option.element);
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        this.eWidget = this.widget = new this.component(this.allOption);
        this.widget.appendTo(option.element);
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        if (this.isEditor || this.controlName == constants.ej2ElementPrefix + 'RTE') {
            this.widget.change = function (arg) {
                if (arg && arg.element && 'eValue' in _this13) _this13[_this13.util.getBindablePropertyName('value')] = arg.element.value;else if (arg && 'eValue' in _this13) _this13[_this13.util.getBindablePropertyName('value')] = arg.value;
            };
        }
    };

    Ej2WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.value = this.eValue === undefined ? null : this.eValue;
        }
    };

    Ej2WidgetBase.prototype.createTwoWays = function createTwoWays() {
        var model = this.allOption;
        var twoWays = this.twoWays;
        var len = twoWays.length;
        for (var i = 0; i < len; i++) {
            var prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
        }
    };

    Ej2WidgetBase.prototype.addTwoways = function addTwoways(prop) {
        var model = this;
        var value = window.firstValue;
        return function (newVal, isApp) {
            if (value === window.firstValue) {
                var viewModelProp = model.util.getBindablePropertyName(prop);
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
                var _viewModelProp = model.util.getBindablePropertyName(prop);
                model[_viewModelProp] = newVal;
            }
            return null;
        };
    };

    Ej2WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
        var propOptions = void 0;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        } else {
            propOptions = this.util.getOptions(this, this.controlProperties);
        }
        var eventOption = getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);
    };

    Ej2WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
        var PropertyName = this.childPropertyName;
        if (PropertyName == 'series') this[PropertyName] = Array.from(this.element.querySelectorAll('e-series-collection > e-series')).map(function (x) {
            return x.au.controller.viewModel;
        });
        var childCollection = this[PropertyName];
        var len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            var childProperties = childCollection[0].controlProperties;
            for (var i = 0; i < len; i++) {
                options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
        }
    };

    Ej2WidgetBase.prototype.attached = function attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(function (template) {
                return template.setTemplates();
            });
        }
        this.util = new Util();
        this.createWidget({ element: this.element });
    };

    Ej2WidgetBase.prototype.unsubscribe = function unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };

    Ej2WidgetBase.prototype.unbind = function unbind() {
        this.unsubscribe();
    };

    Ej2WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
        var _this14 = this;

        if (this.widget) {
            var modelValue = void 0;
            var prop = this.util.getControlPropertyName(this, property);
            this.unsubscribe();
            if (this.arrayObserver) {
                this.arrayObserver.forEach(function (arrayProp) {
                    if (_this14[arrayProp] instanceof Array) {
                        _this14.subscription = _this14.bindingInstance.collectionObserver(_this14[arrayProp]).subscribe(function (e) {
                            _this14.update(e);
                        });
                    }
                });
            }
            if (prop) {
                if (prop === 'widget') {
                    return;
                } else if (prop !== 'options') {
                    modelValue = this.widget[prop];
                    var isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(prop);
                        }
                        this.widget[prop] = newValue;
                    }
                } else {
                    this.widget.option(newValue);
                }
            }
        }
    };

    Ej2WidgetBase.prototype.update = function update(e) {
        var _this15 = this;

        var modelValue = void 0;
        var newVal = void 0;
        if (e.length) {
            this.arrayObserver.forEach(function (arrayProp) {
                if (_this15[arrayProp] instanceof Array) {
                    var prop = _this15.util.getControlPropertyName(_this15, arrayProp);
                    modelValue = _this15.widget.model[prop];
                    if (typeof modelValue === 'function') {
                        modelValue = modelValue();
                        newVal = modelValue;
                        newVal = _this15.addTwoways(prop);
                        _this15.widget[prop] = newVal;
                    } else {
                        _this15.widget[prop] = modelValue;
                    }
                }
            });
        }
    };

    Ej2WidgetBase.prototype.detached = function detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
        if (this.widget) {
            this.widget.destroy();
        }
    };

    return Ej2WidgetBase;
}();

__decorate([delayed()], Ej2WidgetBase.prototype, "attached", null);

function getEventOption(element) {
    var name = void 0;
    var attr = void 0;
    var attributes = element.attributes;
    var option = {};
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);

    var _loop = function _loop(i, len) {
        attr = attributes[i];
        name = attr.name;
        if (!name.startsWith(constants.eventPrefix)) {
            return 'continue';
        }
        var actualEventName = name.split('.')[0];
        var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
        option[eventName] = function (e) {
            return fireEvent(element, actualEventName, e);
        };
    };

    for (var i = 0, len = attributes.length; i < len; i++) {
        var _ret = _loop(i, len);

        if (_ret === 'continue') continue;
    }
    return option;
}
function fireEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var event = new CustomEvent(name, {
        detail: data,
        bubbles: true
    });
    element.dispatchEvent(event);
    return event;
}

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TemplateProcessor = function () {
    function TemplateProcessor(context, templateEngine) {
        _classCallCheck(this, TemplateProcessor);

        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new Util();
    }

    TemplateProcessor.prototype.initTemplate = function initTemplate() {
        var proxy = this;
        ej.template.render = function (self, selector, data, index) {
            return proxy.renderStringTemplate(self, selector, data, index);
        };
    };

    TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
        if (this.context.widget.aureliaTemplate) {
            this.compileTemplate(this.context.widget.element);
        }
        var proxy = this.context;
        var element = this.context.widget.element;
        element.on(this.context.widget.pluginName + 'refresh', function () {
            if (proxy.widget.aureliaTemplate) {
                proxy.templateProcessor.compileTemplate(element);
            }
        });
    };

    TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
        var templateObject = self.aureliaTemplate;
        if (!templateObject || !templateObject[selector]) {
            templateObject = templateObject || {};
            templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
            self.aureliaTemplate = templateObject;
        }
        var scope = templateObject[selector];
        if (this.util.hasValue(index)) {
            scope.itemData[index] = data;
        } else {
            scope.itemData = [data];
        }
        var actElement = $(selector).html();
        var tempElement = "<div ej-prop='" + index + "' class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
        return tempElement;
    };

    TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
        var templates = $(element).find('.ej-aurelia-template');
        var templateObject = this.context.widget.aureliaTemplate;
        for (var template in templateObject) {
            var tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (var i = 0; i < tmplElement.length; i++) {
                    var dataIndex = parseInt($(tmplElement[i]).attr('ej-prop'));
                    var view = this.templatingEngine.enhance(tmplElement[i]);
                    view.bind(templateObject[template].itemData[dataIndex], this.context.parentCtx);
                    templateObject[template].views[dataIndex] = view;
                }
            } else {
                this.unbindViews(templateObject[template]);
                delete templateObject[template];
            }
        }
    };

    TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
        var templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (var t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    };

    TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
        for (var i = 0; i < obj.views.length; i++) {
            var view = obj.views[i];
            view.unbind();
        }
    };

    return TemplateProcessor;
}();
exports.TemplateProcessor = TemplateProcessor = __decorate([(0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, Util)], TemplateProcessor);
exports.TemplateProcessor = TemplateProcessor;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Template = function Template(target) {
    _classCallCheck(this, Template);

    this.template = target.elementInstruction.template;
};
__decorate([_aureliaTemplating.bindable], Template.prototype, "template", void 0);
exports.Template = Template = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'template'), (0, _aureliaTemplating.noView)(), (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
        instruction.template = html;
    }
    element.innerHTML = '';
}), (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction)], Template);
exports.Template = Template;

var Util = exports.Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
        var name = '' + constants.bindablePrefix + propertyName;
        return this._unhyphenate(name);
    };

    Util.prototype._unhyphenate = function _unhyphenate(name) {
        return name.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
    };

    Util.prototype.getOptions = function getOptions(model, properties) {
        var _this16 = this;

        var bindableproperites = {};
        var value = void 0;
        for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var prop = _ref;

            if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
                model.abbrevProperties[prop].some(function (property) {
                    value = model[_this16.getBindablePropertyName(property)];
                    return _this16.hasValue(value);
                });
            } else {
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
    };

    Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
        var _this17 = this;

        var property = void 0;

        var _loop2 = function _loop2() {
            if (_isArray2) {
                if (_i2 >= _iterator2.length) return 'break';
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) return 'break';
                _ref2 = _i2.value;
            }

            var prop = _ref2;

            if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
                options.abbrevProperties[prop].some(function (props) {
                    property = propertyName === _this17.getBindablePropertyName(props) ? prop : undefined;
                    return property;
                });
                if (property) return 'break';
            } else if (propertyName === _this17.getBindablePropertyName(prop)) {
                property = prop;
                return 'break';
            }
        };

        for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            var _ret2 = _loop2();

            if (_ret2 === 'break') break;
        }
        return property;
    };

    Util.prototype.hasValue = function hasValue(prop) {
        return typeof prop !== 'undefined' && prop !== null;
    };

    Util.prototype.processData = function processData(value) {
        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        } else if (+value + '' === value) {
            return +value;
        }
        return value;
    };

    return Util;
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var firstValue = {};

var WidgetBase = exports.WidgetBase = function () {
    function WidgetBase() {
        _classCallCheck(this, WidgetBase);
    }

    WidgetBase.prototype.createWidget = function createWidget(option) {
        var _this18 = this;

        this.allOption = this.getWidgetOptions(option.element);
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        if (this.isEditor) {
            this.widget.model._change = function (evt) {
                if ('eValue' in _this18) {
                    _this18[_this18.util.getBindablePropertyName('value')] = evt.value;
                }
            };
        }
    };

    WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.option('value', this.eValue === undefined ? null : this.eValue);
        }
    };

    WidgetBase.prototype.createTwoWays = function createTwoWays() {
        var model = this.allOption;
        var twoWays = this.twoWays;
        var len = twoWays.length;
        for (var i = 0; i < len; i++) {
            var _prop = twoWays[i];
            ej.createObject(_prop, this.addTwoways(_prop), model);
        }
    };

    WidgetBase.prototype.addTwoways = function addTwoways(prop) {
        var model = this;
        var value = firstValue;
        return function (newVal, isApp) {
            if (value === firstValue) {
                var viewModelProp = model.util.getBindablePropertyName(prop);
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
                var _viewModelProp2 = model.util.getBindablePropertyName(prop);
                model[_viewModelProp2] = newVal;
            }
            return null;
        };
    };

    WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
        var propOptions = void 0;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        } else {
            propOptions = this.util.getOptions(this, this.controlProperties);
        }
        var eventOption = getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);
    };

    WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
        var PropertyName = this.childPropertyName;
        var childCollection = this[PropertyName];
        var len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            var childProperties = childCollection[0].controlProperties;
            for (var i = 0; i < len; i++) {
                options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
        }
    };

    WidgetBase.prototype.attached = function attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(function (template) {
                return template.setTemplates();
            });
        }
        this.util = new Util();
        this.createWidget({ element: this.element });
    };

    WidgetBase.prototype.unsubscribe = function unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };

    WidgetBase.prototype.unbind = function unbind() {
        this.unsubscribe();
    };

    WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
        var _this19 = this;

        if (this.widget) {
            var modelValue = void 0;
            var _prop2 = this.util.getControlPropertyName(this, property);
            this.unsubscribe();
            if (this.arrayObserver) {
                this.arrayObserver.forEach(function (arrayProp) {
                    if (_this19[arrayProp] instanceof Array) {
                        _this19.subscription = _this19.bindingInstance.collectionObserver(_this19[arrayProp]).subscribe(function (e) {
                            _this19.update(e);
                        });
                    }
                });
            }
            if (_prop2) {
                if (_prop2 === 'widget') {
                    return;
                } else if (_prop2 !== 'options') {
                    modelValue = this.widget.model[_prop2];
                    var isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(_prop2);
                        }
                        this.widget.option(_prop2, newValue);
                    }
                } else {
                    this.widget.option(newValue);
                }
            }
        }
    };

    WidgetBase.prototype.update = function update(e) {
        var _this20 = this;

        var modelValue = void 0;
        var newVal = void 0;
        if (e.length) {
            this.arrayObserver.forEach(function (arrayProp) {
                if (_this20[arrayProp] instanceof Array) {
                    var _prop3 = _this20.util.getControlPropertyName(_this20, arrayProp);
                    modelValue = _this20.widget.model[_prop3];
                    if (typeof modelValue === 'function') {
                        modelValue = modelValue();
                        newVal = modelValue;
                        newVal = _this20.addTwoways(_prop3);
                        _this20.widget.option(_prop3, newVal);
                    } else {
                        _this20.widget.option(_prop3, modelValue);
                    }
                }
            });
        }
    };

    WidgetBase.prototype.detached = function detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
        if (this.widget) {
            this.widget.destroy();
        }
    };

    return WidgetBase;
}();

__decorate([delayed()], WidgetBase.prototype, "attached", null);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDatePicker = function (_WidgetBase11) {
    _inherits(ejDatePicker, _WidgetBase11);

    function ejDatePicker(element) {
        _classCallCheck(this, ejDatePicker);

        var _this21 = _possibleConstructorReturn(this, _WidgetBase11.call(this));

        _this21.isEditor = true;
        _this21.element = element;
        return _this21;
    }

    return ejDatePicker;
}(WidgetBase);
exports.ejDatePicker = ejDatePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-picker'), generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejDatePicker);
exports.ejDatePicker = ejDatePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejCurrencyTextbox = function (_WidgetBase12) {
    _inherits(ejCurrencyTextbox, _WidgetBase12);

    function ejCurrencyTextbox(element) {
        _classCallCheck(this, ejCurrencyTextbox);

        var _this22 = _possibleConstructorReturn(this, _WidgetBase12.call(this));

        _this22.isEditor = true;
        _this22.element = element;
        return _this22;
    }

    return ejCurrencyTextbox;
}(WidgetBase);
exports.ejCurrencyTextbox = ejCurrencyTextbox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'currency-textbox'), generateBindables('ejCurrencyTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejCurrencyTextbox);
exports.ejCurrencyTextbox = ejCurrencyTextbox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDateRangePicker = function (_WidgetBase13) {
    _inherits(ejDateRangePicker, _WidgetBase13);

    function ejDateRangePicker(element) {
        _classCallCheck(this, ejDateRangePicker);

        var _this23 = _possibleConstructorReturn(this, _WidgetBase13.call(this));

        _this23.isEditor = true;
        _this23.element = element;
        return _this23;
    }

    return ejDateRangePicker;
}(WidgetBase);
exports.ejDateRangePicker = ejDateRangePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-range-picker'), generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'maxDate', 'minDate', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value']), (0, _aureliaDependencyInjection.inject)(Element)], ejDateRangePicker);
exports.ejDateRangePicker = ejDateRangePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDateTimePicker = function (_WidgetBase14) {
    _inherits(ejDateTimePicker, _WidgetBase14);

    function ejDateTimePicker(element) {
        _classCallCheck(this, ejDateTimePicker);

        var _this24 = _possibleConstructorReturn(this, _WidgetBase14.call(this));

        _this24.isEditor = true;
        _this24.element = element;
        return _this24;
    }

    return ejDateTimePicker;
}(WidgetBase);
exports.ejDateTimePicker = ejDateTimePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-time-picker'), generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'blackoutDates', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejDateTimePicker);
exports.ejDateTimePicker = ejDateTimePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDiagram = function (_WidgetBase15) {
    _inherits(ejDiagram, _WidgetBase15);

    function ejDiagram(element) {
        _classCallCheck(this, ejDiagram);

        var _this25 = _possibleConstructorReturn(this, _WidgetBase15.call(this));

        _this25.element = element;
        return _this25;
    }

    return ejDiagram;
}(WidgetBase);
exports.ejDiagram = ejDiagram = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'diagram'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor']), (0, _aureliaDependencyInjection.inject)(Element)], ejDiagram);
exports.ejDiagram = ejDiagram;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDialog = function (_WidgetBase16) {
    _inherits(ejDialog, _WidgetBase16);

    function ejDialog(element) {
        _classCallCheck(this, ejDialog);

        var _this26 = _possibleConstructorReturn(this, _WidgetBase16.call(this));

        _this26.element = element;
        return _this26;
    }

    return ejDialog;
}(WidgetBase);
exports.ejDialog = ejDialog = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'dialog'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejDialog);
exports.ejDialog = ejDialog;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDigitalGauge = function (_WidgetBase17) {
    _inherits(ejDigitalGauge, _WidgetBase17);

    function ejDigitalGauge(element) {
        _classCallCheck(this, ejDigitalGauge);

        var _this27 = _possibleConstructorReturn(this, _WidgetBase17.call(this));

        _this27.element = element;
        return _this27;
    }

    return ejDigitalGauge;
}(WidgetBase);
exports.ejDigitalGauge = ejDigitalGauge = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'digital-gauge'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejDigitalGauge', ['exportSettings', 'frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value']), (0, _aureliaDependencyInjection.inject)(Element)], ejDigitalGauge);
exports.ejDigitalGauge = ejDigitalGauge;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejDropDownList = function (_WidgetBase18) {
    _inherits(ejDropDownList, _WidgetBase18);

    function ejDropDownList(element) {
        _classCallCheck(this, ejDropDownList);

        var _this28 = _possibleConstructorReturn(this, _WidgetBase18.call(this));

        _this28.isEditor = true;
        _this28.element = element;
        return _this28;
    }

    return ejDropDownList;
}(WidgetBase);
exports.ejDropDownList = ejDropDownList = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'drop-down-list'), generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'loadOnDemand', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejDropDownList);
exports.ejDropDownList = ejDropDownList;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejFileExplorer = function (_WidgetBase19) {
    _inherits(ejFileExplorer, _WidgetBase19);

    function ejFileExplorer(element) {
        _classCallCheck(this, ejFileExplorer);

        var _this29 = _possibleConstructorReturn(this, _WidgetBase19.call(this));

        _this29.element = element;
        return _this29;
    }

    return ejFileExplorer;
}(WidgetBase);
exports.ejFileExplorer = ejFileExplorer = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'file-explorer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enablePersistence', 'enableResize', 'enableRTL', 'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'rootFolderName', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'virtualItemCount', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejFileExplorer);
exports.ejFileExplorer = ejFileExplorer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejGantt = function (_WidgetBase20) {
    _inherits(ejGantt, _WidgetBase20);

    function ejGantt(element) {
        _classCallCheck(this, ejGantt);

        var _this30 = _possibleConstructorReturn(this, _WidgetBase20.call(this));

        _this30.element = element;
        return _this30;
    }

    return ejGantt;
}(WidgetBase);
exports.ejGantt = ejGantt = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'gantt'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowDragAndDrop', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowUnscheduledTask', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'cellTooltipTemplate', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'dayWorkingTime', 'dragTooltip', 'durationMapping', 'durationUnit', 'durationUnitMapping', 'editDialogFields', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enablePredecessorValidation', 'enableProgressBarResizing', 'enableResize', 'enableSerialNumber', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'enableWBS', 'enableWBSPredecessor', 'endDateMapping', 'expandStateMapping', 'filterSettings', 'groupCollection', 'groupIdMapping', 'groupNameMapping', 'highlightNonWorkingTime', 'highlightWeekends', 'holidays', 'includeWeekend', 'isResponsive', 'leftTaskLabelMapping', 'leftTaskLabelTemplate', 'locale', 'milestoneMapping', 'milestoneTemplate', 'nonWorkingBackground', 'notesMapping', 'parentProgressbarBackground', 'parentTaskIdMapping', 'parentTaskbarBackground', 'parentTaskbarTemplate', 'predecessorMapping', 'predecessorTooltipTemplate', 'progressMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'query', 'readOnly', 'renderBaseline', 'resourceCollectionMapping', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resourceUnitMapping', 'resources', 'rightTaskLabelMapping', 'rightTaskLabelTemplate', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedCellIndexes', 'selectedRowIndex', 'selectionType', 'selectionMode', 'showColumnChooser', 'showColumnOptions', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'splitterSettings', 'startDateMapping', 'stripLines', 'taskCollectionMapping', 'taskIdMapping', 'taskNameMapping', 'taskSchedulingMode', 'taskSchedulingModeMapping', 'taskType', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTemplate', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'toolbarSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'weekendBackground', 'workMapping', 'workUnit', 'workWeek', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'], {}, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element)], ejGantt);
exports.ejGantt = ejGantt;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejGroupButton = function (_WidgetBase21) {
    _inherits(ejGroupButton, _WidgetBase21);

    function ejGroupButton(element) {
        _classCallCheck(this, ejGroupButton);

        var _this31 = _possibleConstructorReturn(this, _WidgetBase21.call(this));

        _this31.element = element;
        return _this31;
    }

    return ejGroupButton;
}(WidgetBase);
exports.ejGroupButton = ejGroupButton = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'group-button'), generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejGroupButton);
exports.ejGroupButton = ejGroupButton;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Column = function () {
    function Column() {
        _classCallCheck(this, Column);

        this.template = [];
    }

    Column.prototype.setTemplates = function setTemplates() {
        if (this.template[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    };

    return Column;
}();
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'template')], Column.prototype, "template", void 0);
exports.Column = Column = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'column'), generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] })], Column);
exports.Column = Column;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejGrid = function (_WidgetBase22) {
    _inherits(ejGrid, _WidgetBase22);

    function ejGrid(element, templateEngine) {
        _classCallCheck(this, ejGrid);

        var _this32 = _possibleConstructorReturn(this, _WidgetBase22.call(this));

        _this32.columns = [];
        _this32.element = element;
        _this32.hasChildProperty = true;
        _this32.childPropertyName = 'columns';
        _this32.templateProcessor = new TemplateProcessor(_this32, templateEngine);
        _this32.templateProcessor.initTemplate();
        return _this32;
    }

    return ejGrid;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'column')], ejGrid.prototype, "columns", void 0);
exports.ejGrid = ejGrid = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'grid'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], { 'enableRTL': ['enableRtl'] }, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine)], ejGrid);
exports.ejGrid = ejGrid;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejHeatMap = function (_WidgetBase23) {
    _inherits(ejHeatMap, _WidgetBase23);

    function ejHeatMap(element) {
        _classCallCheck(this, ejHeatMap);

        var _this33 = _possibleConstructorReturn(this, _WidgetBase23.call(this));

        _this33.element = element;
        return _this33;
    }

    return ejHeatMap;
}(WidgetBase);
exports.ejHeatMap = ejHeatMap = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'heat-map'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejHeatMap', ['width', 'height', 'id', 'showTooltip', 'tooltipSettings', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection']), (0, _aureliaDependencyInjection.inject)(Element)], ejHeatMap);
exports.ejHeatMap = ejHeatMap;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejHeatMapLegend = function (_WidgetBase24) {
    _inherits(ejHeatMapLegend, _WidgetBase24);

    function ejHeatMapLegend(element) {
        _classCallCheck(this, ejHeatMapLegend);

        var _this34 = _possibleConstructorReturn(this, _WidgetBase24.call(this));

        _this34.element = element;
        return _this34;
    }

    return ejHeatMapLegend;
}(WidgetBase);
exports.ejHeatMapLegend = ejHeatMapLegend = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'heat-map-legend'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejHeatMapLegend', ['width', 'height', 'isResponsive', 'showLabel', 'colorMappingCollection', 'orientation', 'legendMode']), (0, _aureliaDependencyInjection.inject)(Element)], ejHeatMapLegend);
exports.ejHeatMapLegend = ejHeatMapLegend;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejKanban = function (_WidgetBase25) {
    _inherits(ejKanban, _WidgetBase25);

    function ejKanban(element) {
        _classCallCheck(this, ejKanban);

        var _this35 = _possibleConstructorReturn(this, _WidgetBase25.call(this));

        _this35.columns = [];
        _this35.element = element;
        _this35.hasChildProperty = true;
        _this35.childPropertyName = 'columns';
        return _this35;
    }

    return ejKanban;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'kanban-column')], ejKanban.prototype, "columns", void 0);
exports.ejKanban = ejKanban = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejKanban', ['allowDragAndDrop', 'allowExternalDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale', 'showColumnWhenEmpty'], ['dataSource'], { 'enableRTL': ['enableRtl'] }, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element)], ejKanban);
exports.ejKanban = ejKanban;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KanbanColumn = function KanbanColumn() {
    _classCallCheck(this, KanbanColumn);
};
exports.KanbanColumn = KanbanColumn = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban-column'), generateBindables('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])], KanbanColumn);
exports.KanbanColumn = KanbanColumn;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejLinearGauge = function (_WidgetBase26) {
    _inherits(ejLinearGauge, _WidgetBase26);

    function ejLinearGauge(element) {
        _classCallCheck(this, ejLinearGauge);

        var _this36 = _possibleConstructorReturn(this, _WidgetBase26.call(this));

        _this36.element = element;
        return _this36;
    }

    return ejLinearGauge;
}(WidgetBase);
exports.ejLinearGauge = ejLinearGauge = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'linear-gauge'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'exportSettings', 'isResponsive', 'enableGroupSeparator', 'enableResize', 'frame', 'height', 'labelColor', 'locale', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), (0, _aureliaDependencyInjection.inject)(Element)], ejLinearGauge);
exports.ejLinearGauge = ejLinearGauge;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejListBox = function (_WidgetBase27) {
    _inherits(ejListBox, _WidgetBase27);

    function ejListBox(element) {
        _classCallCheck(this, ejListBox);

        var _this37 = _possibleConstructorReturn(this, _WidgetBase27.call(this));

        _this37.element = element;
        return _this37;
    }

    return ejListBox;
}(WidgetBase);
exports.ejListBox = ejListBox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'list-box'), generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields', 'height', 'itemHeight', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'sortOrder', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value', 'dataSource'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejListBox);
exports.ejListBox = ejListBox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejListView = function (_WidgetBase28) {
    _inherits(ejListView, _WidgetBase28);

    function ejListView(element) {
        _classCallCheck(this, ejListView);

        var _this38 = _possibleConstructorReturn(this, _WidgetBase28.call(this));

        _this38.element = element;
        return _this38;
    }

    return ejListView;
}(WidgetBase);
exports.ejListView = ejListView = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'list-view'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejListView', ['ajaxSettings', 'checkedIndices', 'cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'itemRequestCount', 'totalItemsCount', 'allowVirtualScrolling', 'virtualScrollMode'], ['dataSource', 'selectedItemIndex'], {}, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element)], ejListView);
exports.ejListView = ejListView;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Layer = function Layer() {
    _classCallCheck(this, Layer);
};
exports.Layer = Layer = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'layer'), generateBindables('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers'])], Layer);
exports.Layer = Layer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejMap = function (_WidgetBase29) {
    _inherits(ejMap, _WidgetBase29);

    function ejMap(element) {
        _classCallCheck(this, ejMap);

        var _this39 = _possibleConstructorReturn(this, _WidgetBase29.call(this));

        _this39.layers = [];
        _this39.element = element;
        _this39.hasChildProperty = true;
        _this39.childPropertyName = 'layers';
        return _this39;
    }

    return ejMap;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'layer')], ejMap.prototype, "layers", void 0);
exports.ejMap = ejMap = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'map'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'draggingOnSelection', 'enableAnimation', 'enableRTL', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'isResponsive', 'zoomSettings', 'navigationControl', 'locale', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejMap);
exports.ejMap = ejMap;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejMaskEdit = function (_WidgetBase30) {
    _inherits(ejMaskEdit, _WidgetBase30);

    function ejMaskEdit(element) {
        _classCallCheck(this, ejMaskEdit);

        var _this40 = _possibleConstructorReturn(this, _WidgetBase30.call(this));

        _this40.isEditor = true;
        _this40.element = element;
        return _this40;
    }

    return ejMaskEdit;
}(WidgetBase);
exports.ejMaskEdit = ejMaskEdit = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'mask-edit'), generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'locale', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value']), (0, _aureliaDependencyInjection.inject)(Element)], ejMaskEdit);
exports.ejMaskEdit = ejMaskEdit;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejMenu = function (_WidgetBase31) {
    _inherits(ejMenu, _WidgetBase31);

    function ejMenu(element) {
        _classCallCheck(this, ejMenu);

        var _this41 = _possibleConstructorReturn(this, _WidgetBase31.call(this));

        _this41.element = element;
        return _this41;
    }

    return ejMenu;
}(WidgetBase);
exports.ejMenu = ejMenu = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'menu'), generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'container', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width', 'overflowHeight', 'overflowWidth'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejMenu);
exports.ejMenu = ejMenu;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejNavigationDrawer = function (_WidgetBase32) {
    _inherits(ejNavigationDrawer, _WidgetBase32);

    function ejNavigationDrawer(element) {
        _classCallCheck(this, ejNavigationDrawer);

        var _this42 = _possibleConstructorReturn(this, _WidgetBase32.call(this));

        _this42.element = element;
        return _this42;
    }

    return ejNavigationDrawer;
}(WidgetBase);
exports.ejNavigationDrawer = ejNavigationDrawer = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'navigation-drawer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejNavigationDrawer', ['ajaxSettings', 'contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width', 'isPaneOpen']), (0, _aureliaDependencyInjection.inject)(Element)], ejNavigationDrawer);
exports.ejNavigationDrawer = ejNavigationDrawer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejNumericTextbox = function (_WidgetBase33) {
    _inherits(ejNumericTextbox, _WidgetBase33);

    function ejNumericTextbox(element) {
        _classCallCheck(this, ejNumericTextbox);

        var _this43 = _possibleConstructorReturn(this, _WidgetBase33.call(this));

        _this43.isEditor = true;
        _this43.element = element;
        return _this43;
    }

    return ejNumericTextbox;
}(WidgetBase);
exports.ejNumericTextbox = ejNumericTextbox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'numeric-textbox'), generateBindables('ejNumericTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejNumericTextbox);
exports.ejNumericTextbox = ejNumericTextbox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPager = function (_WidgetBase34) {
    _inherits(ejPager, _WidgetBase34);

    function ejPager(element) {
        _classCallCheck(this, ejPager);

        var _this44 = _possibleConstructorReturn(this, _WidgetBase34.call(this));

        _this44.element = element;
        return _this44;
    }

    return ejPager;
}(WidgetBase);
exports.ejPager = ejPager = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pager'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPager', ['customText', 'currentPage', 'cssClass', 'enabled', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'isResponsive', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'pageSizeMessage', 'template', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPager);
exports.ejPager = ejPager;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejOverview = function (_WidgetBase35) {
    _inherits(ejOverview, _WidgetBase35);

    function ejOverview(element) {
        _classCallCheck(this, ejOverview);

        var _this45 = _possibleConstructorReturn(this, _WidgetBase35.call(this));

        _this45.element = element;
        return _this45;
    }

    return ejOverview;
}(WidgetBase);
exports.ejOverview = ejOverview = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'overview'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': ['sourceId'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejOverview);
exports.ejOverview = ejOverview;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPdfViewer = function (_WidgetBase36) {
    _inherits(ejPdfViewer, _WidgetBase36);

    function ejPdfViewer(element) {
        _classCallCheck(this, ejPdfViewer);

        var _this46 = _possibleConstructorReturn(this, _WidgetBase36.call(this));

        _this46.element = element;
        return _this46;
    }

    return ejPdfViewer;
}(WidgetBase);
exports.ejPdfViewer = ejPdfViewer = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pdf-viewer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'textSelectionContextMenu', 'annotationContextMenu', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'bufferingMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName']), (0, _aureliaDependencyInjection.inject)(Element)], ejPdfViewer);
exports.ejPdfViewer = ejPdfViewer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPercentageTextbox = function (_WidgetBase37) {
    _inherits(ejPercentageTextbox, _WidgetBase37);

    function ejPercentageTextbox(element) {
        _classCallCheck(this, ejPercentageTextbox);

        var _this47 = _possibleConstructorReturn(this, _WidgetBase37.call(this));

        _this47.isEditor = true;
        _this47.element = element;
        return _this47;
    }

    return ejPercentageTextbox;
}(WidgetBase);
exports.ejPercentageTextbox = ejPercentageTextbox = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'percentage-textbox'), generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPercentageTextbox);
exports.ejPercentageTextbox = ejPercentageTextbox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPivotChart = function (_WidgetBase38) {
    _inherits(ejPivotChart, _WidgetBase38);

    function ejPivotChart(element) {
        _classCallCheck(this, ejPivotChart);

        var _this48 = _possibleConstructorReturn(this, _WidgetBase38.call(this));

        _this48.element = element;
        return _this48;
    }

    return ejPivotChart;
}(WidgetBase);
exports.ejPivotChart = ejPivotChart = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-chart'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'axes', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'title', 'url', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPivotChart);
exports.ejPivotChart = ejPivotChart;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPivotGauge = function (_WidgetBase39) {
    _inherits(ejPivotGauge, _WidgetBase39);

    function ejPivotGauge(element) {
        _classCallCheck(this, ejPivotGauge);

        var _this49 = _possibleConstructorReturn(this, _WidgetBase39.call(this));

        _this49.element = element;
        return _this49;
    }

    return ejPivotGauge;
}(WidgetBase);
exports.ejPivotGauge = ejPivotGauge = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-gauge'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPivotGauge);
exports.ejPivotGauge = ejPivotGauge;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPivotGrid = function (_WidgetBase40) {
    _inherits(ejPivotGrid, _WidgetBase40);

    function ejPivotGrid(element) {
        _classCallCheck(this, ejPivotGrid);

        var _this50 = _possibleConstructorReturn(this, _WidgetBase40.call(this));

        _this50.element = element;
        return _this50;
    }

    return ejPivotGrid;
}(WidgetBase);
exports.ejPivotGrid = ejPivotGrid = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-grid'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'headerSettings', 'showUniqueNameOnPivotButton', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellClick', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'maxNodeLimitInMemberEditor', 'enableMemberEditorPaging', 'memberEditorPageSize', 'enableMemberEditorSorting', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableColumnResizing', 'resizeColumnsToFit', 'enableContextMenu', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableCompleteDataExport', 'enableXHRCredentials'], [], { 'pivotTableFieldListID': ['pivotTableFieldListId'], 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPivotGrid);
exports.ejPivotGrid = ejPivotGrid;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPivotSchemaDesigner = function (_WidgetBase41) {
    _inherits(ejPivotSchemaDesigner, _WidgetBase41);

    function ejPivotSchemaDesigner(element) {
        _classCallCheck(this, ejPivotSchemaDesigner);

        var _this51 = _possibleConstructorReturn(this, _WidgetBase41.call(this));

        _this51.element = element;
        return _this51;
    }

    return ejPivotSchemaDesigner;
}(WidgetBase);
exports.ejPivotSchemaDesigner = ejPivotSchemaDesigner = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-schema-designer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejPivotSchemaDesigner);
exports.ejPivotSchemaDesigner = ejPivotSchemaDesigner;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejPivotTreeMap = function (_WidgetBase42) {
    _inherits(ejPivotTreeMap, _WidgetBase42);

    function ejPivotTreeMap(element) {
        _classCallCheck(this, ejPivotTreeMap);

        var _this52 = _possibleConstructorReturn(this, _WidgetBase42.call(this));

        _this52.element = element;
        return _this52;
    }

    return ejPivotTreeMap;
}(WidgetBase);
exports.ejPivotTreeMap = ejPivotTreeMap = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-tree-map'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableXHRCredentials']), (0, _aureliaDependencyInjection.inject)(Element)], ejPivotTreeMap);
exports.ejPivotTreeMap = ejPivotTreeMap;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejProgressBar = function (_WidgetBase43) {
    _inherits(ejProgressBar, _WidgetBase43);

    function ejProgressBar(element) {
        _classCallCheck(this, ejProgressBar);

        var _this53 = _possibleConstructorReturn(this, _WidgetBase43.call(this));

        _this53.element = element;
        return _this53;
    }

    return ejProgressBar;
}(WidgetBase);
exports.ejProgressBar = ejProgressBar = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'progress-bar'), generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejProgressBar);
exports.ejProgressBar = ejProgressBar;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Item = function () {
    function Item() {
        _classCallCheck(this, Item);

        this.template = [];
    }

    Item.prototype.setTemplates = function setTemplates() {
        if (this.template[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    };

    return Item;
}();
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'template')], Item.prototype, "template", void 0);
exports.Item = Item = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'item'), generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'badge', 'badge', 'type', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'items'])], Item);
exports.Item = Item;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRadialMenu = function (_WidgetBase44) {
    _inherits(ejRadialMenu, _WidgetBase44);

    function ejRadialMenu(element, templateEngine) {
        _classCallCheck(this, ejRadialMenu);

        var _this54 = _possibleConstructorReturn(this, _WidgetBase44.call(this));

        _this54.items = [];
        _this54.element = element;
        _this54.hasChildProperty = true;
        _this54.childPropertyName = 'items';
        _this54.templateProcessor = new TemplateProcessor(_this54, templateEngine);
        _this54.templateProcessor.initTemplate();
        return _this54;
    }

    return ejRadialMenu;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'item')], ejRadialMenu.prototype, "items", void 0);
exports.ejRadialMenu = ejRadialMenu = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-menu'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position']), (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine)], ejRadialMenu);
exports.ejRadialMenu = ejRadialMenu;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRadialSlider = function (_WidgetBase45) {
    _inherits(ejRadialSlider, _WidgetBase45);

    function ejRadialSlider(element) {
        _classCallCheck(this, ejRadialSlider);

        var _this55 = _possibleConstructorReturn(this, _WidgetBase45.call(this));

        _this55.element = element;
        return _this55;
    }

    return ejRadialSlider;
}(WidgetBase);
exports.ejRadialSlider = ejRadialSlider = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-slider'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'locale', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks', 'value'], ['value', 'ticks']), (0, _aureliaDependencyInjection.inject)(Element)], ejRadialSlider);
exports.ejRadialSlider = ejRadialSlider;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRadioButton = function (_WidgetBase46) {
    _inherits(ejRadioButton, _WidgetBase46);

    function ejRadioButton(element) {
        _classCallCheck(this, ejRadioButton);

        var _this56 = _possibleConstructorReturn(this, _WidgetBase46.call(this));

        _this56.element = element;
        return _this56;
    }

    return ejRadioButton;
}(WidgetBase);
exports.ejRadioButton = ejRadioButton = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'radio-button'), generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejRadioButton);
exports.ejRadioButton = ejRadioButton;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRangeNavigator = function (_WidgetBase47) {
    _inherits(ejRangeNavigator, _WidgetBase47);

    function ejRangeNavigator(element) {
        _classCallCheck(this, ejRangeNavigator);

        var _this57 = _possibleConstructorReturn(this, _WidgetBase47.call(this));

        _this57.series = [];
        _this57.element = element;
        _this57.hasChildProperty = true;
        _this57.childPropertyName = 'series';
        return _this57;
    }

    return ejRangeNavigator;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'range-series')], ejRangeNavigator.prototype, "series", void 0);
exports.ejRangeNavigator = ejRangeNavigator = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-navigator'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejRangeNavigator', ['allowSnapping', 'allowNextValue', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejRangeNavigator);
exports.ejRangeNavigator = ejRangeNavigator;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RangeSeries = function RangeSeries() {
    _classCallCheck(this, RangeSeries);
};
exports.RangeSeries = RangeSeries = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-series'), generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])], RangeSeries);
exports.RangeSeries = RangeSeries;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRating = function (_WidgetBase48) {
    _inherits(ejRating, _WidgetBase48);

    function ejRating(element) {
        _classCallCheck(this, ejRating);

        var _this58 = _possibleConstructorReturn(this, _WidgetBase48.call(this));

        _this58.element = element;
        return _this58;
    }

    return ejRating;
}(WidgetBase);
exports.ejRating = ejRating = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rating'), generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value']), (0, _aureliaDependencyInjection.inject)(Element)], ejRating);
exports.ejRating = ejRating;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejReportViewer = function (_WidgetBase49) {
    _inherits(ejReportViewer, _WidgetBase49);

    function ejReportViewer(element) {
        _classCallCheck(this, ejReportViewer);

        var _this59 = _possibleConstructorReturn(this, _WidgetBase49.call(this));

        _this59.element = element;
        return _this59;
    }

    return ejReportViewer;
}(WidgetBase);
exports.ejReportViewer = ejReportViewer = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'report-viewer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'parameterSettings', 'printMode', 'printOption', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'serviceAuthorizationToken', 'enableParameterBlockScroller', 'enableDatasourceBlockScroller', 'sizeToReportContent', 'autoRender', 'enableNotificationBar', 'enableDropDownSearch', 'enablePageVirtualization', 'showExceptionsInDialog']), (0, _aureliaDependencyInjection.inject)(Element)], ejReportViewer);
exports.ejReportViewer = ejReportViewer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRibbon = function (_WidgetBase50) {
    _inherits(ejRibbon, _WidgetBase50);

    function ejRibbon(element) {
        _classCallCheck(this, ejRibbon);

        var _this60 = _possibleConstructorReturn(this, _WidgetBase50.call(this));

        _this60.element = element;
        return _this60;
    }

    return ejRibbon;
}(WidgetBase);
exports.ejRibbon = ejRibbon = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'ribbon'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'cssClass', 'collapsePinSettings', 'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejRibbon);
exports.ejRibbon = ejRibbon;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRotator = function (_WidgetBase51) {
    _inherits(ejRotator, _WidgetBase51);

    function ejRotator(element) {
        _classCallCheck(this, ejRotator);

        var _this61 = _possibleConstructorReturn(this, _WidgetBase51.call(this));

        _this61.element = element;
        return _this61;
    }

    return ejRotator;
}(WidgetBase);
exports.ejRotator = ejRotator = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rotator'), generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID'], [], { 'enableRTL': ['enableRtl'], 'thumbnailSourceID': ['thumbnailSourceId'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejRotator);
exports.ejRotator = ejRotator;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSchedule = function (_WidgetBase52) {
    _inherits(ejSchedule, _WidgetBase52);

    function ejSchedule(element) {
        _classCallCheck(this, ejSchedule);

        var _this62 = _possibleConstructorReturn(this, _WidgetBase52.call(this));

        _this62.resources = [];
        _this62.element = element;
        _this62.hasChildProperty = true;
        _this62.childPropertyName = 'resources';
        return _this62;
    }

    return ejSchedule;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'schedule-resource')], ejSchedule.prototype, "resources", void 0);
exports.ejSchedule = ejSchedule = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowDelete', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejSchedule);
exports.ejSchedule = ejSchedule;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ScheduleResource = function ScheduleResource() {
    _classCallCheck(this, ScheduleResource);
};
exports.ScheduleResource = ScheduleResource = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule-resource'), generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings'])], ScheduleResource);
exports.ScheduleResource = ScheduleResource;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejRte = function (_WidgetBase53) {
    _inherits(ejRte, _WidgetBase53);

    function ejRte(element) {
        _classCallCheck(this, ejRte);

        var _this63 = _possibleConstructorReturn(this, _WidgetBase53.call(this));

        _this63.element = element;
        return _this63;
    }

    return ejRte;
}(WidgetBase);
exports.ejRte = ejRte = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rte'), generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'pasteCleanupSettings', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'exportToPdfSettings', 'exportToWordSettings', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'importSettings', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'toolbarOverflowMode', 'tooltipSettings', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejRte);
exports.ejRte = ejRte;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejScroller = function (_WidgetBase54) {
    _inherits(ejScroller, _WidgetBase54);

    function ejScroller(element) {
        _classCallCheck(this, ejScroller);

        var _this64 = _possibleConstructorReturn(this, _WidgetBase54.call(this));

        _this64.element = element;
        return _this64;
    }

    return ejScroller;
}(WidgetBase);
exports.ejScroller = ejScroller = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'scroller'), generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejScroller);
exports.ejScroller = ejScroller;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSignature = function (_WidgetBase55) {
    _inherits(ejSignature, _WidgetBase55);

    function ejSignature(element) {
        _classCallCheck(this, ejSignature);

        var _this65 = _possibleConstructorReturn(this, _WidgetBase55.call(this));

        _this65.element = element;
        return _this65;
    }

    return ejSignature;
}(WidgetBase);
exports.ejSignature = ejSignature = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'signature'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSignature', ['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive', 'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth', 'width']), (0, _aureliaDependencyInjection.inject)(Element)], ejSignature);
exports.ejSignature = ejSignature;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSlider = function (_WidgetBase56) {
    _inherits(ejSlider, _WidgetBase56);

    function ejSlider(element) {
        _classCallCheck(this, ejSlider);

        var _this66 = _possibleConstructorReturn(this, _WidgetBase56.call(this));

        _this66.element = element;
        return _this66;
    }

    return ejSlider;
}(WidgetBase);
exports.ejSlider = ejSlider = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'slider'), generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showButtons', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejSlider);
exports.ejSlider = ejSlider;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSparkline = function (_WidgetBase57) {
    _inherits(ejSparkline, _WidgetBase57);

    function ejSparkline(element) {
        _classCallCheck(this, ejSparkline);

        var _this67 = _possibleConstructorReturn(this, _WidgetBase57.call(this));

        _this67.element = element;
        return _this67;
    }

    return ejSparkline;
}(WidgetBase);
exports.ejSparkline = ejSparkline = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sparkline'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']), (0, _aureliaDependencyInjection.inject)(Element)], ejSparkline);
exports.ejSparkline = ejSparkline;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSpellCheck = function (_WidgetBase58) {
    _inherits(ejSpellCheck, _WidgetBase58);

    function ejSpellCheck(element) {
        _classCallCheck(this, ejSpellCheck);

        var _this68 = _possibleConstructorReturn(this, _WidgetBase58.call(this));

        _this68.element = element;
        return _this68;
    }

    return ejSpellCheck;
}(WidgetBase);
exports.ejSpellCheck = ejSpellCheck = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'spell-check'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync', 'ajaxRequestType', 'ajaxDataType']), (0, _aureliaDependencyInjection.inject)(Element)], ejSpellCheck);
exports.ejSpellCheck = ejSpellCheck;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSplitButton = function (_WidgetBase59) {
    _inherits(ejSplitButton, _WidgetBase59);

    function ejSplitButton(element) {
        _classCallCheck(this, ejSplitButton);

        var _this69 = _possibleConstructorReturn(this, _WidgetBase59.call(this));

        _this69.element = element;
        return _this69;
    }

    return ejSplitButton;
}(WidgetBase);
exports.ejSplitButton = ejSplitButton = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'split-button'), generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejSplitButton);
exports.ejSplitButton = ejSplitButton;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSplitter = function (_WidgetBase60) {
    _inherits(ejSplitter, _WidgetBase60);

    function ejSplitter(element) {
        _classCallCheck(this, ejSplitter);

        var _this70 = _possibleConstructorReturn(this, _WidgetBase60.call(this));

        _this70.element = element;
        return _this70;
    }

    return ejSplitter;
}(WidgetBase);
exports.ejSplitter = ejSplitter = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'splitter'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'expanderTemplate', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejSplitter);
exports.ejSplitter = ejSplitter;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sheet = function Sheet() {
    _classCallCheck(this, Sheet);
};
exports.Sheet = Sheet = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sheet'), generateBindables('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell'])], Sheet);
exports.Sheet = Sheet;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSpreadsheet = function (_WidgetBase61) {
    _inherits(ejSpreadsheet, _WidgetBase61);

    function ejSpreadsheet(element) {
        _classCallCheck(this, ejSpreadsheet);

        var _this71 = _possibleConstructorReturn(this, _WidgetBase61.call(this));

        _this71.sheets = [];
        _this71.element = element;
        _this71.hasChildProperty = true;
        _this71.childPropertyName = 'sheets';
        return _this71;
    }

    return ejSpreadsheet;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'sheet')], ejSpreadsheet.prototype, "sheets", void 0);
exports.ejSpreadsheet = ejSpreadsheet = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'spreadsheet'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowSparkline', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings', 'importSettings', 'isImport', 'isReadOnly', 'locale', 'nameManager', 'pictureSettings', 'printSettings', 'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showPager', 'showRibbon', 'undoRedoStep', 'userName']), (0, _aureliaDependencyInjection.inject)(Element)], ejSpreadsheet);
exports.ejSpreadsheet = ejSpreadsheet;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSunburstChart = function (_WidgetBase62) {
    _inherits(ejSunburstChart, _WidgetBase62);

    function ejSunburstChart(element) {
        _classCallCheck(this, ejSunburstChart);

        var _this72 = _possibleConstructorReturn(this, _WidgetBase62.call(this));

        _this72.levels = [];
        _this72.element = element;
        _this72.hasChildProperty = true;
        _this72.childPropertyName = 'levels';
        return _this72;
    }

    return ejSunburstChart;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'sunburst-levels')], ejSunburstChart.prototype, "levels", void 0);
exports.ejSunburstChart = ejSunburstChart = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sunburst-chart'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType']), (0, _aureliaDependencyInjection.inject)(Element)], ejSunburstChart);
exports.ejSunburstChart = ejSunburstChart;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SunburstLevels = function SunburstLevels() {
    _classCallCheck(this, SunburstLevels);
};
exports.SunburstLevels = SunburstLevels = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sunburst-levels'), generateBindables('levels', ['groupMemberPath'])], SunburstLevels);
exports.SunburstLevels = SunburstLevels;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejSymbolPalette = function (_WidgetBase63) {
    _inherits(ejSymbolPalette, _WidgetBase63);

    function ejSymbolPalette(element) {
        _classCallCheck(this, ejSymbolPalette);

        var _this73 = _possibleConstructorReturn(this, _WidgetBase63.call(this));

        _this73.element = element;
        return _this73;
    }

    return ejSymbolPalette;
}(WidgetBase);
exports.ejSymbolPalette = ejSymbolPalette = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'symbol-palette'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width']), (0, _aureliaDependencyInjection.inject)(Element)], ejSymbolPalette);
exports.ejSymbolPalette = ejSymbolPalette;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTab = function (_WidgetBase64) {
    _inherits(ejTab, _WidgetBase64);

    function ejTab(element) {
        _classCallCheck(this, ejTab);

        var _this74 = _possibleConstructorReturn(this, _WidgetBase64.call(this));

        _this74.element = element;
        return _this74;
    }

    return ejTab;
}(WidgetBase);
exports.ejTab = ejTab = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tab'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejTab);
exports.ejTab = ejTab;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTagCloud = function (_WidgetBase65) {
    _inherits(ejTagCloud, _WidgetBase65);

    function ejTagCloud(element) {
        _classCallCheck(this, ejTagCloud);

        var _this75 = _possibleConstructorReturn(this, _WidgetBase65.call(this));

        _this75.element = element;
        return _this75;
    }

    return ejTagCloud;
}(WidgetBase);
exports.ejTagCloud = ejTagCloud = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tag-cloud'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejTagCloud);
exports.ejTagCloud = ejTagCloud;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTile = function (_WidgetBase66) {
    _inherits(ejTile, _WidgetBase66);

    function ejTile(element) {
        _classCallCheck(this, ejTile);

        var _this76 = _possibleConstructorReturn(this, _WidgetBase66.call(this));

        _this76.element = element;
        return _this76;
    }

    return ejTile;
}(WidgetBase);
exports.ejTile = ejTile = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tile'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'locale', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor']), (0, _aureliaDependencyInjection.inject)(Element)], ejTile);
exports.ejTile = ejTile;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTimePicker = function (_WidgetBase67) {
    _inherits(ejTimePicker, _WidgetBase67);

    function ejTimePicker(element) {
        _classCallCheck(this, ejTimePicker);

        var _this77 = _possibleConstructorReturn(this, _WidgetBase67.call(this));

        _this77.isEditor = true;
        _this77.element = element;
        return _this77;
    }

    return ejTimePicker;
}(WidgetBase);
exports.ejTimePicker = ejTimePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'time-picker'), generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'validationMessages', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejTimePicker);
exports.ejTimePicker = ejTimePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejToggleButton = function (_WidgetBase68) {
    _inherits(ejToggleButton, _WidgetBase68);

    function ejToggleButton(element) {
        _classCallCheck(this, ejToggleButton);

        var _this78 = _possibleConstructorReturn(this, _WidgetBase68.call(this));

        _this78.element = element;
        return _this78;
    }

    return ejToggleButton;
}(WidgetBase);
exports.ejToggleButton = ejToggleButton = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toggle-button'), generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejToggleButton);
exports.ejToggleButton = ejToggleButton;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejToolbar = function (_WidgetBase69) {
    _inherits(ejToolbar, _WidgetBase69);

    function ejToolbar(element) {
        _classCallCheck(this, ejToolbar);

        var _this79 = _possibleConstructorReturn(this, _WidgetBase69.call(this));

        _this79.element = element;
        return _this79;
    }

    return ejToolbar;
}(WidgetBase);
exports.ejToolbar = ejToolbar = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toolbar'), generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejToolbar);
exports.ejToolbar = ejToolbar;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTooltip = function (_WidgetBase70) {
    _inherits(ejTooltip, _WidgetBase70);

    function ejTooltip(element) {
        _classCallCheck(this, ejTooltip);

        var _this80 = _possibleConstructorReturn(this, _WidgetBase70.call(this));

        _this80.element = element;
        return _this80;
    }

    return ejTooltip;
}(WidgetBase);
exports.ejTooltip = ejTooltip = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tooltip'), generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejTooltip);
exports.ejTooltip = ejTooltip;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTreeGrid = function (_WidgetBase71) {
    _inherits(ejTreeGrid, _WidgetBase71);

    function ejTreeGrid(element, templateEngine) {
        _classCallCheck(this, ejTreeGrid);

        var _this81 = _possibleConstructorReturn(this, _WidgetBase71.call(this));

        _this81.columns = [];
        _this81.element = element;
        _this81.hasChildProperty = true;
        _this81.childPropertyName = 'columns';
        _this81.templateProcessor = new TemplateProcessor(_this81, templateEngine);
        _this81.templateProcessor.initTemplate();
        return _this81;
    }

    return ejTreeGrid;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'tree-grid-column')], ejTreeGrid.prototype, "columns", void 0);
exports.ejTreeGrid = ejTreeGrid = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejTreeGrid', ['allowColumnReordering', 'allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowPaging', 'allowSearching', 'allowSelection', 'allowSorting', 'allowTextWrap', 'altRowTemplateID', 'cellTooltipTemplate', 'childMapping', 'collapsibleTotalSummary', 'columnDialogFields', 'columnResizeSettings', 'columns', 'commonWidth', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'detailsRowHeight', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableLoadOnDemand', 'enableResize', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'headerTextOverflow', 'idMapping', 'isResponsive', 'locale', 'pageSettings', 'parentIdMapping', 'parseRowTemplate', 'query', 'rowHeight', 'rowTemplateID', 'searchSettings', 'selectedCellIndexes', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnOptions', 'showDetailsRow', 'showDetailsRowInfoColumn', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showStackedHeader', 'showSummaryRow', 'showTotalSummary', 'sizeSettings', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings', 'totalSummaryHeight', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], { 'altRowTemplateID': ['altRowTemplateId'], 'rowTemplateID': ['rowTemplateId'] }, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine)], ejTreeGrid);
exports.ejTreeGrid = ejTreeGrid;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TreeGridColumn = function () {
    function TreeGridColumn() {
        _classCallCheck(this, TreeGridColumn);

        this.angularTemplate = [];
    }

    TreeGridColumn.prototype.setTemplates = function setTemplates() {
        if (this.angularTemplate[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
        }
    };

    return TreeGridColumn;
}();
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'template')], TreeGridColumn.prototype, "angularTemplate", void 0);
exports.TreeGridColumn = TreeGridColumn = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid-column'), generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] })], TreeGridColumn);
exports.TreeGridColumn = TreeGridColumn;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Level = function Level() {
    _classCallCheck(this, Level);
};
exports.Level = Level = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'level'), generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'textOverflow', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])], Level);
exports.Level = Level;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTreeMap = function (_WidgetBase72) {
    _inherits(ejTreeMap, _WidgetBase72);

    function ejTreeMap(element) {
        _classCallCheck(this, ejTreeMap);

        var _this82 = _possibleConstructorReturn(this, _WidgetBase72.call(this));

        _this82.levels = [];
        _this82.element = element;
        _this82.hasChildProperty = true;
        _this82.childPropertyName = 'levels';
        return _this82;
    }

    return ejTreeMap;
}(WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.elementPrefix + 'level')], ejTreeMap.prototype, "levels", void 0);
exports.ejTreeMap = ejTreeMap = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-map'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'colorPath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource', 'header', 'enableDrillDown', 'drillDownValue', 'drillDownLevel', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'enableGroupSeparator', 'locale', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'], {}, ['dataSource']), (0, _aureliaDependencyInjection.inject)(Element)], ejTreeMap);
exports.ejTreeMap = ejTreeMap;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejUploadbox = function (_WidgetBase73) {
    _inherits(ejUploadbox, _WidgetBase73);

    function ejUploadbox(element) {
        _classCallCheck(this, ejUploadbox);

        var _this83 = _possibleConstructorReturn(this, _WidgetBase73.call(this));

        _this83.element = element;
        return _this83;
    }

    return ejUploadbox;
}(WidgetBase);
exports.ejUploadbox = ejUploadbox = __decorate([(0, _aureliaTemplating.customElement)(constants.elementPrefix + 'uploadbox'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejUploadbox);
exports.ejUploadbox = ejUploadbox;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejTreeView = function (_WidgetBase74) {
    _inherits(ejTreeView, _WidgetBase74);

    function ejTreeView(element) {
        _classCallCheck(this, ejTreeView);

        var _this84 = _possibleConstructorReturn(this, _WidgetBase74.call(this));

        _this84.element = element;
        return _this84;
    }

    return ejTreeView;
}(WidgetBase);
exports.ejTreeView = ejTreeView = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tree-view'), generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': ['enableRtl'] }), (0, _aureliaDependencyInjection.inject)(Element)], ejTreeView);
exports.ejTreeView = ejTreeView;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ejWaitingPopup = function (_WidgetBase75) {
    _inherits(ejWaitingPopup, _WidgetBase75);

    function ejWaitingPopup(element) {
        _classCallCheck(this, ejWaitingPopup);

        var _this85 = _possibleConstructorReturn(this, _WidgetBase75.call(this));

        _this85.element = element;
        return _this85;
    }

    return ejWaitingPopup;
}(WidgetBase);
exports.ejWaitingPopup = ejWaitingPopup = __decorate([(0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'waiting-popup'), generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text']), (0, _aureliaDependencyInjection.inject)(Element)], ejWaitingPopup);
exports.ejWaitingPopup = ejWaitingPopup;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Ej2Accordion = function (_Ej2WidgetBase) {
    _inherits(Ej2Accordion, _Ej2WidgetBase);

    function Ej2Accordion(element) {
        _classCallCheck(this, Ej2Accordion);

        var _this86 = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Navigations.Accordion));

        _this86.element = element;
        return _this86;
    }

    return Ej2Accordion;
}(Ej2WidgetBase);
exports.Ej2Accordion = Ej2Accordion = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'accordion'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Accordion', ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'], [], null, null), (0, _aureliaDependencyInjection.inject)(Element)], Ej2Accordion);
exports.Ej2Accordion = Ej2Accordion;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

_ej2Charts.Chart.Inject(_ej2Charts.StackingLineSeries, _ej2Charts.Category, _ej2Charts.Legend, _ej2Charts.Tooltip, _ej2Charts.BarSeries, _ej2Charts.StackingBarSeries, _ej2Charts.LineSeries, _ej2Charts.StepLineSeries, _ej2Charts.SplineSeries, _ej2Charts.MultiColoredLineSeries, _ej2Charts.AreaSeries, _ej2Charts.RangeAreaSeries, _ej2Charts.DateTime, _ej2Charts.StackingAreaSeries, _ej2Charts.StepAreaSeries, _ej2Charts.MultiColoredAreaSeries, _ej2Charts.ColumnSeries, _ej2Charts.StackingColumnSeries, _ej2Charts.RangeColumnSeries, _ej2Charts.ScatterSeries, _ej2Charts.BubbleSeries);
var ej2Chart = function (_Ej2WidgetBase2) {
    _inherits(ej2Chart, _Ej2WidgetBase2);

    function ej2Chart(element) {
        _classCallCheck(this, ej2Chart);

        var _this87 = _possibleConstructorReturn(this, _Ej2WidgetBase2.call(this, _ej2Charts.Chart));

        _this87.series = [];
        _this87.element = element;
        _this87.hasChildProperty = true;
        _this87.childPropertyName = 'series';
        return _this87;
    }

    return ej2Chart;
}(Ej2WidgetBase);
__decorate([(0, _aureliaTemplating.children)('e-series')], ej2Chart.prototype, "series", void 0);
exports.ej2Chart = ej2Chart = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'chart'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Chart', ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'], [], [], null), (0, _aureliaDependencyInjection.inject)(Element)], ej2Chart);
exports.ej2Chart = ej2Chart;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SeriesVM = function SeriesVM() {
    _classCallCheck(this, SeriesVM);
};
exports.SeriesVM = SeriesVM = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)('e-series'), generateBindables('series', ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'], [], null, null)], SeriesVM);
exports.SeriesVM = SeriesVM;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Ej2DatePicker = function (_Ej2WidgetBase3) {
    _inherits(Ej2DatePicker, _Ej2WidgetBase3);

    function Ej2DatePicker(element) {
        _classCallCheck(this, Ej2DatePicker);

        var _this88 = _possibleConstructorReturn(this, _Ej2WidgetBase3.call(this, _ej2Calendars.DatePicker));

        _this88.isEditor = true;
        _this88.element = element;
        return _this88;
    }

    return Ej2DatePicker;
}(Ej2WidgetBase);
exports.Ej2DatePicker = Ej2DatePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.ej2AttributePrefix + 'date-picker'), generateBindables(constants.ej2ElementPrefix + 'DatePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null, null), (0, _aureliaDependencyInjection.inject)(Element)], Ej2DatePicker);
exports.Ej2DatePicker = Ej2DatePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ej2DateTimePicker = function (_Ej2WidgetBase4) {
    _inherits(ej2DateTimePicker, _Ej2WidgetBase4);

    function ej2DateTimePicker(element) {
        _classCallCheck(this, ej2DateTimePicker);

        var _this89 = _possibleConstructorReturn(this, _Ej2WidgetBase4.call(this, _ej2Calendars.DateTimePicker));

        _this89.isEditor = true;
        _this89.element = element;
        return _this89;
    }

    return ej2DateTimePicker;
}(Ej2WidgetBase);
exports.ej2DateTimePicker = ej2DateTimePicker = __decorate([(0, _aureliaTemplating.customAttribute)(constants.ej2AttributePrefix + 'date-time-picker'), generateBindables(constants.ej2ElementPrefix + 'DateTimePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], null, null), (0, _aureliaDependencyInjection.inject)(Element)], ej2DateTimePicker);
exports.ej2DateTimePicker = ej2DateTimePicker;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

_ej2Diagrams.Diagram.Inject(_ej2Diagrams.DataBinding, _ej2Diagrams.HierarchicalTree);
var ej2Diagram = function (_Ej2WidgetBase5) {
    _inherits(ej2Diagram, _Ej2WidgetBase5);

    function ej2Diagram(element) {
        _classCallCheck(this, ej2Diagram);

        var _this90 = _possibleConstructorReturn(this, _Ej2WidgetBase5.call(this, _ej2Diagrams.Diagram));

        _this90.element = element;
        return _this90;
    }

    return ej2Diagram;
}(Ej2WidgetBase);
exports.ej2Diagram = ej2Diagram = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'diagram'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Diagram', ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'], null, null, null), (0, _aureliaDependencyInjection.inject)(Element)], ej2Diagram);
exports.ej2Diagram = ej2Diagram;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ej2Column = function () {
    function Ej2Column() {
        _classCallCheck(this, Ej2Column);

        this.template = [];
    }

    Ej2Column.prototype.setTemplates = function setTemplates() {
        if (this.template[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    };

    return Ej2Column;
}();
__decorate([(0, _aureliaTemplating.children)(constants.ej2ElementPrefix + 'template')], Ej2Column.prototype, "template", void 0);
exports.Ej2Column = Ej2Column = __decorate([(0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), (0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'column'), generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'], [], null, null)], Ej2Column);
exports.Ej2Column = Ej2Column;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

_ej2Grids.Grid.Inject(_ej2Grids.Group, _ej2Grids.Filter, _ej2Grids.Page, _ej2Grids.Sort, _ej2Grids.Search, _ej2Grids.Toolbar, _ej2Grids.Freeze, _ej2Grids.Selection, _ej2Grids.Aggregate, _ej2Grids.DetailRow, _ej2Grids.PdfExport, _ej2Grids.ExcelExport, _ej2Grids.ContextMenu, _ej2Grids.Edit);
var Ej2Grid = function (_Ej2WidgetBase6) {
    _inherits(Ej2Grid, _Ej2WidgetBase6);

    function Ej2Grid(element, templateEngine) {
        _classCallCheck(this, Ej2Grid);

        var _this91 = _possibleConstructorReturn(this, _Ej2WidgetBase6.call(this, _ej2Grids.Grid));

        _this91.columns = [];
        _this91.element = element;
        _this91.hasChildProperty = true;
        _this91.childPropertyName = 'columns';
        _this91.templateProcessor = new Ej2TemplateProcessor(_this91, templateEngine);
        return _this91;
    }

    return Ej2Grid;
}(Ej2WidgetBase);
__decorate([(0, _aureliaTemplating.children)(constants.ej2ElementPrefix + 'column')], Ej2Grid.prototype, "columns", void 0);
exports.Ej2Grid = Ej2Grid = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'grid'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Grid', ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'], [], null, null), (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine)], Ej2Grid);
exports.Ej2Grid = Ej2Grid;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ej2LinearGauge = function (_Ej2WidgetBase7) {
    _inherits(ej2LinearGauge, _Ej2WidgetBase7);

    function ej2LinearGauge(element) {
        _classCallCheck(this, ej2LinearGauge);

        var _this92 = _possibleConstructorReturn(this, _Ej2WidgetBase7.call(this, _ej2Lineargauge.LinearGauge));

        _this92.element = element;
        return _this92;
    }

    return ej2LinearGauge;
}(Ej2WidgetBase);
exports.ej2LinearGauge = ej2LinearGauge = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'linear-gauge'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'LinearGauge', ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'], [], [], null), (0, _aureliaDependencyInjection.inject)(Element)], ej2LinearGauge);
exports.ej2LinearGauge = ej2LinearGauge;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ej2Overview = function (_Ej2WidgetBase8) {
    _inherits(ej2Overview, _Ej2WidgetBase8);

    function ej2Overview(element) {
        _classCallCheck(this, ej2Overview);

        var _this93 = _possibleConstructorReturn(this, _Ej2WidgetBase8.call(this, _ej2Diagrams.Overview));

        _this93.element = element;
        return _this93;
    }

    return ej2Overview;
}(Ej2WidgetBase);
exports.ej2Overview = ej2Overview = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'overview'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Overview', ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'], [], { 'sourceID': ['sourceId'] }, null), (0, _aureliaDependencyInjection.inject)(Element)], ej2Overview);
exports.ej2Overview = ej2Overview;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

_ej2Pdfviewer.PdfViewer.Inject(_ej2Pdfviewer.Toolbar, _ej2Pdfviewer.Magnification, _ej2Pdfviewer.Navigation, _ej2Pdfviewer.LinkAnnotation, _ej2Pdfviewer.BookmarkView, _ej2Pdfviewer.ThumbnailView, _ej2Pdfviewer.Print, _ej2Pdfviewer.TextSelection, _ej2Pdfviewer.TextSearch, _ej2Pdfviewer.Annotation);
var ej2PdfViewer = function (_Ej2WidgetBase9) {
    _inherits(ej2PdfViewer, _Ej2WidgetBase9);

    function ej2PdfViewer(element) {
        _classCallCheck(this, ej2PdfViewer);

        var _this94 = _possibleConstructorReturn(this, _Ej2WidgetBase9.call(this, _ej2Pdfviewer.PdfViewer));

        _this94.element = element;
        return _this94;
    }

    return ej2PdfViewer;
}(Ej2WidgetBase);
exports.ej2PdfViewer = ej2PdfViewer = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'pdf-viewer'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'PdfViewer', ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotationToolbarSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'customStampItems', 'customStampSettings', 'distanceSettings', 'documentPath', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableMagnification', 'enableMeasureAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'lineSettings', 'locale', 'measurementSettings', 'perimeterSettings', 'polygonSettings', 'radiusSettings', 'rectangleSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode'], [], [], null), (0, _aureliaDependencyInjection.inject)(Element)], ej2PdfViewer);
exports.ej2PdfViewer = ej2PdfViewer;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

_ej2Richtexteditor.RichTextEditor.Inject(_ej2Richtexteditor.Toolbar, _ej2Richtexteditor.Link, _ej2Richtexteditor.Image, _ej2Richtexteditor.Count, _ej2Richtexteditor.HtmlEditor, _ej2Richtexteditor.QuickToolbar, _ej2Richtexteditor.Table);
var ej2Rte = function (_Ej2WidgetBase10) {
    _inherits(ej2Rte, _Ej2WidgetBase10);

    function ej2Rte(element) {
        _classCallCheck(this, ej2Rte);

        var _this95 = _possibleConstructorReturn(this, _Ej2WidgetBase10.call(this, _ej2Richtexteditor.RichTextEditor));

        _this95.element = element;
        return _this95;
    }

    return ej2Rte;
}(Ej2WidgetBase);
exports.ej2Rte = ej2Rte = __decorate([(0, _aureliaTemplating.customAttribute)(constants.ej2AttributePrefix + 'rte'), generateBindables(constants.ej2ElementPrefix + 'RTE', ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'], [], null, null), (0, _aureliaDependencyInjection.inject)(Element)], ej2Rte);
exports.ej2Rte = ej2Rte;


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ej2Tab = function (_Ej2WidgetBase11) {
    _inherits(ej2Tab, _Ej2WidgetBase11);

    function ej2Tab(element) {
        _classCallCheck(this, ej2Tab);

        var _this96 = _possibleConstructorReturn(this, _Ej2WidgetBase11.call(this, _ej2Navigations.Tab));

        _this96.element = element;
        return _this96;
    }

    return ej2Tab;
}(Ej2WidgetBase);
exports.ej2Tab = ej2Tab = __decorate([(0, _aureliaTemplating.customElement)(constants.ej2ElementPrefix + 'tab'), (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Tab', ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'], [], [], null), (0, _aureliaDependencyInjection.inject)(Element)], ej2Tab);
exports.ej2Tab = ej2Tab;