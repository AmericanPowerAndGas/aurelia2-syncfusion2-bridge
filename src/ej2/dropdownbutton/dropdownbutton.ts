import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';

@customAttribute(`${constants.ej2AttributePrefix}drop-down-button`)
@generateBindables(constants.ej2ElementPrefix + 'DropDownButton', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'], [], null, null)
@inject(Element)
export class ej2DropDownButton extends Ej2WidgetBase {
    constructor(element) {
        super(DropDownButton);        
        this.element = element;
    }
}

