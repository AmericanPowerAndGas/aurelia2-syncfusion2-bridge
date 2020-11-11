import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

export const inputs: string[] = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}numeric-text-box`)
@generateBindables(constants.ej2ElementPrefix + 'NumericTextBox', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class NumericTextBoxComponent extends NumericTextBox implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
