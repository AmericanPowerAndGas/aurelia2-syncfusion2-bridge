import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject, inlineView, customElement} from '../../common/common';
import { SplitButton  } from '@syncfusion/ej2-splitbuttons';

@customElement(`${constants.ej2AttributePrefix}split-button`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables(constants.ej2ElementPrefix + 'SplitButton', ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'], [], null, null)
@inject(Element)
export class ej2SplitButton extends Ej2WidgetBase {
    constructor(element) {
        super(SplitButton);
        this.element = element;        
    }
}

