"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const datepicker_1 = require("./datepicker/datepicker");
const accordion_1 = require("./accordion/accordion");
const autocomplete_1 = require("./autocomplete/autocomplete");
const button_1 = require("./button/button");
function createConfiguration() {
    return {
        register(container) {
            container.register(datepicker_1.DatePickerComponent, accordion_1.AccordionComponent, autocomplete_1.AutoCompleteComponent, button_1.ButtonComponent);
            return container;
        }
    };
}
exports.Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
