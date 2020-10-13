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
function createConfiguration() {
    return {
        register(container) {
            container.register(datepicker_1.DatePickerComponent, accordion_1.AccordionComponent, autocomplete_1.AutoCompleteComponent, button_1.ButtonComponent, calendar_1.CalendarComponent, series_1.SeriesComponent, chart_1.ChartComponent, checkbox_1.CheckBoxComponent, chip_1.ChipComponent, chiplist_1.ChipListComponent, colorpicker_1.ColorPickerComponent);
            return container;
        }
    };
}
exports.Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
