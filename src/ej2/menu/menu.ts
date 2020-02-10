import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Menu } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}menu`)
@inlineView("<template><ul></ul></template>")
    @generateBindables(constants.ej2ElementPrefix + 'Menu', ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title'], [], null, null)
@inject(Element)
export class ej2Menu extends Ej2WidgetBase {
    constructor(element) {
        super(Menu);
        this.element = element;
    }
}

