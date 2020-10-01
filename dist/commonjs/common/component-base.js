"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentBase = void 0;
const util_1 = require("./util");
const events_1 = require("./events");
class ComponentBase {
    constructor() {
        this.isProtectedOnChange = true;
    }
    afterAttach() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(template => template.setTemplates());
        }
        this.createWidget({ element: this.element });
    }
    afterDetach() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
    }
    createWidget(option) {
        this.allOption = this.getWidgetOptions(option.element);
        for (let prop in this.allOption) {
            this[prop] = this.allOption[prop];
        }
        this.appendTo(option.element);
    }
    propertyChanged(property, newValue, oldValue) {
        let modelValue;
        let prop = util_1.getControlPropertyName(this, property);
        if (prop) {
            if (prop === 'widget') {
                return;
            }
            else if (prop !== 'options') {
                modelValue = this[prop];
                let isTwoway = typeof modelValue === 'function';
                if (isTwoway) {
                    modelValue = modelValue();
                }
                if (modelValue !== newValue) {
                    if (isTwoway) {
                        newValue = this.addTwoways(prop);
                    }
                    this[prop] = newValue;
                }
            }
            else {
                this['value'] = newValue;
            }
        }
    }
    getWidgetOptions(element) {
        let propOptions;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        }
        else {
            propOptions = util_1.getOptions(this, this.controlProperties);
        }
        let eventOption = events_1.getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);
    }
    getChildProperties(options) {
        let PropertyName = this.childPropertyName;
        if (PropertyName == 'series')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-series-collection > e-series')).map((x) => x.au.controller.viewModel);
        if (PropertyName == 'chips')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-chips > e-chip')).map((x) => x.au.controller.viewModel);
        if (PropertyName == 'items')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-items > e-item')).map((x) => x.au.controller.viewModel);
        let childCollection = this[PropertyName];
        let len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            let childProperties = childCollection[0].controlProperties;
            for (let i = 0; i < len; i++) {
                options[PropertyName].push(util_1.getOptions(childCollection[i], childProperties));
            }
        }
    }
    addTwoways(prop) {
        let model = this;
        let value = window.firstValue;
        return function (newVal, isApp) {
            if (value === window.firstValue) {
                let viewModelProp = util_1.getBindablePropertyName(prop);
                value = model[viewModelProp];
                if (value === undefined) {
                    value = this.defaults[prop];
                }
                return value;
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) {
                return null;
            }
            value = newVal;
            if (!isApp && util_1.hasValue(newVal)) {
                let viewModelProp = util_1.getBindablePropertyName(prop);
                model[viewModelProp] = newVal;
            }
            return null;
        };
    }
    addTwoWay(propList) {
        this.twoWays = propList;
    }
    saveChanges(key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            if (this.twoWays.indexOf(key) > -1) {
                let viewModelProp = util_1.getBindablePropertyName(key);
                if (viewModelProp && newValue !== oldValue) {
                    this[viewModelProp] = newValue;
                }
            }
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        let changeTime = setTimeout(this.dataBind.bind(this));
        let clearUpdate = () => {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    }
    ;
}
exports.ComponentBase = ComponentBase;

//# sourceMappingURL=component-base.js.map
