'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
    "use strict";

    var PLATFORM, EjConfigBuilder;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }],
        execute: function () {
            _export('EjConfigBuilder', EjConfigBuilder = function () {
                function EjConfigBuilder() {
                    _classCallCheck(this, EjConfigBuilder);

                    this.resources = [];
                    this.useGlobalResources = true;
                }

                EjConfigBuilder.prototype.useAll = function useAll() {
                    this.ejGrid().ejChart().ejSunburstChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejHeatMap().ejHeatMapLegend().ejSparkline().ejSymbolPalette().ejOverview().ejPager().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejComboBox().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejDateRangePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejPivotTreeMap().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejSignature().ejTooltip().ejSpellCheck().ejTemplate().ej2Template().ej2DatePicker().ej2Accordion().ej2Grid().ej2DateTimePicker().ej2Diagram().ej2Overview().ej2RTE().ej2Tab().ej2PdfViewer().ej2LinearGauge().ej2Chart().ej2MaskEdit().ej2Button().ej2DropDownButton().ej2ProgressButton().ej2SplitButton().ej2ChipList().ej2AutoComplete().ej2ComboBox().ej2DropDownList().ej2MultiSelect().ej2ListBox().ej2TextBox().ej2NumericTextBox().ej2RadioButton().ej2CheckBox().ej2ColorPicker().ej2Uploader().ej2Slider().ej2Switch().ej2Toast().ej2Schedule().ej2ContextMenu();
                    return this;
                };

                EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
                    this.useGlobalResources = false;
                    return this;
                };

                EjConfigBuilder.prototype.ejGrid = function ejGrid() {
                    this.resources.push(PLATFORM.moduleName('./grid/grid'));
                    this.resources.push(PLATFORM.moduleName('./grid/column'));
                    return this;
                };

                EjConfigBuilder.prototype.ejChart = function ejChart() {
                    this.resources.push(PLATFORM.moduleName('./chart/chart'));
                    this.resources.push(PLATFORM.moduleName('./chart/series'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSunburstChart = function ejSunburstChart() {
                    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstchart'));
                    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
                    return this;
                };

                EjConfigBuilder.prototype.ejMap = function ejMap() {
                    this.resources.push(PLATFORM.moduleName('./map/map'));
                    this.resources.push(PLATFORM.moduleName('./map/layer'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
                    this.resources.push(PLATFORM.moduleName('./treemap/treemap'));
                    this.resources.push(PLATFORM.moduleName('./treemap/level'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
                    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangenavigator'));
                    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangeseries'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
                    this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
                    return this;
                };

                EjConfigBuilder.prototype.ejHeatMap = function ejHeatMap() {
                    this.resources.push(PLATFORM.moduleName('./heatmap/heatmap'));
                    return this;
                };

                EjConfigBuilder.prototype.ejHeatMapLegend = function ejHeatMapLegend() {
                    this.resources.push(PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
                    this.resources.push(PLATFORM.moduleName('./sparkline/sparkline'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
                    this.resources.push(PLATFORM.moduleName('./symbolpalette/symbolpalette'));
                    return this;
                };

                EjConfigBuilder.prototype.ejOverview = function ejOverview() {
                    this.resources.push(PLATFORM.moduleName('./overview/overview'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPager = function ejPager() {
                    this.resources.push(PLATFORM.moduleName('./pager/pager'));
                    return this;
                };

                EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
                    this.resources.push(PLATFORM.moduleName('./bulletgraph/bulletgraph'));
                    this.resources.push(PLATFORM.moduleName('./bulletgraph/qualitativerange'));
                    return this;
                };

                EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
                    this.resources.push(PLATFORM.moduleName('./circulargauge/circulargauge'));
                    return this;
                };

                EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
                    this.resources.push(PLATFORM.moduleName('./lineargauge/lineargauge'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
                    this.resources.push(PLATFORM.moduleName('./digitalgauge/digitalgauge'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
                    this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
                    this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ejGantt = function ejGantt() {
                    this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
                    this.resources.push(PLATFORM.moduleName('./treegrid/treegrid'));
                    this.resources.push(PLATFORM.moduleName('./treegrid/treegridcolumn'));
                    return this;
                };

                EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
                    this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDialog = function ejDialog() {
                    this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
                    return this;
                };

                EjConfigBuilder.prototype.ejScroller = function ejScroller() {
                    this.resources.push(PLATFORM.moduleName('./scroller/scroller'));
                    return this;
                };

                EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
                    this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
                    this.resources.push(PLATFORM.moduleName('./pdfviewer/pdfviewer'));
                    return this;
                };

                EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
                    this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
                    this.resources.push(PLATFORM.moduleName('./currencytextbox/currencytextbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
                    this.resources.push(PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
                    this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
                    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
                    return this;
                };

                EjConfigBuilder.prototype.ejMenu = function ejMenu() {
                    this.resources.push(PLATFORM.moduleName('./menu/menu'));
                    return this;
                };

                EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
                    this.resources.push(PLATFORM.moduleName('./maskedit/maskedit'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
                    this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
                    return this;
                };

                EjConfigBuilder.prototype.ejKanban = function ejKanban() {
                    this.resources.push(PLATFORM.moduleName('./kanban/kanban'));
                    this.resources.push(PLATFORM.moduleName('./kanban/kanbancolumn'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
                    this.resources.push(PLATFORM.moduleName('./ribbon/ribbon'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
                    this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
                    this.resources.push(PLATFORM.moduleName('./spreadsheet/sheet'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRating = function ejRating() {
                    this.resources.push(PLATFORM.moduleName('./rating/rating'));
                    return this;
                };

                EjConfigBuilder.prototype.ejListBox = function ejListBox() {
                    this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejListView = function ejListView() {
                    this.resources.push(PLATFORM.moduleName('./listview/listview'));
                    return this;
                };

                EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
                    this.resources.push(PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRotator = function ejRotator() {
                    this.resources.push(PLATFORM.moduleName('./rotator/rotator'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRTE = function ejRTE() {
                    this.resources.push(PLATFORM.moduleName('./rte/rte'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
                    this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
                    return this;
                };

                EjConfigBuilder.prototype.ejComboBox = function ejComboBox() {
                    this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
                    this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
                    this.resources.push(PLATFORM.moduleName('./radialmenu/radialmenu'));
                    this.resources.push(PLATFORM.moduleName('./radialmenu/item'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
                    this.resources.push(PLATFORM.moduleName('./radialslider/radialslider'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTile = function ejTile() {
                    this.resources.push(PLATFORM.moduleName('./tile/tile'));
                    return this;
                };

                EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
                    this.resources.push(PLATFORM.moduleName('./accordion/accordion'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTab = function ejTab() {
                    this.resources.push(PLATFORM.moduleName('./tab/tab'));
                    return this;
                };

                EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
                    this.resources.push(PLATFORM.moduleName('./checkbox/checkbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
                    this.resources.push(PLATFORM.moduleName('./radiobutton/radiobutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
                    this.resources.push(PLATFORM.moduleName('./togglebutton/togglebutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
                    this.resources.push(PLATFORM.moduleName('./splitbutton/splitbutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
                    this.resources.push(PLATFORM.moduleName('./groupbutton/groupbutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
                    this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ejDateRangePicker = function ejDateRangePicker() {
                    this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
                    this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
                    this.resources.push(PLATFORM.moduleName('./tagcloud/tagcloud'));
                    return this;
                };

                EjConfigBuilder.prototype.ejButton = function ejButton() {
                    this.resources.push(PLATFORM.moduleName('./button/button'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSlider = function ejSlider() {
                    this.resources.push(PLATFORM.moduleName('./slider/slider'));
                    return this;
                };

                EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
                    this.resources.push(PLATFORM.moduleName('./fileexplorer/fileexplorer'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
                    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
                    this.resources.push(PLATFORM.moduleName('./pivotchart/pivotchart'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
                    this.resources.push(PLATFORM.moduleName('./pivotgauge/pivotgauge'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
                    this.resources.push(PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
                    return this;
                };

                EjConfigBuilder.prototype.ejPivotTreeMap = function ejPivotTreeMap() {
                    this.resources.push(PLATFORM.moduleName('./pivottreemap/pivottreemap'));
                    return this;
                };

                EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
                    this.resources.push(PLATFORM.moduleName('./waitingpopup/waitingpopup'));
                    return this;
                };

                EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
                    this.resources.push(PLATFORM.moduleName('./reportviewer/reportviewer'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
                    this.resources.push(PLATFORM.moduleName('./schedule/schedule'));
                    this.resources.push(PLATFORM.moduleName('./schedule/scheduleresource'));
                    return this;
                };

                EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
                    this.resources.push(PLATFORM.moduleName('./uploadbox/uploadbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSignature = function ejSignature() {
                    this.resources.push(PLATFORM.moduleName('./signature/signature'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
                    this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
                    return this;
                };

                EjConfigBuilder.prototype.ejSpellCheck = function ejSpellCheck() {
                    this.resources.push(PLATFORM.moduleName('./spellcheck/spellcheck'));
                    return this;
                };

                EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
                    this.resources.push(PLATFORM.moduleName('./common/template'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2DatePicker = function ej2DatePicker() {
                    this.resources.push(PLATFORM.moduleName('./ej2/datepicker/datepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Accordion = function ej2Accordion() {
                    this.resources.push(PLATFORM.moduleName('./ej2/accordion/accordion'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Grid = function ej2Grid() {
                    this.resources.push(PLATFORM.moduleName('./ej2/grid/grid'));
                    this.resources.push(PLATFORM.moduleName('./ej2/grid/column'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Template = function ej2Template() {
                    this.resources.push(PLATFORM.moduleName('./common/ej2-template'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2DateTimePicker = function ej2DateTimePicker() {
                    this.resources.push(PLATFORM.moduleName('./ej2/datetimepicker/datetimepicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Diagram = function ej2Diagram() {
                    this.resources.push(PLATFORM.moduleName('./ej2/diagram/diagram'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Overview = function ej2Overview() {
                    this.resources.push(PLATFORM.moduleName('./ej2/overview/overview'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2RTE = function ej2RTE() {
                    this.resources.push(PLATFORM.moduleName('./ej2/rte/rte'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Tab = function ej2Tab() {
                    this.resources.push(PLATFORM.moduleName('./ej2/tab/tab'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2PdfViewer = function ej2PdfViewer() {
                    this.resources.push(PLATFORM.moduleName('./ej2/pdfviewer/pdfviewer'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2LinearGauge = function ej2LinearGauge() {
                    this.resources.push(PLATFORM.moduleName('./ej2/lineargauge/lineargauge'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Chart = function ej2Chart() {
                    this.resources.push(PLATFORM.moduleName('./ej2/chart/chart'));
                    this.resources.push(PLATFORM.moduleName('./ej2/chart/series'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2MaskEdit = function ej2MaskEdit() {
                    this.resources.push(PLATFORM.moduleName('./ej2/maskedit/maskedit'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Button = function ej2Button() {
                    this.resources.push(PLATFORM.moduleName('./ej2/button/button'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2DropDownButton = function ej2DropDownButton() {
                    this.resources.push(PLATFORM.moduleName('./ej2/dropdownbutton/dropdownbutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ProgressButton = function ej2ProgressButton() {
                    this.resources.push(PLATFORM.moduleName('./ej2/progressbutton/progressbutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2SplitButton = function ej2SplitButton() {
                    this.resources.push(PLATFORM.moduleName('./ej2/splitbutton/splitbutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ChipList = function ej2ChipList() {
                    this.resources.push(PLATFORM.moduleName('./ej2/chips/chiplist'));
                    this.resources.push(PLATFORM.moduleName('./ej2/chips/chips'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2AutoComplete = function ej2AutoComplete() {
                    this.resources.push(PLATFORM.moduleName('./ej2/autocomplete/autocomplete'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ComboBox = function ej2ComboBox() {
                    this.resources.push(PLATFORM.moduleName('./ej2/combobox/combobox'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2DropDownList = function ej2DropDownList() {
                    this.resources.push(PLATFORM.moduleName('./ej2/dropdownlist/dropdownlist'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2MultiSelect = function ej2MultiSelect() {
                    this.resources.push(PLATFORM.moduleName('./ej2/multiselect/multiselect'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ListBox = function ej2ListBox() {
                    this.resources.push(PLATFORM.moduleName('./ej2/listbox/listbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2TextBox = function ej2TextBox() {
                    this.resources.push(PLATFORM.moduleName('./ej2/textbox/textbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2NumericTextBox = function ej2NumericTextBox() {
                    this.resources.push(PLATFORM.moduleName('./ej2/numerictextbox/numerictextbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2RadioButton = function ej2RadioButton() {
                    this.resources.push(PLATFORM.moduleName('./ej2/radiobutton/radiobutton'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2CheckBox = function ej2CheckBox() {
                    this.resources.push(PLATFORM.moduleName('./ej2/checkbox/checkbox'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ColorPicker = function ej2ColorPicker() {
                    this.resources.push(PLATFORM.moduleName('./ej2/colorpicker/colorpicker'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Uploader = function ej2Uploader() {
                    this.resources.push(PLATFORM.moduleName('./ej2/uploader/uploader'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Slider = function ej2Slider() {
                    this.resources.push(PLATFORM.moduleName('./ej2/slider/slider'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Switch = function ej2Switch() {
                    this.resources.push(PLATFORM.moduleName('./ej2/switch/switch'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Toast = function ej2Toast() {
                    this.resources.push(PLATFORM.moduleName('./ej2/toast/toast'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2Schedule = function ej2Schedule() {
                    this.resources.push(PLATFORM.moduleName('./ej2/schedule/schedule'));
                    return this;
                };

                EjConfigBuilder.prototype.ej2ContextMenu = function ej2ContextMenu() {
                    this.resources.push(PLATFORM.moduleName('./ej2/contextmenu/contextmenu'));
                    return this;
                };

                return EjConfigBuilder;
            }());

            _export('EjConfigBuilder', EjConfigBuilder);
        }
    };
});
//# sourceMappingURL=devbuild/dev/config-builder.js.map
