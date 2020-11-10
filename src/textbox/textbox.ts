import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { TextBox } from '@syncfusion/ej2-inputs';
import { IComponentBase, ComponentBase } from '../common/component-base';

export const inputs: string[] = ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}text-box`)
    @generateBindables(constants.ej2ElementPrefix + 'TextBox', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class TextBoxComponent extends TextBox implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
