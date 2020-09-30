"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireEvent = exports.getEventOption = void 0;
const util_1 = require("./util");
const constants_1 = require("./constants");
function getEventOption(element) {
    let name;
    let attr;
    let attributes = element.attributes;
    let option = {};
    for (let i = 0, len = attributes.length; i < len; i++) {
        attr = attributes[i];
        name = attr.name;
        if (!name.startsWith(constants_1.constants.eventPrefix)) {
            continue;
        }
        let actualEventName = name.split('.')[0];
        let eventName = util_1.unhyphenate(actualEventName.split(constants_1.constants.eventPrefix)[1]);
        option[eventName] = e => fireEvent(element, actualEventName, e);
    }
    return option;
}
exports.getEventOption = getEventOption;
function fireEvent(element, name, data = {}) {
    let event = new CustomEvent(name, {
        detail: data,
        bubbles: true
    });
    element.dispatchEvent(event);
    return event;
}
exports.fireEvent = fireEvent;

//# sourceMappingURL=events.js.map
