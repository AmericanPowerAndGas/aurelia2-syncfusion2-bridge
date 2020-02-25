import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Tooltip as TooltipAs } from '@syncfusion/ej2-popups';

@customElement(`${constants.ej2ElementPrefix}tooltip`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Tooltip', ['animation', 'closeDelay', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'], [], [], null)
@inject(Element)
export class ej2Tooltip extends Ej2WidgetBase {
    constructor(element) {
      super(TooltipAs);
        this.element = element;
    }
}

