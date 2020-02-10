/**
* Plugin configuration builder
*/

import { PLATFORM } from 'aurelia-pal';

export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll(): EjConfigBuilder {
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
      .ej2Menu();
    return this;
  }
  /**
   * Don't globalize any resources
   * Allows you to import wrappers yourself via <require></require>
   */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
  ejGrid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./grid/grid'));
    this.resources.push(PLATFORM.moduleName('./grid/column'));
    return this;
  }
  ejChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chart/chart'));
    this.resources.push(PLATFORM.moduleName('./chart/series'));
    return this;
  }
  ejSunburstChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstchart'));
    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
    return this;
  }
  ejMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./map/map'));
    this.resources.push(PLATFORM.moduleName('./map/layer'));
    return this;
  }
  ejTreeMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treemap/treemap'));
    this.resources.push(PLATFORM.moduleName('./treemap/level'));
    return this;
  }
  ejRangeNavigator(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangenavigator'));
    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangeseries'));
    return this;
  }
  ejDiagram(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
    return this;
  }
  ejHeatMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./heatmap/heatmap'));
    return this;
  }
  ejHeatMapLegend(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
    return this;
  }
  ejSparkline(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sparkline/sparkline'));
    return this;
  }
  ejSymbolPalette(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./symbolpalette/symbolpalette'));
    return this;
  }
  ejOverview(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./overview/overview'));
    return this;
  }
  ejPager(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pager/pager'));
    return this;
  }
  ejBulletGraph(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./bulletgraph/bulletgraph'));
    this.resources.push(PLATFORM.moduleName('./bulletgraph/qualitativerange'));
    return this;
  }
  ejCircularGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./circulargauge/circulargauge'));
    return this;
  }
  ejLinearGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./lineargauge/lineargauge'));
    return this;
  }
  ejDigitalGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./digitalgauge/digitalgauge'));
    return this;
  }
  ejSplitter(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
    return this;
  }
  ejDatePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  }
  ejGantt(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
    return this;
  }
  ejTreeGrid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treegrid/treegrid'));
    this.resources.push(PLATFORM.moduleName('./treegrid/treegridcolumn'));
    return this;
  }
  ejColorPicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
    return this;
  }
  ejDialog(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
    return this;
  }
  ejScroller(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scroller/scroller'));
    return this;
  }
  ejBarcode(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
    return this;
  }
  ejPdfViewer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pdfviewer/pdfviewer'));
    return this;
  }
  ejNumericTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
    return this;
  }
  ejCurrencyTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./currencytextbox/currencytextbox'));
    return this;
  }
  ejPercentageTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
    return this;
  }
  ejTimePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  }
  ejToolbar(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  }
  ejMenu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }
  ejMaskEdit(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./maskedit/maskedit'));
    return this;
  }
  ejTreeView(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
    return this;
  }
  ejKanban(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./kanban/kanban'));
    this.resources.push(PLATFORM.moduleName('./kanban/kanbancolumn'));
    return this;
  }
  ejRibbon(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ribbon/ribbon'));
    return this;
  }
  ejSpreadsheet(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
    this.resources.push(PLATFORM.moduleName('./spreadsheet/sheet'));
    return this;
  }
  ejRating(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rating/rating'));
    return this;
  }
  ejListBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
    return this;
  }
  ejListView(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listview/listview'));
    return this;
  }
  ejNavigationDrawer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
    return this;
  }
  ejRotator(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rotator/rotator'));
    return this;
  }
  ejRTE(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rte/rte'));
    return this;
  }
  ejDropDownList(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
    return this;
  }
  ejComboBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
    return this;
  }
  ejAutocomplete(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  }
  ejRadialMenu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radialmenu/radialmenu'));
    this.resources.push(PLATFORM.moduleName('./radialmenu/item'));
    return this;
  }
  ejRadialSlider(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radialslider/radialslider'));
    return this;
  }
  ejTile(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tile/tile'));
    return this;
  }
  ejAccordion(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./accordion/accordion'));
    return this;
  }
  ejTab(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tab/tab'));
    return this;
  }
  ejCheckBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  }
  ejRadioButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radiobutton/radiobutton'));
    return this;
  }
  ejToggleButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./togglebutton/togglebutton'));
    return this;
  }
  ejSplitButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitbutton/splitbutton'));
    return this;
  }
  ejGroupButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./groupbutton/groupbutton'));
    return this;
  }
  ejDateTimePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
    return this;
  }
  ejDateRangePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
    return this;
  }
  ejProgressBar(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
    return this;
  }
  ejTagCloud(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tagcloud/tagcloud'));
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }
  ejSlider(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./slider/slider'));
    return this;
  }
  ejFileExplorer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./fileexplorer/fileexplorer'));
    return this;
  }
  ejPivotGrid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
    return this;
  }
  ejPivotChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotchart/pivotchart'));
    return this;
  }
  ejPivotGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgauge/pivotgauge'));
    return this;
  }
  ejPivotSchemaDesigner(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
    return this;
  }
  ejPivotTreeMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivottreemap/pivottreemap'));
    return this;
  }
  ejWaitingPopup(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./waitingpopup/waitingpopup'));
    return this;
  }
  ejReportViewer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./reportviewer/reportviewer'));
    return this;
  }
  ejSchedule(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./schedule/schedule'));
    this.resources.push(PLATFORM.moduleName('./schedule/scheduleresource'));
    return this;
  }
  ejUploadbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./uploadbox/uploadbox'));
    return this;
  }
  ejSignature(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./signature/signature'));
    return this;
  }
  ejTooltip(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  }
  ejSpellCheck(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spellcheck/spellcheck'));
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/template'));
    return this;
  }
  ej2DatePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/datepicker/datepicker'));
    return this;
  }
  ej2Accordion(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/accordion/accordion'));
    return this;
  }
  ej2Grid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/grid/grid'));
    this.resources.push(PLATFORM.moduleName('./ej2/grid/column'));
    return this;
  }
  ej2Template(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/ej2-template'));
    return this;
  }
  ej2DateTimePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/datetimepicker/datetimepicker'));
    return this;
  }
  ej2Diagram(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/diagram/diagram'));
    return this;
  }
  ej2Overview(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/overview/overview'));
    return this;
  }
  ej2RTE(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/rte/rte'));
    return this;
  }
  ej2Tab(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/tab/tab'));
    return this;
  }
  ej2PdfViewer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/pdfviewer/pdfviewer'));
    return this;
  }
  ej2LinearGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/lineargauge/lineargauge'));
    return this;
  }
  ej2Chart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/chart/chart'));
    this.resources.push(PLATFORM.moduleName('./ej2/chart/series'));
    return this;
  }
  ej2MaskEdit(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/maskedit/maskedit'));
    return this;
  }
  ej2Button(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/button/button'));
    return this;
  }
  ej2DropDownButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/dropdownbutton/dropdownbutton'));
    return this;
  }
  ej2ProgressButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/progressbutton/progressbutton'));
    return this;
  }
  ej2SplitButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/splitbutton/splitbutton'));
    return this;
  }
  ej2ChipList(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/chips/chiplist'));
    this.resources.push(PLATFORM.moduleName('./ej2/chips/chips'));
    return this;
  }
  ej2AutoComplete(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/autocomplete/autocomplete'));
    return this;
  }
  ej2ComboBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/combobox/combobox'));
    return this;
  }
  ej2DropDownList(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/dropdownlist/dropdownlist'));
    return this;
  }
  ej2MultiSelect(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/multiselect/multiselect'));
    return this;
  }
  ej2ListBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/listbox/listbox'));
    return this;
  }
  ej2TextBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/textbox/textbox'));
    return this;
  }
  ej2NumericTextBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/numerictextbox/numerictextbox'));
    return this;
  }
  ej2RadioButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/radiobutton/radiobutton'));
    return this;
  }
  ej2CheckBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/checkbox/checkbox'));
    return this;
  }
  ej2ColorPicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/colorpicker/colorpicker'));
    return this;
  }
  ej2Uploader(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/uploader/uploader'));
    return this;
  }
  ej2Slider(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/slider/slider'));
    return this;
  }
  ej2Switch(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/switch/switch'));
    return this;
  }
  ej2Toast(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/toast/toast'));
    return this;
  }
  ej2Schedule(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/schedule/schedule'));
    return this;
  }
  ej2ContextMenu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/contextmenu/contextmenu'));
    return this;
  }
  ej2Menu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ej2/menu/menu'));
    return this;
  }
}

