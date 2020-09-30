"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasValue = exports.getControlPropertyName = exports.getOptions = exports.unhyphenate = exports.getBindablePropertyName = void 0;
const constants_1 = require("./constants");
function getBindablePropertyName(propertyName) {
    let name = `${constants_1.constants.bindablePrefix}${propertyName}`;
    return unhyphenate(name);
}
exports.getBindablePropertyName = getBindablePropertyName;
function unhyphenate(name) {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
exports.unhyphenate = unhyphenate;
function getOptions(model, properties) {
    let bindableproperites = {};
    let value;
    for (let prop of properties) {
        if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
            model.abbrevProperties[prop].some(property => {
                value = model[getBindablePropertyName(property)];
                return hasValue(value);
            });
        }
        else {
            value = model[getBindablePropertyName(prop)];
        }
        if (hasValue(value)) {
            if (typeof value === 'string') {
                value = processData(value);
            }
            bindableproperites[prop] = value;
        }
    }
    return bindableproperites;
}
exports.getOptions = getOptions;
function getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
        if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
            options.abbrevProperties[prop].some(props => {
                property = propertyName === getBindablePropertyName(props) ? prop : undefined;
                return property;
            });
            if (property)
                break;
        }
        else if (propertyName === getBindablePropertyName(prop)) {
            property = prop;
            break;
        }
    }
    return property;
}
exports.getControlPropertyName = getControlPropertyName;
function hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
}
exports.hasValue = hasValue;
function processData(value) {
    if (value === 'true') {
        return true;
    }
    else if (value === 'false') {
        return false;
    }
    else if (+value + '' === value) {
        return +value;
    }
    return value;
}

//# sourceMappingURL=util.js.map
