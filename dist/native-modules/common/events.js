import { unhyphenate } from './util';
import { constants } from './constants';
export function getEventOption(element) {
    let name;
    let attr;
    let attributes = element.attributes;
    let option = {};
    for (let i = 0, len = attributes.length; i < len; i++) {
        attr = attributes[i];
        name = attr.name;
        if (!name.startsWith(constants.eventPrefix)) {
            continue;
        }
        let actualEventName = name.split('.')[0];
        let eventName = unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
        option[eventName] = e => fireEvent(element, actualEventName, e);
    }
    return option;
}
export function fireEvent(element, name, data = {}) {
    let event = new CustomEvent(name, {
        detail: data,
        bubbles: true
    });
    element.dispatchEvent(event);
    return event;
}

//# sourceMappingURL=events.js.map
