import { Util } from './util';
import { Container } from 'aurelia-dependency-injection';
import { constants } from './constants';
export function getEventOption(element) {
    let name;
    let attr;
    let attributes = element.attributes;
    let option = {};
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    for (let i = 0, len = attributes.length; i < len; i++) {
        attr = attributes[i];
        name = attr.name;
        if (!name.startsWith(constants.eventPrefix)) {
            continue;
        }
        let actualEventName = name.split('.')[0];
        let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
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
