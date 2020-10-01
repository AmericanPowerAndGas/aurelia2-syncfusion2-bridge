"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const datepicker_1 = require("./datepicker/datepicker");
const accordion_1 = require("./accordion/accordion");
function createConfiguration() {
    return {
        register(container) {
            container.register(datepicker_1.DatePickerComponent, accordion_1.AccordionComponent);
            return container;
        }
    };
}
exports.Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
