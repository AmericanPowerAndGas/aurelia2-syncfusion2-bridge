import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { IComponentBase, ComponentBase } from '../common/component-base';

export const inputs: string[] = ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}time-picker`)
    @generateBindables(constants.ej2ElementPrefix + 'TimePicker', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class TimePickerComponent extends TimePicker implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
