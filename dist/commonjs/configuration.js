"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const datepicker_1 = require("./datepicker/datepicker");
const accordion_1 = require("./accordion/accordion");
const autocomplete_1 = require("./autocomplete/autocomplete");
const button_1 = require("./button/button");
const calendar_1 = require("./calendar/calendar");
const series_1 = require("./chart/series");
const chart_1 = require("./chart/chart");
const checkbox_1 = require("./checkbox/checkbox");
const chip_1 = require("./chips/chip");
const chiplist_1 = require("./chips/chiplist");
const colorpicker_1 = require("./colorpicker/colorpicker");
const combobox_1 = require("./combobox/combobox");
const contextmenu_1 = require("./contextmenu/contextmenu");
const dashboardlayout_1 = require("./dashboardlayout/dashboardlayout");
const datetimepicker_1 = require("./datetimepicker/datetimepicker");
const daterangepicker_1 = require("./daterangepicker/daterangepicker");
const diagram_1 = require("./diagram/diagram");
const dialog_1 = require("./dialog/dialog");
const dropdownbutton_1 = require("./dropdownbutton/dropdownbutton");
const dropdownlist_1 = require("./dropdownlist/dropdownlist");
const column_1 = require("./grid/column");
const grid_1 = require("./grid/grid");
const lineargauge_1 = require("./lineargauge/lineargauge");
const listbox_1 = require("./listbox/listbox");
const listview_1 = require("./listview/listview");
const textbox_1 = require("./textbox/textbox");
const timepicker_1 = require("./timepicker/timepicker");
const toast_1 = require("./toast/toast");
const maskedtextbox_1 = require("./maskedtextbox/maskedtextbox");
const numerictextbox_1 = require("./numerictextbox/numerictextbox");
const progressbutton_1 = require("./progressbutton/progressbutton");
const radiobutton_1 = require("./radiobutton/radiobutton");
const slider_1 = require("./slider/slider");
const splitbutton_1 = require("./splitbutton/splitbutton");
const splitter_1 = require("./splitter/splitter");
const switch_1 = require("./switch/switch");
const tab_1 = require("./tab/tab");
const items_1 = require("./toolbar/items");
const toolbar_1 = require("./toolbar/toolbar");
const tooltip_1 = require("./tooltip/tooltip");
const uploader_1 = require("./uploader/uploader");
const menu_1 = require("./menu/menu");
const multiselect_1 = require("./multiselect/multiselect");
const overview_1 = require("./overview/overview");
const pdfviewer_1 = require("./pdfviewer/pdfviewer");
const schedule_1 = require("./schedule/schedule");
function createConfiguration() {
    return {
        register(container) {
            container.register(datepicker_1.DatePickerComponent, accordion_1.AccordionComponent, autocomplete_1.AutoCompleteComponent, button_1.ButtonComponent, calendar_1.CalendarComponent, series_1.SeriesComponent, chart_1.ChartComponent, checkbox_1.CheckBoxComponent, chip_1.ChipComponent, chiplist_1.ChipListComponent, colorpicker_1.ColorPickerComponent, combobox_1.ComboBoxComponent, contextmenu_1.ContextMenuComponent, dashboardlayout_1.DashboardLayoutComponent, daterangepicker_1.DateRangePickerComponent, datetimepicker_1.DateTimePickerComponent, diagram_1.DiagramComponent, dialog_1.DialogComponent, dropdownbutton_1.DropDownButtonComponent, dropdownlist_1.DropDownListComponent, column_1.ColumnComponent, grid_1.GridComponent, lineargauge_1.LinearGaugeComponent, listbox_1.ListBoxComponent, listview_1.ListViewComponent, textbox_1.TextBoxComponent, timepicker_1.TimePickerComponent, toast_1.ToastComponent, maskedtextbox_1.MaskedTextBoxComponent, numerictextbox_1.NumericTextBoxComponent, progressbutton_1.ProgressButtonComponent, radiobutton_1.RadioButtonComponent, slider_1.SliderComponent, splitbutton_1.SplitButtonComponent, splitter_1.SplitterComponent, switch_1.SwitchComponent, tab_1.TabComponent, items_1.ItemsComponent, toolbar_1.ToolbarComponent, tooltip_1.TooltipComponent, uploader_1.UploaderComponent, menu_1.MenuComponent, multiselect_1.MultiSelectComponent, overview_1.OverviewComponent, pdfviewer_1.PdfViewerComponent, schedule_1.ScheduleComponent);
            return container;
        }
    };
}
exports.Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
