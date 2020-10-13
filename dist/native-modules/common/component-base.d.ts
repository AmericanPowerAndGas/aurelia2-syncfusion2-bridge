export interface IComponentBase {
    addTwoWay: (propList: string[]) => void;
}
export declare class ComponentBase<T> {
    ejOptions: any;
    controlProperties: any;
    allOption: any;
    element: HTMLElement;
    appendTo: (ele: string | HTMLElement) => void;
    change: (arg: any) => void;
    protected isProtectedOnChange: boolean;
    protected oldProperties: {
        [key: string]: Object;
    };
    protected changedProperties: {
        [key: string]: Object;
    };
    protected finalUpdate: Function;
    dataBind: Function;
    properties: Object;
    twoWays: string[];
    childPropertyName: any;
    hasChildProperty: any;
    templateProcessor: any;
    afterAttach(): void;
    afterDetach(): void;
    createComponent(option: any): void;
    propertyChanged(property: any, newValue: any, oldValue: any): void;
    getWidgetOptions(element: any): any;
    getChildProperties(options: any): void;
    addTwoways(prop: any): (newVal: any, isApp: any) => any;
    protected addTwoWay(propList: string[]): void;
    protected saveChanges(key: string, newValue: Object, oldValue: Object): void;
}
