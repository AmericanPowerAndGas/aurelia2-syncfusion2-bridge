import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Switch } from '@syncfusion/ej2-buttons';

@customElement(`${constants.ej2ElementPrefix}switch`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Switch', ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'], ['checked'], null, null)
@inject(Element)
export class Ej2Switch extends Ej2WidgetBase {
    constructor(element) {
        super(Switch);
        this.isEditor = true;
        this.element = element;
    }
}

