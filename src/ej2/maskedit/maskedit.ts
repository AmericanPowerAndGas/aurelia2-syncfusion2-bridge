import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';


@customAttribute(`${constants.ej2AttributePrefix}mask-edit`)
@generateBindables(constants.ej2AttributePrefix + 'MaskEdit', ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'readonly', 'showClearButton', 'value', 'width'], ['value'],[],null)
@inject(Element)
export class ej2MaskEdit extends Ej2WidgetBase {
  constructor(element) {
    super(MaskedTextBox);
    this.isEditor = true;
    this.element = element;
  }
}

