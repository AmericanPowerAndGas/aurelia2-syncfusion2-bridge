import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { ProgressButton  } from '@syncfusion/ej2-splitbuttons';

@customAttribute(`${constants.ej2AttributePrefix}progress-button`)
@generateBindables(constants.ej2ElementPrefix + 'ProgressButton', ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'], [], null, null)
@inject(Element)
export class ej2ProgressButton  extends Ej2WidgetBase {
    constructor(element) {
        super(ProgressButton);        
        this.element = element;
    }
}

