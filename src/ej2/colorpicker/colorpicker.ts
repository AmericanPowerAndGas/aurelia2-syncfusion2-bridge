import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { ColorPicker } from '@syncfusion/ej2-inputs';

@customAttribute(`${constants.ej2AttributePrefix}color-picker`)
@generateBindables(constants.ej2ElementPrefix + 'ColorPicker', ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'], ['value'], null, null)
@inject(Element)
export class Ej2ColorPicker extends Ej2WidgetBase {
    constructor(element) {
        super(ColorPicker);
        this.isEditor = true;
        this.element = element;
    }
}

