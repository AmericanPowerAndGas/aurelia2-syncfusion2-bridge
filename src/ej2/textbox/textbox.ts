import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject} from '../../common/common';
import { TextBox } from '@syncfusion/ej2-inputs';

@customAttribute(`${constants.ej2AttributePrefix}text-box`)
@generateBindables(constants.ej2ElementPrefix + 'TextBox', ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type','value', 'width'], ['value'], null, null)
@inject(Element)
export class Ej2TextBox extends Ej2WidgetBase {
    constructor(element) {
        super(TextBox);
        this.isEditor = true;
        this.element = element;
    }
}

