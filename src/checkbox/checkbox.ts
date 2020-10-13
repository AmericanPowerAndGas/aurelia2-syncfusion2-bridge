import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement,customAttribute } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export const inputs: string[] = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value'];
export const twoWays: string[] = ['checked', 'indeterminate'];

@customAttribute(`${constants.ej2AttributePrefix}check-box`)
@generateBindables(constants.ej2AttributePrefix + 'CheckBox', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class CheckBoxComponent extends CheckBox implements IComponentBase {   
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}