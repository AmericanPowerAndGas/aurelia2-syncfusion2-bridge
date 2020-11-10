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
function createConfiguration() {
    return {
        register(container) {
            container.register(datepicker_1.DatePickerComponent, accordion_1.AccordionComponent, autocomplete_1.AutoCompleteComponent, button_1.ButtonComponent, calendar_1.CalendarComponent, series_1.SeriesComponent, chart_1.ChartComponent, checkbox_1.CheckBoxComponent, chip_1.ChipComponent, chiplist_1.ChipListComponent, colorpicker_1.ColorPickerComponent, combobox_1.ComboBoxComponent, contextmenu_1.ContextMenuComponent, dashboardlayout_1.DashboardLayoutComponent, daterangepicker_1.DateRangePickerComponent, datetimepicker_1.DateTimePickerComponent, diagram_1.DiagramComponent, dialog_1.DialogComponent, dropdownbutton_1.DropDownButtonComponent, dropdownlist_1.DropDownListComponent, column_1.ColumnComponent, grid_1.GridComponent, lineargauge_1.LinearGaugeComponent, listbox_1.ListBoxComponent, listview_1.ListViewComponent, textbox_1.TextBoxComponent);
            return container;
        }
    };
}
exports.Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
