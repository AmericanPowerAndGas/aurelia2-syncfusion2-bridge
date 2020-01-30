import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Slider } from '@syncfusion/ej2-inputs';

@customElement(`${constants.ej2ElementPrefix}slider`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Slider', ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'], ['value'], null, null)
@inject(Element)
export class Ej2Slider extends Ej2WidgetBase {
    constructor(element) {
        super(Slider);
        this.isEditor = true;
        this.element = element;
    }
}

