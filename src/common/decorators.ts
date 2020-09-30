import { Protocol, Constructable } from '@aurelia/kernel';
import { Metadata } from '@aurelia/metadata';
import { BindingMode, Bindable, BindableDefinition } from '@aurelia/runtime';
import { getBindablePropertyName } from './util';


export function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection): any {
    return function (target, key, descriptor, container) {

        inputs.push('options');
        inputs.push('widget');
        let len = inputs.length;
        if (observerCollection) {
            target.prototype.arrayObserver = [];
            observerCollection.forEach((element) => {
                target.prototype.arrayObserver.push(getBindablePropertyName(element));
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
                        registerProp(target,prop);
                    });
                } else {
                    registerProp(target,option);
                }
            }
        }
    };
}

function registerProp(target, option) {    
    let prop = getBindablePropertyName(option);
    Metadata.define(Bindable.name, BindableDefinition.create(prop, { mode: BindingMode.twoWay }), target, prop);
    Protocol.annotation.appendTo(target as Constructable, Bindable.keyFrom(prop));
}

//ej2 section

export function applyMixins(derivedClass: any, baseClass: any[]): void {
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            if (!derivedClass.prototype.hasOwnProperty(name) || baseClass.isFormBase) {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
        });
    });
}


export function componentMixins(baseClass: Function[]): ClassDecorator {
    return function (derivedClass: Function) {
        applyMixins(derivedClass, baseClass);
    };
}