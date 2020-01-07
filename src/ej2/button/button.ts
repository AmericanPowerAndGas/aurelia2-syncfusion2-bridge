import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { Button } from '@syncfusion/ej2-buttons';

@customAttribute(`${constants.ej2AttributePrefix}button`)
@generateBindables(constants.ej2AttributePrefix + 'Button', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'], [], null,null)
@inject(Element)
export class ej2Button extends Ej2WidgetBase {
  constructor(element) {
    super(Button);
    this.element = element;
  }
}

