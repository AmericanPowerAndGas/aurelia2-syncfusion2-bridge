import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject, children } from '../../common/common';
import { Toolbar as ToolbarAlias } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}toolbar`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Toolbar', ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'], [], null, null)
@inject(Element)
export class Ej2Toolbar extends Ej2WidgetBase {    
    @children(`e-items`) items = [];
    constructor(element) {
      super(ToolbarAlias);        
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
    }
}

