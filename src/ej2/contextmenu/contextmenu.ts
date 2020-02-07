import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { ContextMenu } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}context-menu`)
@inlineView("<template><ul></ul></template>")
@generateBindables(constants.ej2ElementPrefix + 'ContextMenu', ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'], [], null, null)
@inject(Element)
export class ej2ContextMenu extends Ej2WidgetBase {
    constructor(element) {
        super(ContextMenu);
        this.element = element;
    }
}

