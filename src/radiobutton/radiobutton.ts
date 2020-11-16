import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export const inputs: string[] = ['checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value'];
export const twoWays: string[] = ['checked'];

@customAttribute(`${constants.ej2AttributePrefix}radio-button`)
@generateBindables(constants.ej2ElementPrefix + 'RadioButton', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class RadioButtonComponent extends RadioButton implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
