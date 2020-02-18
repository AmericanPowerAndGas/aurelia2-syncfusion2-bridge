import { delayed } from '../common/decorators';
import { getEventOption } from '../common/events';
import { Util } from '../common/util';
import { constants } from '../common/constants';

export class Ej2WidgetBase {
    element: any;
    allOption: any;
    ejOptions: any;
    util: Util;
    hasChildProperty: any;
    childPropertyName: any;
    isEditor: any;
    twoWays: any;
    eWidget: any;
    widget: any;
    controlProperties: any;
    arrayObserver: any;
    subscription: any;
    bindingInstance: any;
    eValue: any;
    parentCtx: any;
    componentBaseRef: any;
    controlName: any;
    templateProcessor: any;
    defaults: any;
    constructor(componentBaseRef) {
        this.componentBaseRef = componentBaseRef;
    }
    /**
    * To Create an widget
    * @param option Object which contains  Element in which  widget will be created
    */
    createWidget(option) {       
        this.allOption = this.getWidgetOptions(option.element);         
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        if (this.controlName == constants.ej2ElementPrefix + 'MaskEdit' && this.allOption.value)
            this.allOption.value = this.allOption.value.toString();  
        if (this.controlName == constants.ej2ElementPrefix + 'ContextMenu' || this.controlName == constants.ej2ElementPrefix + 'Menu')           
            this.eWidget = this.widget = new this.componentBaseRef(this.allOption, option.element.firstChild);       
        else {
            this.eWidget = this.widget = new this.componentBaseRef(this.allOption);
            this.widget.appendTo(option.element);
        }       
                                                            
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        
        if (this.isEditor || this.controlName == constants.ej2ElementPrefix + 'RTE') {

            this.widget.change = (arg) => {               
                if (this.controlName == constants.ej2ElementPrefix + 'RTE' && arg && arg.element && 'eValue' in this)
                    this[this.util.getBindablePropertyName('value')] = arg.element.value;
                else if (this.controlName == constants.ej2ElementPrefix + 'Switch' && arg)
                    this[this.util.getBindablePropertyName('checked')] = arg.checked;
                else if (this.controlName == constants.ej2ElementPrefix + 'DateRangePicker' && arg) {
                    this[this.util.getBindablePropertyName('value')] = arg.value;
                    this[this.util.getBindablePropertyName('startDate')] = arg.startDate;
                    this[this.util.getBindablePropertyName('endDate')] = arg.endDate;
                }                    
                else if (arg && 'eValue' in this)
                    this[this.util.getBindablePropertyName('value')] = arg.value;               
            };

        }       
    }

    bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.value = this.eValue === undefined ? null : this.eValue;
        }
    }

    createTwoWays() {
        let model = this.allOption;
        let twoWays = this.twoWays;
        let len = twoWays.length;
        for (let i = 0; i < len; i++) {
            let prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
        }
    }

    addTwoways(prop) {
        let model = this;
      let value = (<any>window).firstValue;
        return function (newVal, isApp) {
          if (value === (<any>window).firstValue) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
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
            if (!isApp && model.util.hasValue(newVal)) {
                let viewModelProp = model.util.getBindablePropertyName(prop);
                model[viewModelProp] = newVal;
            }
            return null;
        };
    }
    /**
   * To get property and event options from the element
   * @param element Element from which options are acquired
   */
    getWidgetOptions(element) {       
        let propOptions;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        } else {
            propOptions = this.util.getOptions(this, this.controlProperties);
        }        
        let eventOption = getEventOption(element);       
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);           
        }
        return Object.assign({}, propOptions, eventOption);
    }
    getChildProperties(options) {       
        let PropertyName = this.childPropertyName;        
        if (PropertyName == 'series')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-series-collection > e-series')).map((x: any) => x.au.controller.viewModel);
        if (PropertyName == 'chips')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-chips > e-chip')).map((x: any) => x.au.controller.viewModel);  
        if (PropertyName == 'items')
            this[PropertyName] = Array.from(this.element.querySelectorAll('e-items > e-item')).map((x: any) => x.au.controller.viewModel);  
        let childCollection = this[PropertyName];           
        let len = childCollection.length;       
        if (len) {
            options[PropertyName] = [];
            let childProperties = childCollection[0].controlProperties;            
            for (let i = 0; i < len; i++) {               
                options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
        }
    }

    @delayed()
    attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(template => template.setTemplates());
        }
        this.util = new Util();
        this.createWidget({ element: this.element });
    }
    unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    }

    unbind() {
        this.unsubscribe();
    }
    /**
     * To change widget model value
     * @param property The viewModel property name
     * @param newValue New value of the property
     * @param oldvalue Pld value of the property
     */
    propertyChanged(property, newValue, oldValue) {
        if (this.widget) {
            let modelValue;
            let prop = this.util.getControlPropertyName(this, property);
            this.unsubscribe();
            if (this.arrayObserver) {
                this.arrayObserver.forEach((arrayProp) => {
                    if (this[arrayProp] instanceof Array) {
                        this.subscription = this.bindingInstance.collectionObserver(this[arrayProp]).subscribe((e) => {
                            this.update(e);
                        });
                    }
                });
            }
            if (prop) {
                if (prop === 'widget') {
                    return;
                } else if (prop !== 'options') {
                    modelValue = this.widget[prop];
                    let isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(prop);
                        }
                        this.widget[prop] = newValue;
                    }
                } else {
                    this.widget['value']=newValue;
                }
            }
        }
    }

    update(e) {
        let modelValue;
        let newVal;
        if (e.length) {
            this.arrayObserver.forEach((arrayProp) => {
                if (this[arrayProp] instanceof Array) {
                    let prop = this.util.getControlPropertyName(this, arrayProp);
                    modelValue = this.widget.model[prop];
                    if (typeof modelValue === 'function') {
                        modelValue = modelValue();
                        newVal = modelValue;
                        newVal = this.addTwoways(prop);
                        this.widget[prop] = newVal;
                    } else {
                        this.widget[prop] = modelValue;
                    }
                }
            });
        }
    }

    detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }        
        if (this.widget) {
            this.widget.destroy();
        }        
    }

}
