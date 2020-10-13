import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customAttribute} from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { ColorPicker } from '@syncfusion/ej2-inputs';

export const inputs: string[] = ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'];
export const twoWays: string[] = ['value'];

@customAttribute(`${constants.ej2AttributePrefix}color-picker`)
@generateBindables(constants.ej2AttributePrefix + 'ColorPicker', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ColorPickerComponent extends ColorPicker implements IComponentBase {    
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);        
    }
    public addTwoWay: (propList: string[]) => void;
}