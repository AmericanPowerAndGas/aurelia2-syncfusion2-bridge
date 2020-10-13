import { getBindablePropertyName, hasValue, getOptions, getControlPropertyName } from "./util";
import { getEventOption } from "./events";

export interface IComponentBase {    
    addTwoWay: (propList: string[]) => void;    
}


export class ComponentBase<T> {
    ejOptions: any;
    controlProperties: any;
    allOption: any;
    public element: HTMLElement;
    public appendTo: (ele: string | HTMLElement) => void;
    change: (arg: any) => void;


    protected isProtectedOnChange: boolean = true;    
    protected oldProperties: { [key: string]: Object };
    protected changedProperties: { [key: string]: Object };
    protected finalUpdate: Function;
    public dataBind: Function;
    public properties: Object;
    twoWays: string[];
    childPropertyName: any;
    hasChildProperty: any;
    templateProcessor: any;

    afterAttach() {            
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(template => template.setTemplates());
        }   
        this.createComponent({ element: this.element });
    }
    afterDetach() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }        
    }    
    createComponent(option) {
        this.allOption = this.getWidgetOptions(option.element);
        for (let prop in this.allOption) {
            this[prop] = this.allOption[prop];
        }
        this.appendTo(option.element);        
    }
    propertyChanged(property, newValue, oldValue) {
        let modelValue;
        let prop = getControlPropertyName(this, property);
        
        if (prop) {
            if (prop === 'widget') {
                return;
            } else if (prop !== 'options') {
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
            } else {
                this['value'] = newValue;
            }
        }

    }
    getWidgetOptions(element) {
        let propOptions;
        if (this.ejOptions) {
            propOptions = this.ejOptions;
        } else {
            propOptions = getOptions(this, this.controlProperties);
        }
        let eventOption = getEventOption(element);
        if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
        }
        return Object.assign({}, propOptions, eventOption);        
    }
    getChildProperties(options) {
        let PropertyName = this.childPropertyName.replace("ChildProp", "");
        let childCollection = this[this.childPropertyName];
        let len = childCollection.length;
        if (len) {
            options[PropertyName] = [];
            let childProperties = childCollection[0].controlProperties;
            for (let i = 0; i < len; i++) {
                options[PropertyName].push(getOptions(childCollection[i], childProperties));
            }
        }
    }
    addTwoways(prop) {
        let model = this;
        let value = (<any>window).firstValue;
        return function (newVal, isApp) {
            if (value === (<any>window).firstValue) {
                let viewModelProp = getBindablePropertyName(prop);
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
            if (!isApp && hasValue(newVal)) {
                let viewModelProp = getBindablePropertyName(prop);
                model[viewModelProp] = newVal;
            }
            return null;
        };
    }
    protected addTwoWay(propList: string[]): void {        
        this.twoWays = propList;       
    }
    protected saveChanges(key: string, newValue: Object, oldValue: Object): void {
        if (this.isProtectedOnChange) {
            if (this.twoWays.indexOf(key) > -1) {
                let viewModelProp = getBindablePropertyName(key);
                if (viewModelProp && newValue !== oldValue) {
                    this[viewModelProp] = newValue;
                }

            }
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();

        // tslint:disable-next-line:no-any
        let changeTime: any = setTimeout(this.dataBind.bind(this));
        let clearUpdate: Function = () => {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;

    };
}
