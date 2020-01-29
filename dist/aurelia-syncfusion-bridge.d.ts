declare module 'aurelia-syncfusion-bridge' {
  import {
    PLATFORM
  } from 'aurelia-pal';
  import {
    customAttribute,
    bindable,
    customElement,
    children,
    TemplatingEngine,
    inlineView,
    BindableProperty,
    HtmlBehaviorResource,
    noView,
    processContent,
    TargetInstruction
  } from 'aurelia-templating';
  import {
    inject,
    Container
  } from 'aurelia-dependency-injection';
  import {
    metadata
  } from 'aurelia-metadata';
  import {
    TaskQueue
  } from 'aurelia-task-queue';
  import {
    bindingMode,
    BindingEngine
  } from 'aurelia-binding';
  import {
    Accordion
  } from '@syncfusion/ej2-navigations';
  import {
    AutoComplete
  } from '@syncfusion/ej2-dropdowns';
  import {
    Button
  } from '@syncfusion/ej2-buttons';
  import {
    Chart,
    Category,
    Legend,
    Tooltip,
    StackingLineSeries,
    BarSeries,
    StackingBarSeries,
    LineSeries,
    StepLineSeries,
    SplineSeries,
    MultiColoredLineSeries,
    AreaSeries,
    RangeAreaSeries,
    DateTime,
    StackingAreaSeries,
    StepAreaSeries,
    MultiColoredAreaSeries,
    ColumnSeries,
    StackingColumnSeries,
    RangeColumnSeries,
    ScatterSeries,
    BubbleSeries
  } from '@syncfusion/ej2-charts';
  import {
    CheckBox
  } from '@syncfusion/ej2-buttons';
  import {
    ChipList
  } from '@syncfusion/ej2-buttons';
  import {
    ColorPicker
  } from '@syncfusion/ej2-inputs';
  import {
    ComboBox
  } from '@syncfusion/ej2-dropdowns';
  import {
    DatePicker
  } from '@syncfusion/ej2-calendars';
  import {
    DateTimePicker
  } from '@syncfusion/ej2-calendars';
  import {
    Diagram,
    DataBinding,
    HierarchicalTree
  } from '@syncfusion/ej2-diagrams';
  import {
    DropDownButton
  } from '@syncfusion/ej2-splitbuttons';
  import {
    DropDownList
  } from '@syncfusion/ej2-dropdowns';
  import {
    Grid,
    Group,
    Filter,
    Page,
    Sort,
    Search,
    Toolbar,
    Freeze,
    Selection,
    Aggregate,
    DetailRow,
    PdfExport,
    ExcelExport,
    ContextMenu,
    Edit
  } from '@syncfusion/ej2-grids';
  import {
    LinearGauge
  } from '@syncfusion/ej2-lineargauge';
  import {
    ListBox,
    CheckBoxSelection
  } from '@syncfusion/ej2-dropdowns';
  import {
    MaskedTextBox
  } from '@syncfusion/ej2-inputs';
  import {
    MultiSelect
  } from '@syncfusion/ej2-dropdowns';
  import {
    NumericTextBox
  } from '@syncfusion/ej2-inputs';
  import {
    Overview
  } from '@syncfusion/ej2-diagrams';
  import {
    PdfViewer,
    Toolbar as PdfToolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    TextSearch,
    Annotation
  } from '@syncfusion/ej2-pdfviewer';
  import {
    ProgressButton
  } from '@syncfusion/ej2-splitbuttons';
  import {
    RadioButton
  } from '@syncfusion/ej2-buttons';
  import {
    RichTextEditor,
    Toolbar as rteToolbar,
    Link,
    Image,
    Count,
    HtmlEditor,
    QuickToolbar,
    Table
  } from '@syncfusion/ej2-richtexteditor';
  import {
    SplitButton
  } from '@syncfusion/ej2-splitbuttons';
  import {
    Tab
  } from '@syncfusion/ej2-navigations';
  import {
    TextBox
  } from '@syncfusion/ej2-inputs';
  import {
    Uploader
  } from '@syncfusion/ej2-inputs';
  export class EjConfigBuilder {
    constructor();
    useAll(): any;
    withoutGlobalResources(): any;
    ejGrid(): any;
    ejChart(): any;
    ejSunburstChart(): any;
    ejMap(): any;
    ejTreeMap(): any;
    ejRangeNavigator(): any;
    ejDiagram(): any;
    ejHeatMap(): any;
    ejHeatMapLegend(): any;
    ejSparkline(): any;
    ejSymbolPalette(): any;
    ejOverview(): any;
    ejPager(): any;
    ejBulletGraph(): any;
    ejCircularGauge(): any;
    ejLinearGauge(): any;
    ejDigitalGauge(): any;
    ejSplitter(): any;
    ejDatePicker(): any;
    ejGantt(): any;
    ejTreeGrid(): any;
    ejColorPicker(): any;
    ejDialog(): any;
    ejScroller(): any;
    ejBarcode(): any;
    ejPdfViewer(): any;
    ejNumericTextbox(): any;
    ejCurrencyTextbox(): any;
    ejPercentageTextbox(): any;
    ejTimePicker(): any;
    ejToolbar(): any;
    ejMenu(): any;
    ejMaskEdit(): any;
    ejTreeView(): any;
    ejKanban(): any;
    ejRibbon(): any;
    ejSpreadsheet(): any;
    ejRating(): any;
    ejListBox(): any;
    ejListView(): any;
    ejNavigationDrawer(): any;
    ejRotator(): any;
    ejRTE(): any;
    ejDropDownList(): any;
    ejComboBox(): any;
    ejAutocomplete(): any;
    ejRadialMenu(): any;
    ejRadialSlider(): any;
    ejTile(): any;
    ejAccordion(): any;
    ejTab(): any;
    ejCheckBox(): any;
    ejRadioButton(): any;
    ejToggleButton(): any;
    ejSplitButton(): any;
    ejGroupButton(): any;
    ejDateTimePicker(): any;
    ejDateRangePicker(): any;
    ejProgressBar(): any;
    ejTagCloud(): any;
    ejButton(): any;
    ejSlider(): any;
    ejFileExplorer(): any;
    ejPivotGrid(): any;
    ejPivotChart(): any;
    ejPivotGauge(): any;
    ejPivotSchemaDesigner(): any;
    ejPivotTreeMap(): any;
    ejWaitingPopup(): any;
    ejReportViewer(): any;
    ejSchedule(): any;
    ejUploadbox(): any;
    ejSignature(): any;
    ejTooltip(): any;
    ejSpellCheck(): any;
    ejTemplate(): any;
    ej2DatePicker(): any;
    ej2Accordion(): any;
    ej2Grid(): any;
    ej2Template(): any;
    ej2DateTimePicker(): any;
    ej2Diagram(): any;
    ej2Overview(): any;
    ej2RTE(): any;
    ej2Tab(): any;
    ej2PdfViewer(): any;
    ej2LinearGauge(): any;
    ej2Chart(): any;
    ej2MaskEdit(): any;
    ej2Button(): any;
    ej2DropDownButton(): any;
    ej2ProgressButton(): any;
    ej2SplitButton(): any;
    ej2ChipList(): any;
    ej2AutoComplete(): any;
    ej2ComboBox(): any;
    ej2DropDownList(): any;
    ej2MultiSelect(): any;
    ej2ListBox(): any;
    ej2TextBox(): any;
    ej2NumericTextBox(): any;
    ej2RadioButton(): any;
    ej2CheckBox(): any;
    ej2ColorPicker(): any;
    ej2Uploader(): any;
  }
  export function configure(aurelia?: any, configCallback?: any): any;
  export {
    ejAccordion
  };
  export {
    ejAutocomplete
  };
  export {
    ejBarcode
  };
  export {
    ejBulletGraph
  };
  export {
    QualitativeRange
  };
  export {
    ejButton
  };
  export {
    ejChart
  };
  export {
    Series
  };
  export {
    ejCheckBox
  };
  export {
    ejCircularGauge
  };
  export {
    ejColorPicker
  };
  export {
    ejComboBox
  };
  export {
    customAttribute,
    bindable,
    inject,
    inlineView,
    customElement,
    children,
    TemplatingEngine
  };
  export const constants: any;
  export function generateBindables(controlName?: any, inputs?: any, twoWayProperties?: any, abbrevProperties?: any, observerCollection?: any): any;
  export function delayed(): any;
  export {
    Ej2TemplateProcessor
  };
  export {
    Ej2Template
  };
  export class Ej2WidgetBase {
    constructor(componentBaseRef?: any);
    createWidget(option?: any): any;
    bind(ctx?: any, overrideCtx?: any): any;
    createTwoWays(): any;
    addTwoways(prop?: any): any;
    getWidgetOptions(element?: any): any;
    getChildProperties(options?: any): any;
    attached(): any;
    unsubscribe(): any;
    unbind(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    update(e?: any): any;
    detached(): any;
  }
  export function getEventOption(element?: any): any;
  export function fireEvent(element?: any, name?: any, data?: any): any;
  export {
    TemplateProcessor
  };
  export {
    Template
  };
  export class Util {
    getBindablePropertyName(propertyName?: any): any;
    _unhyphenate(name?: any): any;
    getOptions(model?: any, properties?: any): any;
    getControlPropertyName(options?: any, propertyName?: any): any;
    hasValue(prop?: any): any;
    processData(value?: any): any;
  }
  export class WidgetBase {
    createWidget(option?: any): any;
    bind(ctx?: any, overrideCtx?: any): any;
    createTwoWays(): any;
    addTwoways(prop?: any): any;
    getWidgetOptions(element?: any): any;
    getChildProperties(options?: any): any;
    attached(): any;
    unsubscribe(): any;
    unbind(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    update(e?: any): any;
    detached(): any;
  }
  export {
    ejCurrencyTextbox
  };
  export {
    ejDatePicker
  };
  export {
    ejDateRangePicker
  };
  export {
    ejDateTimePicker
  };
  export {
    ejDiagram
  };
  export {
    ejDialog
  };
  export {
    ejDigitalGauge
  };
  export {
    ejDropDownList
  };
  export {
    ejFileExplorer
  };
  export {
    ejGantt
  };
  export {
    Column
  };
  export {
    ejGrid
  };
  export {
    ejGroupButton
  };
  export {
    ejHeatMap
  };
  export {
    ejHeatMapLegend
  };
  export {
    ejKanban
  };
  export {
    KanbanColumn
  };
  export {
    ejLinearGauge
  };
  export {
    ejListBox
  };
  export {
    ejListView
  };
  export {
    Layer
  };
  export {
    ejMap
  };
  export {
    ejMaskEdit
  };
  export {
    ejMenu
  };
  export {
    ejNavigationDrawer
  };
  export {
    ejNumericTextbox
  };
  export {
    ejOverview
  };
  export {
    ejPager
  };
  export {
    ejPdfViewer
  };
  export {
    ejPercentageTextbox
  };
  export {
    ejPivotChart
  };
  export {
    ejPivotGauge
  };
  export {
    ejPivotGrid
  };
  export {
    ejPivotSchemaDesigner
  };
  export {
    ejPivotTreeMap
  };
  export {
    ejProgressBar
  };
  export {
    Item
  };
  export {
    ejRadialMenu
  };
  export {
    ejRadialSlider
  };
  export {
    ejRadioButton
  };
  export {
    ejRangeNavigator
  };
  export {
    RangeSeries
  };
  export {
    ejRating
  };
  export {
    ejReportViewer
  };
  export {
    ejRibbon
  };
  export {
    ejRotator
  };
  export {
    ejRte
  };
  export {
    ejSchedule
  };
  export {
    ScheduleResource
  };
  export {
    ejScroller
  };
  export {
    ejSignature
  };
  export {
    ejSlider
  };
  export {
    ejSparkline
  };
  export {
    ejSpellCheck
  };
  export {
    ejSplitButton
  };
  export {
    ejSplitter
  };
  export {
    Sheet
  };
  export {
    ejSpreadsheet
  };
  export {
    ejSunburstChart
  };
  export {
    SunburstLevels
  };
  export {
    ejSymbolPalette
  };
  export {
    ejTab
  };
  export {
    ejTagCloud
  };
  export {
    ejTile
  };
  export {
    ejTimePicker
  };
  export {
    ejToggleButton
  };
  export {
    ejToolbar
  };
  export {
    ejTooltip
  };
  export {
    ejTreeGrid
  };
  export {
    TreeGridColumn
  };
  export {
    Level
  };
  export {
    ejTreeMap
  };
  export {
    ejTreeView
  };
  export {
    ejUploadbox
  };
  export {
    ejWaitingPopup
  };
  export {
    Ej2Accordion
  };
  export {
    Ej2AutoComplete
  };
  export {
    ej2Button
  };
  export {
    ej2Chart
  };
  export {
    SeriesVM
  };
  export {
    Ej2CheckBox
  };
  export {
    ej2ChipList
  };
  export {
    Chips
  };
  export {
    Ej2ColorPicker
  };
  export {
    Ej2ComboBox
  };
  export {
    Ej2DatePicker
  };
  export {
    ej2DateTimePicker
  };
  export {
    ej2Diagram
  };
  export {
    ej2DropDownButton
  };
  export {
    Ej2DropDownList
  };
  export {
    Ej2Column
  };
  export {
    Ej2Grid
  };
  export {
    ej2LinearGauge
  };
  export {
    Ej2ListBox
  };
  export {
    ej2MaskEdit
  };
  export {
    Ej2MultiSelect
  };
  export {
    Ej2NumericTextBox
  };
  export {
    ej2Overview
  };
  export {
    ej2PdfViewer
  };
  export {
    ej2ProgressButton
  };
  export {
    Ej2RadioButton
  };
  export {
    ej2Rte
  };
  export {
    ej2SplitButton
  };
  export {
    ej2Tab
  };
  export {
    Ej2TextBox
  };
  export {
    Ej2Uploader
  };
}