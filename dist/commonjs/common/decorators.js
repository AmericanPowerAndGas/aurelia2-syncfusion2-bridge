"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentMixins = exports.applyMixins = exports.generateBindables = void 0;
const kernel_1 = require("@aurelia/kernel");
const metadata_1 = require("@aurelia/metadata");
const runtime_1 = require("@aurelia/runtime");
const util_1 = require("./util");
function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
    return function (target, key, descriptor, container) {
        inputs.push('options');
        inputs.push('widget');
        let len = inputs.length;
        if (observerCollection) {
            target.prototype.arrayObserver = [];
            observerCollection.forEach((element) => {
                target.prototype.arrayObserver.push(util_1.getBindablePropertyName(element));
            });
        }
        target.prototype.controlName = controlName;
        target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
        target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
        if (len) {
            target.prototype.controlProperties = inputs;
            for (let i = 0; i < len; i++) {
                let option = inputs[i];
                if (abbrevProperties && option in abbrevProperties) {
                    option = abbrevProperties[option];
                    option.forEach((prop) => {
                        registerProp(target, prop);
                    });
                }
                else {
                    registerProp(target, option);
                }
            }
        }
    };
}
exports.generateBindables = generateBindables;
function registerProp(target, option) {
    let prop = util_1.getBindablePropertyName(option);
    metadata_1.Metadata.define(runtime_1.Bindable.name, runtime_1.BindableDefinition.create(prop, { mode: runtime_1.BindingMode.twoWay }), target, prop);
    kernel_1.Protocol.annotation.appendTo(target, runtime_1.Bindable.keyFrom(prop));
}
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            if (!derivedClass.prototype.hasOwnProperty(name) || baseClass.isFormBase) {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
        });
    });
}
exports.applyMixins = applyMixins;
function componentMixins(baseClass) {
    return function (derivedClass) {
        applyMixins(derivedClass, baseClass);
    };
}
exports.componentMixins = componentMixins;

//# sourceMappingURL=decorators.js.map
