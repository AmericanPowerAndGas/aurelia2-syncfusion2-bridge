import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';

export const inputs: string[] = ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'readonly', 'showClearButton', 'value', 'width'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}masked-text-box`)
@generateBindables(constants.ej2ElementPrefix + 'MaskedTextBox', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class MaskedTextBoxComponent extends MaskedTextBox implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
